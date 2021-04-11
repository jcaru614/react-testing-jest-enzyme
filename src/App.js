import React, { Component } from 'react';
import './App.css';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { connect } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import * as actions from 'actions'

class App extends Component {

  renderButton = () => {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
      );
    } else {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      );
    };
  };

  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    )
  }
  
  render() {
    return (
        <BrowserRouter>
        <div className="App">
            {this.renderHeader()}
            <Route path="/post" component={CommentBox} />
            <Route path="/" exact component={CommentList} />
            </div>
        </BrowserRouter>
    );
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, actions)(App);
