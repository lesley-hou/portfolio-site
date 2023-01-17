import React from 'react';
import './Styles/MadeWith.css';
import heart from '../Assets/App/heart.png'

const MadeWith = () => {
    return ( 
        <p className="made_with">Made with <img src={heart} width="13px"></img></p>
    );
}
 
export default MadeWith;
