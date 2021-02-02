import React from 'react';
import '../../styles/css/register/main.css';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://shrouded-island-10518.herokuapp.com/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
     
        <main className="mainRegister">
          <div className="formRegister">
              <header>
                    <h1>Register</h1>
                    <p> Please , fill in the information below</p>
              </header>
           
              <div className="form-item">
              
                <input
                required="required" placeholder="Name"
                  className="inputForm"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="form-item">
                
                <input
                required="required" placeholder="Email"
                  className="inputForm"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="form-item">
             
                <input
                required="required" placeholder="Password"
                  className="inputForm"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
          
            <div className="">
                <button
                  onClick={this.onSubmitSignIn}
                  type="submit"
                  value="Register"
                  className="logInButton">Make an account</button>
                  
            </div>
            <div className="form-hint">
                <span> Already have an account ?
                    <p onClick={() => onRouteChange('signin')}>Sign in</p></span>
            </div>
          </div>
        </main>
     
    );
  }
}

export default Register;