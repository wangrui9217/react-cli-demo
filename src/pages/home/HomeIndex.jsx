import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {saveFormData} from './../../store/home/action'

import './../../style/HomeIndex.less'

class HomeIndex extends Component{

    static propTypes = {
        formData: PropTypes.object.isRequired,
    }

    componentWillMount () {
        const {formData, saveFormData} = this.props
        console.log(this.props)
    }


    render () {
        return (
            <div className="container">
                <p>111111111</p>
                <Link to="/login/3333/222" className="common-select-btn">
                    跳转
                </Link>
                <p onClick={() => this.routerPush()}>跳转</p>
                <p>{this.props.formData.imgpath}</p>
                <button onClick={() => this.changeState()}>click</button>
            </div>
        )
    }
    changeState () {
        this.props.saveFormData('6666666666666666', 'imgpath')
    }
    routerPush () {
        this.props.history.push({pathname : '/login/3333/222'});
    }

}

const mapStateToProps = (state) => ({
    formData: state.formData
})
const mapDispatchToProps = dispatch => ({
    saveFormData: bindActionCreators(saveFormData, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex)

// export default HomeIndex
