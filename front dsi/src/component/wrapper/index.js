import React from 'react';
import Header from './Header';
import Footer from '../Footer';

function index(props) {
    return (
        <div>
            <Header/>
            {props.children}
        </div>
    );
}

export default index;