import React from 'react'
// import loading from './loading.gif';

const Spinner = () => {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        </div>
    )
}
//Export:
export default Spinner;
