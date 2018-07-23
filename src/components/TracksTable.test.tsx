import * as React from 'react';
import TracksTable, {durationPipe} from './TracksTable';
import {shallow} from 'enzyme';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import { default as thunk } from 'redux-thunk';
import {DEFAULT_STATE} from '../constants';
import getReducers from '../reducers';

describe('durationPipe transforms correctly', () => {
  it('0 secs to 0:00', () => {
    expect(durationPipe(0)).toEqual('0:00');
  });
  it('61 secs to 1:01', () => {
    expect(durationPipe(61)).toEqual('1:01');
  });
  it('111 secs to 1:51', () => {
    expect(durationPipe(111)).toEqual('1:51');
  });
});

function setMockState(options) {
  const defaultState = {...DEFAULT_STATE, ...options};
  return createStore(combineReducers({...getReducers(defaultState)}), compose(applyMiddleware(thunk)));
}

describe('should give classes to sorting buttons correctly', () => {
  let store;
  let wrapper;

  it('first call should add sort', () => {
    const options = {
      sorting: {
        field: 'artist',
        direction: 'asc'
      }
    };
    store = setMockState(options);
    wrapper = shallow(<TracksTable store={store}/>).dive();
    expect(wrapper.instance().tableHeaderClassNames('artist', true)).toBe('glyphicon fr pointable glyphicon-sort-by-alphabet');
  });

  it('second call should reverse sorting', () => {
    const options = {
      sorting: {
        field: 'artist',
        direction: 'desc'}
    };
    store = setMockState(options);
    wrapper = shallow(<TracksTable store={store}/>).dive();
    expect(wrapper.instance().tableHeaderClassNames('artist', true)).toBe('glyphicon fr pointable glyphicon-sort-by-alphabet-alt');
  });

  it('field name change call should add neutral css class', () => {
    const options = {
      sorting: {
        field: 'artist',
        direction: 'desc'}
    };
    store = setMockState(options);
    wrapper = shallow(<TracksTable store={store}/>).dive();
    expect(wrapper.instance().tableHeaderClassNames('name', true)).toBe('glyphicon fr pointable glyphicon-sort');
  });

});

