import * as React from 'react';
import './TracksTable.css';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import {getResults, getSorting} from "../selectors";
import {setNewResults, setSorting} from "../actions";
import Filters from "./Filters";
import Paginator from "./Paginator";
import ShowPerPage from './ShowPerPage';

class TracksTable extends React.Component<any, any> {

    public toggleSortingRules(field) {
        let direction = 'asc';
        if (this.props.sorting.field === field) {
            if (this.props.sorting.direction === 'asc') {
                direction = 'desc';
            }
            if (this.props.sorting.direction === 'desc') {
                direction = '';
                field = '';
            }
        }
        this.props.setSorting({
            field,
            direction
        });
    }

    public tableHeaderClassNames(field) {
        const classNames = ['glyphicon', 'fr', 'pointable'];
        let currentDirectionIcon = 'glyphicon-sort';
        if (this.props.sorting.field === field) {
            if (this.props.sorting.direction === 'asc') {
                currentDirectionIcon = 'glyphicon-sort-by-alphabet';
            }
            if (this.props.sorting.direction === 'desc') {
                currentDirectionIcon = 'glyphicon-sort-by-alphabet-alt';
            }
        }
        classNames.push(currentDirectionIcon);
        return classNames.join(' ');
    }

    public componentWillMount() {
        this.props.setNewResults();
    }

    public render() {
        return (
            <div className="TracksTable">
                <div className="row">
                    <div className="col-md-8">
                        <Table striped={true} bordered={true} condensed={true}>
                            <thead>
                            <tr>
                                <th>Artist
                                    <i onClick={() => {this.toggleSortingRules('artist')}}
                                       className={this.tableHeaderClassNames('artist')}/>
                                </th>
                                <th>Track
                                    <i onClick={() => {this.toggleSortingRules('track')}}
                                       className={this.tableHeaderClassNames('track')}/>
                                </th>
                                <th>Duration</th>
                                <th>Times Listened</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.results.content.map((track, i) =>
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
                        <Filters/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 pagination-wrapper">
                        <Paginator/>
                    </div>
                    <div className="col-md-4 pagination-wrapper">
                        <ShowPerPage/>
                    </div>
                </div>

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
)(TracksTable);

