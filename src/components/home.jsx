import Dashboard from './dashboard/dashboard';
import LeftSidebar from './left-sidebar/left-sidebar';
import './home.css';

const Home = () => {
	return (
		<div className="container">
			<LeftSidebar />
			<Dashboard />
		</div>
	);
};

export default Home;
