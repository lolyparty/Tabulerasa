import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './dashboard-graph.css';

const DashboardGraph = () => {
	const [activeTab, setActiveTab] = useState('companies');

	const showCompanies = () => {
		setActiveTab('companies');
	};

	const showUsers = () => {
		setActiveTab('users');
	};

	return (
		<div className="dashboard_graph-container">
			<div className="dashboard_graph-content">
				<p className="graph-title">Number of companies YTD</p>
				<div className="company_users-btn-container">
					<button
						className={`graph_tab-btn ${
							activeTab === 'companies' ? 'companies-graph' : ''
						}`}
						onClick={showCompanies}
					>
						Companies
					</button>
					<button
						className={`graph_tab-btn ${
							activeTab === 'users' ? 'users-graph' : ''
						}`}
						onClick={showUsers}
					>
						Users
					</button>
				</div>
			</div>
			<Line
				datasetIdKey="0"
				data={{
					labels: [
						'Jan',
						'feb',
						'Mar',
						'Apr',
						'May',
						'Jun',
						'Jul',
						'Aug',
						'Sep',
						'Oct',
						'Nov',
						'Dec',
					],
					plugins: {
						legend: {
							display: false,
						},
					},
					datasets: [
						{
							label: '',
							data: [0, 20, 50, 43, 40, 55, 67, 68, 73, 74],
							fill: true,
							borderColor: ['#FFCA00'],
							backgroundColor: ['#FFF4CC', '#FFF4CC'],
							tension: 0.5,
						},
					],
				}}
				options={{
					scales: {
						xAxes: {
							grid: {
								drawBorder: false,
								display: false,
							},
						},

						yAxes: {
							grid: {
								drawBorder: false,
								display: false,
							},
						},
					},
				}}
			/>
		</div>
	);
};

export default DashboardGraph;
