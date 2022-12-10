import React, { ReactElement } from 'react';

import { GiMushroomHouse } from 'react-icons/gi';
// Images
import logo from '../../assets/images/logo.png';

// Styles
import styles from './Sidebar.module.scss';

const Sidebar: React.FC = (): ReactElement => {
	return (
		<section className={styles.sidebar}>
			<header className={styles.header}>
				<img className={styles.logo} src={logo} alt='Lego Brick' />
				<div className={styles.brand}>
					<h1 className={styles.text}>Lego Land</h1>
					<p className={styles.subtext}>Red Brick</p>
				</div>
			</header>

			<div className={styles.breadCrumbs}>
				<GiMushroomHouse color='#000' />
				<p className={styles.main}>Main page</p>
				<p className={styles.separator}>&gt;</p>
				<p className={styles.sub}>Catalog</p>
			</div>
		</section>
	);
};

export default Sidebar;
