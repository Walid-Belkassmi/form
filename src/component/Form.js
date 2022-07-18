import React from "react";

class Form extends React.Component{
    render() {
        return (
            <htmlForm onSubmit={this.props.submit}>
                <div className="mb-3">
                    <label  for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" placeholder='Enter email...' onChange={this.props.mailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input placeholder='Enter password...' type="password" onChange={this.props.passwordChange} className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input onChange={this.props.checkChange} type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <button  type="submit" className="btn btn-primary">Submit</button>
            </htmlForm>
        )
    }
}

export default Form
