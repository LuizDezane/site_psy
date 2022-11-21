import React from 'react'

const test = () => {
    return (
        <div className="grid_container">

            <div className="grid_12">
                <div className="grid">12 columns <br />Column 1</div>
            </div>

            <div className="grid_10">
                <div className="grid">10 columns <br />Column 1</div>
            </div>

            <div className="grid_8">
                <div className="grid">8 columns <br />Column 1</div>
            </div>

            <div className="grid_8_centered">
                <div className="grid">8 columns <br />Column 1</div>
            </div>

            <div className="grid_4">
                <div className="grid">4 columns <br />Column 1</div>
                <div className="grid">4 columns <br />Column 2</div>
            </div>

            <div className="grid_3">
                <div className="grid">3 Columns <br />Column 1</div>                
                <div className="grid">3 Columns <br />Column 2</div>
                <div className="grid">3 Columns <br />Column 3</div>
            </div>
        </div>
    )
}

export default test