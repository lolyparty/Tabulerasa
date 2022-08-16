import { useState } from 'react';
import dateIcon from '../../assets/Icons/calendar-blank.svg';
import './dashboard.css';

const Dashboard = () => {
	const [activeTab, setActiveTab] = useState('overview');

	const showOverview = () => {
		setActiveTab('overview');
	};

	const showCompanies = () => {
		setActiveTab('companies');
	};

	const showUsers = () => {
		setActiveTab('users');
	};

	return (
		<div className="dashboard_container">
			<div className="dashboard_header-container">
				<h1 className="dashboard_header-heading">Dashboard</h1>
				<div className="dashoard_date-container">
					<img src={dateIcon} alt="Date" />
					<p className="dashboard_date">Thur 16 June, 2022</p>
				</div>
			</div>
			<div className="dashboard_tab-btns-container">
				<button
					className={`dashboard_tab-btn ${
						activeTab === 'overview' ? 'active_statebtn' : ''
					}`}
					onClick={showOverview}
				>
					Overview
				</button>
				<button
					className={`dashboard_tab-btn ${
						activeTab === 'companies' ? 'active_statebtn' : ''
					}`}
					onClick={showCompanies}
				>
					Companies
				</button>
				<button
					className={`dashboard_tab-btn ${
						activeTab === 'users' ? 'active_statebtn' : ''
					}`}
					onClick={showUsers}
				>
					Users
				</button>
			</div>
		</div>
	);
};

export default Dashboard;
