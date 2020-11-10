import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {

        componentDidMount() {
            console.log("componentDidMount")
            this.shouldNavigateAway();
        }
        // our component just got updated when its props change
        componentDidUpdate() {
            this.shouldNavigateAway();
            console.log("componentDidUpdate")
            this.props.history.push('/')
        }

        shouldNavigateAway() {
            if (!this.props.auth) {
                console.log("I need to leave")
            }
        }

        render() {
            return <ChildComponent {...this.props} />
        }
    }
    function mapStateToProps(state) {
        return {
            auth: state.auth
        }
    }

    return connect(mapStateToProps)(ComposedComponent);
};


