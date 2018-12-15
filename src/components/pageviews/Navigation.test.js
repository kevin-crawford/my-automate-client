import React from 'react';
import {shallow, mount} from 'enzyme';

import Navigation from './Navigation';

describe('<EditMaintenanceForm />', () => {
	it('Renders without crashing', () => {
			shallow(<Navigation />);
	});

	it('Renders the lougout button initially', () => {
			const wrapper = shallow(<Navigation />);
			expect(wrapper.hasClass('lougtout')).toEqual(true);
	});

	it('Should render the garage nav button', () => {
			const wrapper = shallow(<Navigation />);
			wrapper.update();
			expect(wrapper.hasClass('garage)).toEqual(true);
	});


	it('Should fire the onSubmit callback when the user logs out', () => {
			const callback = jest.fn();
			const wrapper = mount(<Navigation onSubmit={callback} />);
			
			wrapper.update();
		.value = value;
			wrapper.simulate('submit');
			expect(callback).toHaveBeenCalledWith(value);
	});

