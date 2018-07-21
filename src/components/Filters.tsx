import * as React from 'react';
import {connect} from 'react-redux';
import {getFilters} from '../selectors';
import {setFilters} from '../actions';
import {DebounceInput} from 'react-debounce-input';

class Filters extends React.Component<any, any> {
    public render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="artistInput">Artist</label>
                    <DebounceInput type="text"
                                   debounceTimeout={500}
                                   onChange={(e) => {
                                       this.props.setFilters({
                                           artist: e.target.value,
                                           name: this.props.filters.name
                                       });
                                   }}
                                   className="form-control"
                                   id="artistInput"/>
                </div>
                <div className="form-group">
                    <label htmlFor="genreInput">Track</label>
                    <DebounceInput type="text"
                                   debounceTimeout={500}
                                   onChange={(e) => {
                                       this.props.setFilters({
                                           artist: this.props.filters.artist,
                                           name: e.target.value
                                       });
                                   }}
                                   className="form-control"
                                   id="genreInput"/>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        filters: getFilters(state),
    }),
    {
        setFilters
    }
)(Filters);


