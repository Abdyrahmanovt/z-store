import React from "react";
import './Loader.css'

function Loader() {

    return (
        <div className='loading'>
            <div id="ball">
                <div id="ball1" className="balls"></div>
                <div id="ball2" className="balls"></div>
                <div id="ball3" className="balls"></div>
            </div>

            <div id="credits">
                <a href="https://www.buymeacoffee.com/dormin" target="_blank">

                </a>
            </div>
        </div>
    );
}

export default Loader;