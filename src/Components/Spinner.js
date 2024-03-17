import React, { Component } from 'react'
// import loading from './loading.gif';

export default class Spinner extends Component {
    render() {
        return (
            <div>
                {/* <img src={loading} alt="Loading" /> */}
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            </div>
        )
    }
}
