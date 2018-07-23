import {IAppState} from './components/interfaces';

export const SHOW_PER_PAGE_OPTIONS = [
    10, 25, 50, 100
];

export const DEFAULT_STATE: IAppState = {
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
