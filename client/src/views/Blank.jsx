import React, {useState, useEffect} from 'react';
import AuthorForm from '../components/AuthorForm';
import {Link, navigate} from '@reach/router';
import axios from 'axios';

export default (props) => {
    // const {shit} = props;
    return(
        <div>
            <Link to="/authors">Home</Link>
            <p>Piss off</p>
            <p>{props.num} can be added to the authors list if you want</p>
        </div>
    )
}