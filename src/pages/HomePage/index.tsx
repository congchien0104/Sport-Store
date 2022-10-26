import React from 'react';
import ServiceHome from './components/serviceHome';
import HeroHome from './components/heroHome';
import OurProduct from './components/ourProduct';
import Category from './components/category';
import Temp from './components/temp';
import { getInfoAsync } from '../../apis/auths/getInfo.api';

const HomePage = () => {
	const getUser = async () => {
		const result = await getInfoAsync();
		console.log(result);
	};
	React.useEffect(() => {
		getUser();
	}, []);

	return (
		<main className='goto-here' style={{ overflow: 'hidden' }}>
			<div className="row">
				<div className="col-2">
				<ul className="list-group">
					<li className="list-group-item active" aria-current="true">An active item</li>
					<li className="list-group-item">A second item</li>
					<li className="list-group-item">A third item</li>
					<li className="list-group-item">A fourth item</li>
					<li className="list-group-item">And a fifth one</li>
				</ul>
				</div>
				<div className="col-10">
					<OurProduct />
				</div>
			</div>
			{/* <Category />
			<Temp /> */}
			{/* <HeroHome />
			<ServiceHome />
			<OurProduct /> */}
		</main>
	);
};
export default HomePage;
