import React from 'react';
import {shallow, mount} from 'enzyme';

import AddMaintenanceForm from './AddMaintenanceForm';

describe('<AddForm />', () => {
	it('Renders without crashing', () => {
			shallow(<AddForm />);
	});

	it('Renders the add button initially', () => {
			const wrapper = shallow(<AddMaintenanceForm />);
			expect(wrapper.hasClass('add-maintenance')).toEqual(true);
	});

	it('Should render the add form when adding', () => {
			const wrapper = shallow(<AddMaintenanceForm />);
			wrapper.update();
			expect(wrapper.hasClass('add-maintenance')).toEqual(true);
	});

	it('Should switch to adding when the add button is clicked', () => {
			const wrapper = shallow(<AddMaintenanceForm />);
			wrapper.simulate('click');
			expect(wrapper.state('adding')).toEqual(true);
	});

	it('Should fire the onAdd callback when the form is submitted', () => {
			const callback = jest.fn();
			const wrapper = mount(<AddMaintenanceForm onSubmit={callback} />);
			const value = 'Foobar';
			wrapper.update();
			wrapper.find('textarea[type="text"]').instance().value = value;
			wrapper.simulate('submit');
			expect(callback).toHaveBeenCalledWith(value);
	});

	it('Should not fire onAdd if the input is empty', () => {
			const callback = jest.fn();
			const wrapper = mount(<AddMaintenanceForm onSubmit={callback} />);
			wrapper.simulate('submit');
			expect(callback).not.toHaveBeenCalled();
	});
});