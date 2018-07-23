import * as React from 'react';
import './TracksTable.css';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import {getResults, getSorting} from '../selectors';
import {setNewResults, setSorting} from '../actions';
import Filters from './Filters';
import Paginator from './Paginator';
import ShowPerPage from './ShowPerPage';

export const durationPipe = (secs: number): string => {
    return `${Math.floor(secs / 60)}:${secs % 60 < 10 ? + '0' : ''}${secs % 60}`
};

class TracksTable extends React.Component<any, any> {

    public toggleSortingRules(field): void {
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

    public tableHeaderClassNames(field: string, isAlphabetic?: boolean): string {
        const classNames = ['glyphicon', 'fr', 'pointable'];
        let currentDirectionIcon = 'glyphicon-sort';
        if (this.props.sorting.field === field) {
            if (this.props.sorting.direction === 'asc') {
                currentDirectionIcon = isAlphabetic ? 'glyphicon-sort-by-alphabet' : 'glyphicon-sort-by-order';
            }
            if (this.props.sorting.direction === 'desc') {
                currentDirectionIcon = isAlphabetic ? 'glyphicon-sort-by-alphabet-alt' : 'glyphicon-sort-by-order-alt';
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
                                       className={this.tableHeaderClassNames('artist', true)}/>
                                </th>
                                <th>Track
                                    <i onClick={() => {this.toggleSortingRules('name')}}
                                       className={this.tableHeaderClassNames('name', true)}/>
                                </th>
                                <th>Duration
                                    <i onClick={() => {this.toggleSortingRules('duration')}}
                                       className={this.tableHeaderClassNames('duration')}/>
                                </th>
                                <th>Times Listened
                                    <i onClick={() => {this.toggleSortingRules('playcount')}}
                                       className={this.tableHeaderClassNames('playcount')}/>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.results.content.map((track, i) =>
                                <tr key={i}>
                                    <td>{track.artist}</td>
                                    <td>{track.name}</td>
                                    <td>{durationPipe(track.duration)}</td>
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

