import React from 'react';
import {connect} from 'react-redux';
import AuthService from 'AuthService';
import {DialogNotify} from '../Dialog/notify.js';
import {TextField, RaisedButton, FlatButton} from 'material-ui';
import {orange500, blue500} from 'material-ui/styles/colors';

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
        openDialog: false,
        password: '',
        error: {
          email: '',
          password: '',
        },
        dialog: {
          title: '',
          content: '',
        },
    };
  }

  changeValue = (event, newValue) => {
    this.setState({
      [event.target.name]: newValue
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {dispatch} = this.props;
    const path = 'admin/login';
    const params = {
      email: this.state.email,
      password: this.state.password,
    };
    AuthService.login(path, params)
      .then((res) => {
        const auth = res;
        localStorage.setItem('authToken', auth.token);
        dispatch({
          type: 'ADD_ITEM',
          item: auth.user
        });
      })
      .catch((err) => {
        const {error, code} = err;

        if(code == 400) {
          this.setState({
            error: {
              email: error.email ? error.email[0] : '',
              password: error.password ? error.password[0] : ''
            }
          });
        }else if(code == 404) {
          this.setState({
            openDialog: true,
            dialog: {
              title: 'Error Login',
              content: error.message[0]
            }
          });
        }
      });
  }

  render() {
    const {error, openDialog, dialog} = this.state;
    return (
      <div className="container-custom">
        <div className="form-login">
          <h4>Login</h4>
          <form onSubmit={this.onSubmit.bind()}>
            <TextField
              name="email"
              fullWidth={true}
              errorText={error.email}
              floatingLabelText="Email"
              defaultValue={this.state.email}
              onChange={this.changeValue.bind()}
              underlineFocusStyle={styles.underlineFocusStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
            <TextField
              type="password"
              name="password"
              fullWidth={true}
              errorText={error.password}
              floatingLabelText="Password"
              defaultValue={this.state.password}
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

export default connect(function(state){
  return {auth: state.auth}
})(Login);
