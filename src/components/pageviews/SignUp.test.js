import React from 'react';
import {shallow, mount} from 'enzyme';

import SignUp from './SignUp';

describe('<SignUp />', () => {
	it('Renders without crashing', () => {
			shallow(<EditMaintenanceForm />);
	});

	it('Renders the edit button initially', () => {
			const wrapper = shallow(<EditMaintenanceForm />);
			expect(wrapper.hasClass('signup')).toEqual(true);
	});

	it('Should render the edit form when editing', () => {
			const wrapper = shallow(<EditMaintenanceForm />);
			wrapper.update();
			expect(wrapper.hasClass('signup')).toEqual(true);
	});


	it('Should fire the onSubmit callback when the form is submitted', () => {
			const callback = jest.fn();
			const wrapper = mount(<EditMaintenanceForm onSubmit={callback} />);
			const value = 'Foobar';
			wrapper.update();
			wrapper.find('textarea[type="text"]').instance().value = value;
			wrapper.simulate('submit');
			expect(callback).toHaveBeenCalledWith(value);
	});
