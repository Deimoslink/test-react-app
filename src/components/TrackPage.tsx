import * as React from 'react';
import {connect} from 'react-redux';
import {getResults, getSorting} from '../selectors';
import {setNewResults, setSorting} from '../actions';
import {getTrackById} from '../api.service';


class TrackPage extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = { track: {} };
    }

    public componentWillMount() {
        this.props.setNewResults();
    }

    public componentDidMount() {
        const {id} = this.props.match.params;
        getTrackById(id).then(res => {
            this.setState({track: res.data});
        })
    }

    public render() {
        return (
            <div>
                <p><b>Artist:</b> {this.state.track.artist}</p>
                <p><b>Album:</b> {this.state.track.album}</p>
                <p><b>Track:</b> {this.state.track.name}</p>
                <p><b>Description:</b> {this.state.track.description}</p>
            </div>
        );
    }
}

export default connect(
    state => ({
        results: getResults(state),
        sorting: getSorting(state)
    }),
    {
        setNewResults,
        setSorting
    }
)(TrackPage);

