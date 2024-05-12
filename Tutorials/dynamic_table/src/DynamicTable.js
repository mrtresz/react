
import TableData from "./TableData"; // Importing data for the table

function DynamicTable() {

    // Extracting column names from the first row of the table data
    const column = Object.keys(TableData[0]);

    // Function to generate table heading (th) based on column names
    const ThData = () => {
        return column.map((data) => {
            return <th key={data}>{data}</th>; // Generating th elements with column names as their content
        });
    };

    // Function to generate table row (tr) and its data (td)
    const tdData = () => {
        return TableData.map((data) => {
            return (
                <tr key={data.id}> {/* Assigning a unique key to each row */}
                    {
                        column.map((v) => {
                            return <td key={v}>{data[v]}</td>; // Generating td elements with corresponding data
                        })
                    }
                </tr>
            );
        });
    };

    // Render the dynamic table
    return (
        <table className="table">
            <thead>
                <tr>{ThData()}</tr> {/* Displaying table headers */}
            </thead>
            <tbody>
                {tdData()} {/* Displaying table data */}
            </tbody>
        </table>
    );
}

export default DynamicTable;
