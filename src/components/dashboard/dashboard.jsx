import { useState } from 'react';
import dateIcon from '../../assets/Icons/calendar-blank.svg';
import DashboardCard from './dashboard-cards/dashboard-card';
import DashboardAppCard from './dashboard-apps/dashboard-apps-card';
import './dashboard.css';
import companiesIcon from '../../assets/Icons/buildings.svg';
import usersIcon from '../../assets/Icons/users-three.svg';

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
			<div className="dashboard_overview-container">
				<div className="company_graph-container">
					<div className="company_users-cards-container">
						<DashboardCard
							name="Companies"
							percent="8"
							amount="76"
							icon={companiesIcon}
							profit={false}
							className="ok"
						/>
						<DashboardCard
							name="Users"
							percent="24"
							amount="1,034"
							icon={usersIcon}
							profit={true}
						/>
					</div>
				</div>
				<div className="dashboard_apps-container">
					<div className="dashboard_apps-name">
						<p>APPS</p>
					</div>
					<DashboardAppCard
						name="CU"
						comingSoon={false}
						companiesNumber="4"
						companiesProfit={false}
						companiesPercent="8"
						usersNumber="23"
						usersProfit={true}
						userspercent="4"
					/>
					<DashboardAppCard
						name="GP"
						comingSoon={false}
						companiesNumber="3"
						companiesProfit={false}
						companiesPercent="8"
						usersNumber="23"
						usersProfit={true}
						userspercent="4"
					/>
					<DashboardAppCard name="IR" comingSoon={true} />
					<DashboardAppCard name="ES" comingSoon={true} />
					<DashboardAppCard name="DP" comingSoon={true} />
					<DashboardAppCard name="CD" comingSoon={true} />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
