import React from 'react';
import {shallow, mount} from 'enzyme';

import EditMaintenanceForm from './EditMaintenanceForm';

describe('<EditMaintenanceForm />', () => {
	it('Renders without crashing', () => {
			shallow(<EditMaintenanceForm />);
	});

	it('Renders the edit button initially', () => {
			const wrapper = shallow(<EditMaintenanceForm />);
			expect(wrapper.hasClass('edit-maintenance')).toEqual(true);
	});

	it('Should render the edit form when editing', () => {
			const wrapper = shallow(<EditMaintenanceForm />);
			wrapper.update();
			expect(wrapper.hasClass('edit-maintenance')).toEqual(true);
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

	it('Should not fire onAdd if the input is empty', () => {
			const callback = jest.fn();
			const wrapper = mount(<AddMaintenanceForm onSubmit={callback} />);
			wrapper.simulate('submit');
			expect(callback).not.toHaveBeenCalled();
	});
});