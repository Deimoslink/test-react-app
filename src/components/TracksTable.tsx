import * as React from 'react';
import './TracksTable.css';
import {connect} from 'react-redux';
import {Pagination, Table} from 'react-bootstrap';
import {getResults, getShowPerPage} from "../selectors";
import {setNewResults, setNewShowPerPage} from "../actions";
import {SHOW_PER_PAGE_OPTIONS} from "../constants";

class TracksTable extends React.Component<any, any> {

    public render() {
        return (
            <div className="TracksTable">
                <button className="btn btn-default" onClick={() => {this.props.setNewResults()}}>GET!</button>
                <div className="row">
                    <div className="col-md-8">
                        <Table striped={true} bordered={true} condensed={true}>
                            <thead>
                            <tr>
                                <th>Artist<i className="glyphicon glyphicon-sort-by-alphabet fr pointable"/></th>
                                <th>Track<i className="glyphicon glyphicon-sort fr  pointable"/></th>
                                <th>Genre<i className="glyphicon glyphicon-sort-by-alphabet-alt fr pointable"/></th>
                                <th>Year</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.results.map((track, i) =>
                                <tr key={i}>
                                    <td>{track.artist}</td>
                                    <td>{track.name}</td>
                                    <td>{track.duration}</td>
                                    <td>{track.playcount}</td>
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
                        <p>this props {this.props.showPerPage}</p>
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
                </div>

            </div>
        );
    }
}

export default connect(
    state => ({
        results: getResults(state),
        showPerPage: getShowPerPage(state)
    }),
    {
        setNewResults,
        setNewShowPerPage
    }
)(TracksTable);

