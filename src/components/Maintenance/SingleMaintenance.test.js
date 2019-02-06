

import React from 'react';
import {shallow, mount} from 'enzyme';

import Maintenance from './Maintenance';
import SingleMaintenanceItem from './SingleMaintenanceItem'


describe('<Maintenance />', () => {
	it('Renders without crashing', () => {
			shallow(<Maintenance />);
	});

	it('Renders the vehicle component initially', () => {
			const wrapper = shallow(<Vehicle/>);
			expect(wrapper.hasClass('edit-maintenance')).toEqual(true);
	});

	it('Should render the single maintenenance component when updated'), () => {
			const wrapper = shallow(<SingleMaintenanceItem />);
			wrapper.update();
			expect(wrapper.hasClass('vehicle')).toEqual(true);
		}
	});

