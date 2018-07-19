import * as React from 'react';
import store from "../store";
import Filters from "./Filters";

class Table extends React.Component {
    public render() {
        return (
            <div>
                Table works!
                <Filters/>
            </div>
        );
    }
}

export default Table;

store.subscribe(() => {
    console.log('updated my journal', store.getState());
});
