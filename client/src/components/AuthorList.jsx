import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DeleteButton from './DeleteButton';
import {navigate} from '@reach/router';

export default (props) => {
    const [authors, setAuthors] = useState([]);
    const removeFromDom = authorId => {
        setAuthors(authors.filter(authors => authors._id !== authorId))
    }
    return(
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {props.authors.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1: -1).map((author, index) =>
                    <tr key={index}>
                        <td>{author.name}</td>
                        <td>
                            <button onClick={(e)=>{navigate("/authors/edit/"+author._id)}} className="btn btn-info mr-2">Edit</button>
                            <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)} />
                            {/* <button onClick={onClickHandler} className="btn btn-danger" onClick={deleteAuthor}>Delete</button> */}
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}
