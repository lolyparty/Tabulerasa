import './dashboard-card.css';
import arrowDown from '../../../assets/Icons/arrow-down-red.svg';
import arrowUp from '../../../assets/Icons/arrow-up-green.svg';

const DashboardCard = ({ name, icon, profit, amount, percent }) => {
	return (
		<div className="card_container">
			<div className="card_name-container">
				<p>{name}</p>
				<div>
					<img src={!!profit ? arrowUp : arrowDown} alt="" />
					<p className={`${profit ? 'profit' : 'loss'}`}>{percent}%</p>
				</div>
			</div>
			<div className="card_icon_number-container">
				<img src={icon} alt="" />
				<p>{amount}</p>
			</div>
		</div>
	);
};

export default DashboardCard;
