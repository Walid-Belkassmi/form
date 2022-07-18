import React from 'react'
import Form from './component/Form'

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }
  }

  
handleEmailChange = (e) => {
  const regex = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/)

  this.setState({email: e.target.value})
  if(regex.test(this.state.email)){
    this.setState({emailIsValid: true})
  }else{
    this.setState({emailIsValid: false})
  }
}

handlePasswordChange = (e) => {
  this.setState({password: e.target.value})
  if((this.state.password).length > 5){
    this.setState({passwordIsValid: true})
  }else{
    this.setState({passwordIsValid: false})
  }
}

handleRememberMeChange = (e) => {
  this.setState({rememberMe : e.target.checked})
}

handleSubmit = (e) => {
  e.preventDefault()

  if(this.state.emailIsValid && this.state.passwordIsValid){
    this.setState({isSubmitted : true})
  }else{
    this.setState({isSubmitted : false})
  }
}


  render(){
    console.log(this.state.emailIsValid)
    return(
      <div className='Container'>

            <Form
              mailChange = {this.handleEmailChange}
              passwordChange = {this.handlePasswordChange}
              checkChange = {this.handleRememberMeChange}
              submit = {this.handleSubmit}
            />
            
      </div>
    )
  }
}

export default App