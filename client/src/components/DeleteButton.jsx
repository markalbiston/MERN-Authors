import React from 'react';
import axios from 'axios';

export default (props) => {
    // const {authorId, successCallback} = props;
    const deleteAuthor = e => {
        e.preventDefault();
        // console.log(props.authorId);
        axios.delete('http://localhost:8000/api/authors/delete/' + props.authorId)
        .then(response => {
            props.successCallback();
            // console.log("deleted")
        })
    }
    return(
        <button className="btn btn-danger" onClick={deleteAuthor}>Delete</button>
    )
}