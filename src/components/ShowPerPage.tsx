import * as React from 'react';
import {SHOW_PER_PAGE_OPTIONS} from '../constants';
import {Pagination} from 'react-bootstrap';
import {connect} from 'react-redux';
import {getShowPerPage, getResults} from '../selectors';
import {setNewShowPerPage} from '../actions';

class ShowPerPage extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <p>Found {this.props.results.total} results</p>
                <Pagination>
                    {SHOW_PER_PAGE_OPTIONS.map((option, i) =>
                        <Pagination.Item key={i}
                                         onClick={() => {
                                             if(option !== this.props.showPerPage) {
                                                 this.props.setNewShowPerPage(option)
                                             }
                                         }}
                                         active={option === this.props.showPerPage}>
                            {option}
                        </Pagination.Item>
                    )}
                </Pagination>
            </div>
        );
    }
}

export default connect(
    state => ({
        showPerPage: getShowPerPage(state),
        results: getResults(state)
    }),
    {
        setNewShowPerPage,
    }
)(ShowPerPage);

