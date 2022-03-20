import React from 'react';
import dp from '../Manish.jpg';
import {MdEmail } from 'react-icons/md';
import {FaLinkedin} from 'react-icons/fa';
const Profile = () =>{
    return (
        <div className="profile">
            <img src={dp} alt="" />
            <h2>Manish</h2>
            <p className="title">Web Apps Developer</p>
            <p className='website'>iammanish.in</p>
            <div className="ctas">
                <button className="btn btn-email">
                    <MdEmail size={18} />
                    <span>Email</span>
                </button>
                <button className="btn btn-linkedin">
                    <FaLinkedin size={18} color="white"/>
                    <span>Connect</span>
                </button>
            </div>
        </div>
    )
}
export default Profile;