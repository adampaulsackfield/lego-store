import { render, screen } from '@testing-library/react';

import Sidebar from './Sidebar';

describe('<Sidebar />', () => {
	it('should render the component', () => {
		render(<Sidebar />);

		const logoText = screen.getByText(/lego land/i);

		expect(logoText).toBeInTheDocument();
	});
});
