import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import { Switch, Route, Link } from 'react-router-dom';
import * as d3 from 'd3';
import GroundAnalysis from './GroundAnalysis';
import PlayerAnalysis from './PlayerAnalysis';
import Cluster from './Cluster';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <Link className="navbar-brand" to="/">VAT</Link>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/groundanalysis">Ground Analysis</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/playeranalysis">Player Analysis</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cluster">Cluster</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container-fluid">
          <Switch>
            <Route exact path='/' component={PlayerAnalysis}/>
            <Route path='/groundanalysis' component={GroundAnalysis}/>
            <Route path='/playeranalysis' component={PlayerAnalysis}/>
            <Route path='/cluster' component={Cluster}/>
          </Switch>
        </div>
      </div>
    );
  }
  
  componentDidMount() {
    // Write your d3js code here
  }
}

export default Dashboard;
