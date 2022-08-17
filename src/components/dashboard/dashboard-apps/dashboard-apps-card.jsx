import './dashboard-apps-card.css';
import companyIcon from '../../../assets/Icons/company - icon.svg';
import usersIcon from '../../../assets/Icons/users - icon.svg';
import arrowUpIcon from '../../../assets/Icons/arrow-up-green.svg';
import arrowDownIcon from '../../../assets/Icons/arrow-down-red.svg';

const DashboardAppCard = ({
	name,
	comingSoon,
	companiesProfit,
	companiesPercent,
	companiesNumber,
	usersNumber,
	userspercent,
	usersProfit,
}) => {
	return (
		<div className={`app-container ${!!comingSoon && 'coming-soon'}`}>
			<p className="app-name">{name}</p>
			{!!comingSoon ? (
				<p className="coming_soon-name">Coming Soon</p>
			) : (
				<div className="app_stats-container">
					<div className="app-company_stat">
						<img src={companyIcon} alt={`${name} company statistics`} />
						<p className="app_company-number">{companiesNumber}</p>
						<div className="app_company-percentage">
							<img
								src={!!companiesProfit ? arrowUpIcon : arrowDownIcon}
								alt={`${name} Company percentage`}
							/>
							<p
								className={`app_company-percentage-number ${
									!!companiesProfit ? 'profit' : 'loss'
								}`}
							>{`${companiesPercent}%`}</p>
						</div>
					</div>
					<div className="app-users_stat">
						<img src={usersIcon} alt={`${name} Users statistics`} />
						<p className="app_users-number">{usersNumber}</p>
						<div className="app_users-percentage">
							<img
								src={!!usersProfit ? arrowUpIcon : arrowDownIcon}
								alt={`${name} users percentage`}
							/>
							<p
								className={`app_users-percentage-number ${
									!!usersProfit ? 'profit' : 'loss'
								}`}
							>{`${userspercent}%`}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default DashboardAppCard;
