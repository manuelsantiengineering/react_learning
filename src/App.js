import React from 'react';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import Game from "./components/Game";
import BasicHooks from "./components/BasicHooks";

class App extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Game/>
                    </div>
                    <br/>
                    <div className="col-md-8">
                        <BasicHooks/>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;