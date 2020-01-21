import React, {useState, useEffect} from 'react';
import AuthorForm from '../components/AuthorForm';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

export default () => {
    const [authors, setAuthors] = useState([]);
    const [errors, setErrors] = useState([]);

    // const [message, setMessage] = useState(false);

    const addNewAuthor = (newAuthor) => {
        axios.post('http://localhost:8000/api/authors/new', newAuthor)
        .then(response => {
            setAuthors([...authors, response.data]);
            navigate("/authors");

        })
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }

    return(
        <div>
            <Link to="/authors">Home</Link>
            <h4>Add a new Author</h4>
            {/* {message ? <p>name must be at least 2 characters.</p> : <div></div>} */}
            <AuthorForm onSubmitProp={addNewAuthor} initialName={""} errors={errors} />
        </div>
    )
}