import React, {Component} from 'react';
import * as HomeActions from './home.actions';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

class Home extends Component {
    state={
        title: 'React Redux Example'
    }

    render = () => {
        return (
            <React.Fragment>
            <h1 onClick={this.props.handleTitleClick}>{this.state.title}</h1>
            <h2>{this.props.title} + {this.props.numCount}</h2>
            <button onClick={this.props.clickButton}>Click Me</button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
      ...state.home,
    }
  }
  

const mapDispatchToProps = dispatch => bindActionCreators(HomeActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Home);