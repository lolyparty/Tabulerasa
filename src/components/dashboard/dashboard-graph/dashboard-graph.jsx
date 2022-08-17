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
			<div className="chart-container">
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

						datasets: [
							{
								label: '',
								data: [0, 30, 50, 43, 40, 55, 67, 68, 73, 74],
								fill: 'start',
								fillColor: '#fff',
								borderColor: ['#FFCA00'],
								backgroundColor: (context) => {
									const ctx = context.chart.ctx;
									const gradient = ctx.createLinearGradient(0, 0, 0, 500);
									gradient.addColorStop(0, 'rgba(255, 244, 204, 1)');
									gradient.addColorStop(1, 'rgba(255, 244, 204, 0)');
									return gradient;
								},
								// backgroundColor: [
								// 	'rgba(255, 244, 204, 1)',
								// 	'rgba(255, 244, 204, 0)',
								// 	'#fff',
								// ],
								tension: 0.25,
								borderWidth: 2,
								pointBackgroundColor: '#FFCA00',
							},
						],
					}}
					options={{
						plugins: {
							legend: {
								display: false,
							},
						},
						scales: {
							xAxes: {
								ticks: {
									color: '#919090',
								},
								grid: {
									drawBorder: false,
									display: false,
								},
							},

							yAxes: {
								ticks: {
									color: '#919090',
								},
								grid: {
									drawBorder: false,
								},
							},
						},
					}}
				/>
			</div>
		</div>
	);
};

export default DashboardGraph;
