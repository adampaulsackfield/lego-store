import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Styles
import './App.scss';

// Components
import Layout from './components/Layout/Layout';

function App() {
	return (
		<div className='App'>
			<Router>
				<Layout />
			</Router>
		</div>
	);
}

export default App;
