import * as React from 'react';
import store from "../store";

class Filters extends React.Component {
    public render() {
        return (
            <div>
                Filters works!
                <br/>
                <input type="text" onChange={(e) => {
                    store.dispatch({
                        type: 'SET_FILTER',
                        payload: e.target.value
                    });
                }} />
            </div>
        );
    }
}

export default Filters;
