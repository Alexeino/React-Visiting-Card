import React from 'react';
import {FaGithubSquare,FaFacebookSquare,FaInstagramSquare,FaLinkedin} from 'react-icons/fa';
const Footer = () =>{
    return (
        <div className="footer">
            <div className="icons">
                <FaInstagramSquare size={28} color="#918e9b"/>
                <FaGithubSquare size={28} color="#918e9b"/>
                <FaFacebookSquare size={28} color="#918e9b"/>
                <FaLinkedin size={28} color="#918e9b"/>
            </div>
        </div>
    )
}
export default Footer;