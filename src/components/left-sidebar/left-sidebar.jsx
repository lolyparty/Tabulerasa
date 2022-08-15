import User from './user/user';
import NavbarTab from './navbar-tabs/navbar-tabs';
import './left-sidebar.css';
import profilePicture from '../../assets/Images/profile-pic.png';

const LeftSidebar = () => {
	return (
		<div className="leftsidebar_container">
			<User
				name="Peter Curry"
				role="Superadmin"
				profilePicSrc={profilePicture}
			/>
			<NavbarTab />
		</div>
	);
};

export default LeftSidebar;
