import * as React from 'react';
import {connect} from 'react-redux';
import {getPagination} from '../selectors';
import {Pagination} from 'react-bootstrap';
import {setCurrentPage} from '../actions';

class Paginator extends React.Component<any, any> {

    public state = {
        buttons: []
    };

    public componentWillReceiveProps(nextProps) {
        this.constructButtons(nextProps);
    }

    public constructButtons(props): void {
        const current = props.pagination.currentPage;
        const total = props.pagination.totalPages;
        const pagesArray = Array(total).fill('').map((x, i) => i + 1);
        if (total <= 5) {
            this.setState({buttons: pagesArray});
        } else if (current <= 3 && total > 5) {
            this.setState({buttons: pagesArray.slice(0, 5)});
        } else if (current > 3 && total - current > 2) {
            this.setState({buttons: pagesArray.slice(current - 3, current + 2)});
        } else {
            this.setState({buttons: pagesArray.slice(total - 5)});
        }

    }

    public render() {
        return (
            this.props.pagination.totalPages > 1 ?
            <div>
                <Pagination>
                    <Pagination.First disabled={this.props.pagination.currentPage === 1}
                                      onClick={() => {
                                         if (this.props.pagination.currentPage !== 1) {
                                             this.props.setCurrentPage(1)
                                         }
                                      }}/>
                    <Pagination.Prev disabled={this.props.pagination.currentPage === 1}
                                     onClick={() => {
                                         if (this.props.pagination.currentPage !== 1) {
                                             this.props.setCurrentPage(this.props.pagination.currentPage - 1)
                                         }
                                     }}/>
                    {this.state.buttons.map((item, i) =>
                        <Pagination.Item key={i}
                                         onClick={() => {this.props.setCurrentPage(item)}}
                                         active={item === this.props.pagination.currentPage}>{item}</Pagination.Item>
                    )}
                    <Pagination.Next disabled={this.props.pagination.currentPage === this.props.pagination.totalPages}
                                     onClick={() => {
                                         if (this.props.pagination.currentPage !== this.props.pagination.totalPages) {
                                            this.props.setCurrentPage(this.props.pagination.currentPage + 1)
                                         }
                                     }}/>
                    <Pagination.Last disabled={this.props.pagination.currentPage === this.props.pagination.totalPages}
                                     onClick={() => {
                                         if (this.props.pagination.currentPage !== this.props.pagination.totalPages) {
                                            this.props.setCurrentPage(this.props.pagination.totalPages)
                                         }
                                     }}/>
                </Pagination>
            </div>
                : null
        );
    }
}

export default connect(
    state => ({
        pagination: getPagination(state),
    }),
    {
        setCurrentPage
    }
)(Paginator);


