import React, { ReactElement } from 'react';
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

				<CatalogueContainer />
			</main>
		</div>
	);
};

export default Layout;
