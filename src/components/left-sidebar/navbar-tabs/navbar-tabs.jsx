import { useState } from 'react';
import Tab from './tab';
import './navbar-tabs.css';
import dashboardImg from '../../../assets/Icons/dashboard.svg';
import marketplaceIcon from '../../../assets/Icons/marketplace.svg';
import settingsIcon from '../../../assets/Icons/settings.svg';
import userIcon from '../../../assets/Icons/user.svg';
import jobsIcon from '../../../assets/Icons/jobs.svg';
import signoutIcon from '../../../assets/Icons/sign-out-bold.svg';

const NavbarTab = () => {
	const [activeTab, setActiveTab] = useState('Dashboard');

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<div className="navbar_container">
			<Tab
				name="Dashboard"
				activeTab={activeTab}
				tabChange={handleTabClick}
				tabIcon={dashboardImg}
			/>
			<Tab
				name="Marketplace"
				activeTab={activeTab}
				tabChange={handleTabClick}
				tabIcon={marketplaceIcon}
			/>
			<Tab
				name="Jobs"
				activeTab={activeTab}
				tabChange={handleTabClick}
				tabIcon={jobsIcon}
			/>
			<Tab
				name="Account"
				activeTab={activeTab}
				tabChange={handleTabClick}
				tabIcon={userIcon}
			/>
			<Tab
				name="Settings"
				activeTab={activeTab}
				tabChange={handleTabClick}
				tabIcon={settingsIcon}
			/>
			<button className="tab_container-btn">
				<div className="tab_name-container">
					<img src={signoutIcon} alt="Log out" />
					<p className="tab_name-logout">Log out</p>
				</div>
			</button>
		</div>
	);
};

export default NavbarTab;
