import React from 'react';
import '../../styles/css/signin/main.css';
 

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://shrouded-island-10518.herokuapp.com/signin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
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
      <>
   
   
        <main className="mainSign">
          <div className="formSign">
            <header>
                <h1>Sign in</h1>
                <p> Please , type your e-mail and password :</p>
            </header>
            <div className="form-item">
               
                <input
                  className="inputForm" placeholder="Email"
                  type="email" required="required"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="form-item">
             
                <input
                 className="inputForm"
                 required="required" placeholder="Password"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
                 <button class="inputButton" type="button" >Forget your password?</button>
              </div>
           
            <div className="">
                <button onClick={this.onSubmitSignIn} 
                type="submit"
                value="Sign in"
                class="logInButton">Sign in</button>
            </div>
            <div className="form-hint">
                <span> Don't have an account?
                    <p onClick={() => onRouteChange('register')}>Make one</p>
                </span>
            </div>
          </div>
        </main>
   
      </>
    );
  }
}

export default Signin;