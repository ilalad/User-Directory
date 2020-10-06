import React from "react";

function Table(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th style={{ color: "gray" }}>Image</th>
                    <th style={{ color: "gray" }}>Name</th>
                    <th style={{ color: "gray" }}>Email</th>
                    <th style={{ color: "gray" }}>Phone</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(results => (
                    <tr key={results.cell}>
                        <td>
                            <img alt={results.name.last} src={results.picture.medium} className="img-fluid" />
                        </td>
                        <td>{results.name.first} {results.name.last}</td>
                        <td>{results.email}</td>
                        <td>{results.phone}</td>
                    </tr>
                ))
                }
            </tbody >

        </table >

    );
}

export default Table;
