import React from 'react';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Game from "./components/Game/Game";
import BasicHooks from "./components/BasicHooks";
import PresentationCard from "./components/Other/PresentationCard"

class App extends React.Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <PresentationCard/>
                        <br/>
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