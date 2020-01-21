import React, {useState, useEffect} from 'react';
import AuthorForm from '../components/AuthorForm';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

export default (props) => {
    const {id} = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    const [noAuthor, setNoAuthor] = useState(false);


    console.log(id);
    useEffect(() => {
        console.log("HELLOOOOOOOOOO")
        axios.get('http://localhost:8000/api/authors/' + id)
        .then(response => {
            console.log(response.data)
            setAuthor(response.data)
            setLoaded(true)
        })
        .catch(err => {
            setNoAuthor(true)
        })
    },[]);

    console.log(author)
    const editAuthor = (updatedAuthor) => {
        axios.put('http://localhost:8000/api/authors/edit/'+ id, updatedAuthor)
        .then(response => {
            // setAuthors([...authors, response.data]);
            navigate("/authors");
        })
        .catch(err => {
            console.log(err);
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
            {noAuthor 
            ? <div>
                <h2>Author Not Found</h2>
                <p>Click <Link to={"/authors/new"}>here</Link> to add Author</p>
              </div>
            : <div>
                <h4>Edit this Author</h4>
                {loaded && <AuthorForm onSubmitProp={editAuthor} initialName={author.name} errors={errors}/>}
              </div>
            }
        </div>
    )
}