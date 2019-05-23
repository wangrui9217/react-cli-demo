import React, { Component } from 'react';
export default class LoginIndex extends Component{

    componentDidMount () {
        console.log(this.props)
    }

    render () {
        return (
            <div>
                <p>1111111112222111</p>
                <p>{this.props.match.params.id}</p>
                <p>{this.props.match.params.name}</p>
            </div>
        )
    }

}
