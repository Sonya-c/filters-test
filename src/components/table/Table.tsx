
import { capitalize } from "../../lib/utils";

export default function Table({
    data,
    headers = [],
    className = "",
}: {
    data: object[],
    headers?: string[],
    className?: string,
}) {
    if (headers.length === 0) headers = Object.keys(data[0]);

    return <table className={"table-auto " + className}>
        <thead>
            <tr className="bg-gray-200">
                {headers.map((header, index) =>
                    <th className="p-3" key={index}>{capitalize(header)}</th>
                )}
            </tr>
        </thead>

        <tbody >
            {data.map(entry =>
                <tr className="border-t-2 border-b-2 border-slate-300">{
                    headers.map((header, index) =>
                        <td key={index}> {entry[header as keyof typeof entry]} </td>
                    )}
                </tr>
            )}
        </tbody>
    </table>
}