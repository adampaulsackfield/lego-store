import React, { ReactElement } from 'react';

import styles from './Sidebar.module.scss';

const Sidebar: React.FC = (): ReactElement => {
	return <div className={styles.sidebar}>Sidebar</div>;
};

export default Sidebar;
