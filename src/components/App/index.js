import './App.css';
import React, {Component} from "react";
import 'whatwg-fetch';
import Main from '../Main';
import {Link} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Link to={`/`} style={{textDecoration: 'none'}}>
                    <header className="App-header">
                        <h1>TV Series List</h1>
                    </header>
                </Link>

                <Main/>
            </div>
        );
    }
}

export default App;
