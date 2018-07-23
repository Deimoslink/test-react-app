import * as React from 'react';
import TracksTable, {durationPipe} from './TracksTable';
import {shallow} from "enzyme";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import { default as thunk } from 'redux-thunk';
import {SHOW_PER_PAGE_OPTIONS} from "../constants";
import {createLogger} from 'redux-logger';

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

function setMockState(defaultState) {
  const filtersReducer = (state = defaultState.filters, action) => {
    if (action.type === 'SET_FILTERS') {
      return action.payload;
    }
    return state;
  };

  const sortingReducer = (state = defaultState.sorting, action) => {
    if (action.type === 'SET_SORTING') {
      return action.payload;
    }
    return state;
  };

  const showPerPageReducer = (state = defaultState.showPerPage, action) => {
    if (action.type === 'SET_SHOW_PER_PAGE') {
      return action.payload;
    }
    return state;
  };

  const currentPageReducer = (state = defaultState.currentPage, action) => {
    if (action.type === 'SET_CURRENT_PAGE') {
      return action.payload;
    }
    return state;
  };

  const resultsReducer = (state = defaultState.results, action) => {
    if (action.type === 'SET_RESULTS') {
      return action.payload;
    }
    return state;
  };

  const reducer = {
    filters: filtersReducer,
    sorting: sortingReducer,
    showPerPage: showPerPageReducer,
    results: resultsReducer,
    currentPage: currentPageReducer
  };

  return createStore(combineReducers({...reducer}), compose(applyMiddleware(thunk)));
}

const mockDefaultState = {
  sorting: {
    field: '',
    direction: ''
  },
  showPerPage: SHOW_PER_PAGE_OPTIONS[0],
  currentPage: 1,
  filters: {
    artist: '',
    name: ''
  },
  results: {
    content: [],
    total: 0
  },
};

describe('should give classes to sorting buttons correctly', () => {
  let store;
  let wrapper;

  it('first call should add sort', () => {
    const options = {
      sorting: {
        field: 'artist',
        direction: 'asc'}
    };
    store = setMockState({...mockDefaultState, ...options});
    wrapper = shallow(<TracksTable store={store}/>).dive();
    expect(wrapper.instance().tableHeaderClassNames('artist', true)).toBe('glyphicon fr pointable glyphicon-sort-by-alphabet');
  });

  it('second call should reverse sorting', () => {
    const options = {
      sorting: {
        field: 'artist',
        direction: 'desc'}
    };
    store = setMockState({...mockDefaultState, ...options});
    wrapper = shallow(<TracksTable store={store}/>).dive();
    expect(wrapper.instance().tableHeaderClassNames('artist', true)).toBe('glyphicon fr pointable glyphicon-sort-by-alphabet-alt');
  });

  it('field name change call should add neutral css class', () => {
    const options = {
      sorting: {
        field: 'artist',
        direction: 'desc'}
    };
    store = setMockState({...mockDefaultState, ...options});
    wrapper = shallow(<TracksTable store={store}/>).dive();
    expect(wrapper.instance().tableHeaderClassNames('name', true)).toBe('glyphicon fr pointable glyphicon-sort');
  });

});

