import './navbar-tabs.css';
import rightArrow from '../../../assets/Icons/arrow-right.svg';

const Tab = ({ name, activeTab, tabChange, tabIcon }) => {
	return (
		<button
			className={`tab_container-btn ${activeTab === name ? 'active' : ''}`}
			onClick={() => {
				tabChange(name);
			}}
		>
			<div className="tab_name-container">
				<img
					className={`tab_icon ${activeTab === name ? 'active' : ''}`}
					src={tabIcon}
					alt={`${name} Tab`}
				/>
				<p className={`tab_name ${activeTab === name ? 'active' : 'inactive'}`}>
					{name}
				</p>
			</div>
			<div className="tab_arrow-container">
				{activeTab === name && <img src={rightArrow} alt="" />}
			</div>
		</button>
	);
};

export default Tab;
