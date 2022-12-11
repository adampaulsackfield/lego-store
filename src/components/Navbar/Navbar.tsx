import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineGridView } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';

import styles from './Navbar.module.scss';

const Navbar: React.FC = (): ReactElement => {
	return (
		<nav className={styles.navbar}>
			<Link className={styles.link} to='/toys'>
				Toys <span className={styles.highlight}>Hot</span>
			</Link>

			<Link className={styles.link} to='/catalog'>
				<MdOutlineGridView /> Catalog
			</Link>

			<Link className={styles.link} to='/characters'>
				Characters
			</Link>

			<Link className={styles.link} to='/brand'>
				Brand
			</Link>

			<Link className={styles.link} to='/brand'>
				<p className={styles.background}>
					<FaUserAlt className={styles.userIcon} />
				</p>
				Adam
			</Link>
		</nav>
	);
};

export default Navbar;
