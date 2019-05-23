import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../../style/HomeIndex.less'

export default class HomeIndex extends Component{

    render () {
        return (
            <div className="container">
                <p>111111111</p>
                <Link to="/login/3333/222" className="common-select-btn">
                    跳转
                </Link>
                <p onClick={() => this.routerPush()}>跳转</p>
            </div>
        )
    }

    routerPush () {
        this.props.history.push({pathname : '/login/3333/222'});
    }

}
