import React, { ReactElement } from 'react';

import styles from './Navbar.module.scss';

const Navbar: React.FC = (): ReactElement => {
	return <div className={styles.navbar}>Navbar</div>;
};

export default Navbar;
