import React from 'react';
import {Dialog, FlatButton, RaisedButton} from 'material-ui/Dialog';

class DialogNotify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: props.title,
      content: props.content,
    };
  }

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];
    const {title, content, open} = this.state;
    return (
      <div>
        <Dialog
          open={open}
          modal={true}
          title={title}
          actions={actions}
        >
          {content}
        </Dialog>
      </div>
    );
  }
}

export default DialogNotify;
