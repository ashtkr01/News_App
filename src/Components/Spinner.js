import React, { Component } from 'react'
import loading from './loading.gif';

export default class Spinner extends Component {
    render() {
        return (
            <div>
                {/* <img src={loading} alt="Loading" /> */}
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="sr-only"></span>
                    </div>
                </div>
            </div>
        )
    }
}
