import { useState } from 'react';
import dropdown from '../../../assets/Icons/arrow-down.svg';
import './user.css';
import React from 'react';

const User = ({ name, role, profilePicSrc }) => {
	const [showDropdown, setShowDropdown] = useState(false);

	const openDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	return (
		<div className="user_container">
			<div className="user_profile">
				<div className="user_profile-pic">
					<img src={profilePicSrc} alt="profile pic" />
				</div>
				<div className="user_profile-name">
					<p>{name}</p>
					<p>{role}</p>
				</div>
			</div>
			<div className="user_menu-container">
				<button className="user_menu-btn" onClick={openDropdown}>
					<img
						src={dropdown}
						alt=""
						className={`user_menu-btn-icon ${showDropdown && 'rotate'}`}
					/>
				</button>
			</div>
		</div>
	);
};

export default User;
