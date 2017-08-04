import React from 'react';
import AuthService from 'AuthService';
import {TextField, RaisedButton} from 'material-ui';
import {orange500, blue500} from 'material-ui/styles/colors';

require('./index.scss');

const styles = {
  errorStyle: {
    color: orange500,
  },
  buttonStyle: {
    margin: 12,
    textAlign: 'center',
  },
  underlineFocusStyle: {
    borderColor: 'green',
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: 'green',
  },
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
    };
  }

  changeValue = (event, newValue) => {
    this.setState({
      [event.target.name]: newValue
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const path = 'http://abakus-backend.demo.beesightsoft.com/public/api/admin/login';
    const params = {
      email: this.state.email,
      password: this.state.password,
    };
    AuthService.login(path, params)
      .then((res) => {
        debugger
      })
      .catch((err) => {
        debugger
      });

  }

  render() {
    return (
      <div className="container-custom">
        <div className="form-login">
          <h4>Login</h4>
          <form onSubmit={this.onSubmit.bind()}>
            <TextField
              name="email"
              fullWidth={true}
              defaultValue={this.state.email}
              floatingLabelText="Email"
              onChange={this.changeValue.bind()}
              underlineFocusStyle={styles.underlineFocusStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
            <TextField
              type="password"
              name="password"
              fullWidth={true}
              defaultValue={this.state.password}
              floatingLabelText="Password"
              onChange={this.changeValue.bind()}
              underlineFocusStyle={styles.underlineFocusStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
            <div className="text-center">
              <RaisedButton
                type="submit"
                label="Login"
                labelColor="#fff"
                backgroundColor="green"
                style={styles.buttonStyle}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
