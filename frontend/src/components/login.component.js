import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <h4>Log in</h4>
                <form>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                    <button type="submit" className="btn btn-dark btn-lg btn-block"
                    onClick={()=>{window.location.href="/signup"}}>
                        Create an Account</button>
                    <h4 className="forgot-password text-right">
                        Forgot <a href="/">password?</a>
                    </h4>
                </form>
            </div>
        );
    }
}