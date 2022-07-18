import React from "react";

class Form extends React.Component{
    render() {
        return (
            <htmlForm onSubmit={this.props.submit}>
                <div className="row">
                    
                    {/* Firstname part */}
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom01">First name</label>
                        <input type="text" className="form-control" id="validationCustom01" placeholder="First name..." required onChange={this.props.firstName}/>
                    </div>

                    {/* Lastname part */}
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="validationCustom02">Last name</label>
                        <input type="text" className="form-control" id="validationCustom02" placeholder="Last name..." required onChange={this.props.lastName}/>

                </div>


                {/* Mail part */}
                <div className="col-md-6 mb-3">
                    <label  for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" placeholder='Enter email...' onChange={this.props.mailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="col-md-6 mb-3">
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
