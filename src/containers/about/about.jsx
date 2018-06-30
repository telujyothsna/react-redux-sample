import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as AboutActions from './about.actions';

class About extends Component {
    state={
        title: 'About pane'
    }

    render = () => {
        return (
            <React.Fragment>
            <h1>{this.props.title}</h1>
            <button onClick={this.props.clickButton}>Click Me</button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.about,
        name: state.home.name
    //   title: state.about.title,
    //   link: state.about.links.first,
    }
  }
  
const mapDispatchToProps = dispatch => bindActionCreators(AboutActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(About);