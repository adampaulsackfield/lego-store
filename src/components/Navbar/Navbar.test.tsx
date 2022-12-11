import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './Navbar';

const Wrapper = () => {
	return (
		<Router>
			<Navbar />
		</Router>
	);
};

describe('<Navbar />', () => {
	it('should render the component with all links', async () => {
		render(<Wrapper />);

		const links = await screen.findAllByRole('link');

		expect(links).toHaveLength(5);
	});
});
