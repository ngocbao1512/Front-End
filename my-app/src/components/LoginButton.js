import React,{Component} from 'react'

class LoginButton extends React.Component {
    handleClick =  () => {
        console.log("this is. ", this);
        console.log("hellow ");
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Click me
            </button>
        );
    }
}

export default LoginButton;