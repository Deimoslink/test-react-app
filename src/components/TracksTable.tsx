import * as React from 'react';
import './TracksTable.css';
import {connect} from 'react-redux';
// import store from "../store";
import {Pagination, Table} from 'react-bootstrap';
// import {getTracksWithPagination} from "../api.service";
import {getResults} from "../selectors";
import {setNewResults} from "../actions";

class TracksTable extends React.Component<any, any> {

    public tracks: any[] = [{name: 1, artist: 1}];

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="TracksTable">
                <div className="row">
                    <div className="col-md-8">
                        <Table striped={true} bordered={true} condensed={true}>
                            <thead>
                            <tr>
                                <th>Artist</th>
                                <th>Track</th>
                                <th>Genre</th>
                                <th>Year</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.tracks.map((track, i) =>
                                <tr key={i}>
                                    <td>{track.artist}</td>
                                    <td>{track.name}</td>
                                    <td>{track.name}</td>
                                    <td>{track.name}</td>
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="artistInput">Artist</label>
                            <input type="text" className="form-control" id="artistInput"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="genreInput">Genre</label>
                            <input type="text" className="form-control" id="genreInput"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="yearInput">Year</label>
                            <input type="text" className="form-control" id="yearInput"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 pagination-wrapper">
                        <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Ellipsis />
                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item active={false}>{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item>{14}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                    </div>
                    <div className="col-md-4 pagination-wrapper">
                        <Pagination>
                            <Pagination.Item active={true}>{10}</Pagination.Item>
                            <Pagination.Item>{25}</Pagination.Item>
                            <Pagination.Item>{50}</Pagination.Item>
                            <Pagination.Item>{100}</Pagination.Item>
                        </Pagination>
                        <p>{this.props.results}</p>
                        <button className="btn btn-default" onClick={() => {setNewResults('new results set!')}}>GET!</button>
                    </div>
                </div>

            </div>
        );
    }
}




export default connect(
    state => ({
        results: getResults(state)
    }),
    {
        setNewResults
    }
)(TracksTable);

