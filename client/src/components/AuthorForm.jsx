import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router';


export default (props) => {
    const {onSubmitProp, initialName, errors} = props;
    const [name, setName] = useState(initialName);
    // const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
        // navigate("/authors");
    }

    return(
        <form className="form-group" onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p className="error" key={index}>{err}</p>)}
            <p className="form-group row">
                <label className="col-2">Name:</label>
                <input className="form-control col-6" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
            </p>
            <p className="form-group row ml-4">
                <button className="btn btn-info ml-3" onClick={()=>navigate("/authors")}>Cancel</button>
                <input className="btn btn-primary ml-2" type="submit" />
            </p>
        </form>
    )
}