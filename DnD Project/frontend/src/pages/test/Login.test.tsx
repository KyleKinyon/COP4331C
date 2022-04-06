import React from 'react';
import reactDOM from 'react-dom';
import Button from './../button';
import { mount } from "enzyme";
import { render, fireEvent } from '@testing-library/react';
import { shallow } from 'enzyme';
import Login from './Login';
import { timeStamp } from 'console';

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe('Test case for testing login',() =>{
    let wrapper;
    test('username check',()=>
    {
    wrapper = shallow(<Login/>);
    wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'user'}});
    expect(wrapper.state('username')).toEqual('user');
    })
    it('password check',()=>{
    wrapper = shallow(<Login/>);
    wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'pass'}});
    expect(wrapper.state('password')).toEqual('pass');
    })

    it('login check with right data',()=>{
        wrapper = shallow(<Login/>);
        wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'user'}});
        wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'pass'}});
        wrapper.find('button').simulate('click');
        expect(wrapper.state('isLogined')).toBe(true);
        })
        it('login check with wrong data',()=>{
        wrapper = shallow(<Login/>);
        wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'user'}});
        wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'pass'}});
        wrapper.find('button').simulate('click');
        expect(wrapper.state('isLogined')).toBe(false);
    })
})



