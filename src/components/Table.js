import React from "react";

function Table(props) {
    console.log(props.results)
    return (
        <div className="text-center">

            <h3>Image: {props.image}</h3>
            <h3>Name: {props.name}</h3>
            <h3>Phone: {props.phone}</h3>
            <h3>Email: {props.email}</h3>
            <h3>DOB: {props.dob}</h3>
        </div>
    );
}

export default Table;
