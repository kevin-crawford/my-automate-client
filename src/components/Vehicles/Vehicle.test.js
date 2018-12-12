import React from 'react';
import { shallow } from 'enzyme';

import Vehicle from './Vehicle';


describe('<Vehicle />', () => {
	it('Renders without crashing', () => {
		shallow(<Vehicle />)
	});
});