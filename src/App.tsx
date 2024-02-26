import './App.css'

import papers from "./data/papers.json";
import Table from './components/table/Table';
import { useState } from 'react';

function App() {

  // const journals = [...new Set(papers.map(papers => papers.journal))]

  const [filteredPapers, setfilteredPapers] = useState(papers);

  const handleSearch = (event: React.SyntheticEvent): void => {
    const target = event.target as typeof event.target & {
      value: string
    }

    if (target.value.length < 0) {
      setfilteredPapers(papers);
      return;
    }

    const regExp = new RegExp(target.value + "+", "i");
    setfilteredPapers(papers.filter(paper => regExp.test(paper.title + " " + paper.authors.join(" "))))
  }

  return (
    <div className='w-full p-5'>
      <div className='w-full'>
        <label htmlFor="search-box">Search</label>
        <input placeholder='Type to Search...' type="text" name="search-box" id="search-box" className='block w-full p-3 border border-cyan-900 focus:border-cyan-600 focus:border-2 outline-none rounded drop-shadow-md' onChange={handleSearch} />
      </div>

      <Table data={filteredPapers} headers={["authors", "year", "title", "journal"]} className='mt-5 ' />
    </div>
  )
}

export default App
