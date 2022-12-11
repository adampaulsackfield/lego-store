import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import CatalogueContainer from '../../containers/CatalogueContainer';

// Components
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

// Styles
import styles from './Layout.module.scss';

const Layout: React.FC = (): ReactElement => {
	return (
		<div className={styles.layout}>
			<Sidebar />

			<main className={styles.main}>
				<Navbar />

				<Routes>
					<Route path='/' element={'Hi'} />
					<Route path='/toys' element={'<About />'} />
				</Routes>

				<CatalogueContainer />
			</main>
		</div>
	);
};

export default Layout;
