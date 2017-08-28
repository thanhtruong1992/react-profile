import React from 'react';
import {TextField, RaisedButton, DatePicker} from 'material-ui';
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

class Register extends React.Component {
  constructor(props) {
    super(props);
    const maxDate = new Date();
    this.state = {
      name: '',
      email: '',
      address: '',
      password: '',
      dateOfBirth: '',
      maxDate: maxDate,
      confirmPassword: '',
    };
  }

  changeValue = (event, newValue) => {
    this.setState({
      [event.target.name]: newValue
    });
  }

  changeDate = (event = null, newValue) => {
    this.setState({
      dateOfBirth: newValue
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return(
      <div className="container-custom">
        <div className="form-login">
          <h4>Register</h4>
          <form onSubmit={this.onSubmit.bind()}>
            <TextField
              name="name"
              fullWidth={true}
              floatingLabelText="Name"
              defaultValue={this.state.name}
              onChange={this.changeValue.bind()}
              underlineFocusStyle={styles.underlineFocusStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
            <TextField
              name="email"
              fullWidth={true}
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
              floatingLabelText="Password"
              defaultValue={this.state.password}
              onChange={this.changeValue.bind()}
              underlineFocusStyle={styles.underlineFocusStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
            <TextField
              type="password"
              fullWidth={true}
              name="confirmPassword"
              onChange={this.changeValue.bind()}
              floatingLabelText="Confirm Password"
              defaultValue={this.state.confirmPassword}
              underlineFocusStyle={styles.underlineFocusStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
            <DatePicker
              fullWidth={true}
              name="dateOfBirth"
              maxDate={this.state.maxDate}
              onChange={this.changeDate.bind()}
              floatingLabelText="Date of birth"
              underlineFocusStyle={styles.underlineFocusStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
            <TextField
              rows={1}
              name="address"
              fullWidth={true}
              multiLine={true}
              floatingLabelText="Address"
              defaultValue={this.state.address}
              onChange={this.changeValue.bind()}
              underlineFocusStyle={styles.underlineFocusStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
            <div className="text-center">
              <RaisedButton
                label="Register"
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

export default Register;
