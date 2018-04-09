import * as React from 'react';
import {FlatButton, TextField} from 'material-ui';
import Constants from "../utils/Constants";

const INITIAL_STATE = Constants.initialState.bookingDetails;

class Details extends React.Component<any> {

  state = INITIAL_STATE;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tab booking-details">
        <form onSubmit={this.props.handleSubmit}>
          <TextField
            floatingLabelText="Name *"
            ref={this.state.name}
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            id="name"
            required="required"
            fullWidth
            margin="normal"/>
          <TextField
            floatingLabelText="Phone number *"
            ref={this.state.phone}
            value={this.state.phone}
            onChange={e => this.setState({ phone: e.target.value })}
            id="phone"
            required="required"
            fullWidth
            margin="normal"/>
          <TextField
            floatingLabelText="Email *"
            type="email"
            ref={this.state.email}
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            id="email"
            required="required"
            fullWidth
            margin="normal"/>
          <TextField
            floatingLabelText="Message"
            ref={this.state.message}
            value={this.state.message}
            onChange={e => this.setState({ message: e.target.value })}
            id="message"
            multiLine={true}
            rows={2}
            fullWidth
            margin="normal"/>
          <div className="footer">
            <FlatButton
              type="submit"
              id="validate"
              primary={true}
              fullWidth={true}>
              Confirm Booking
            </FlatButton>
          </div>
        </form>
      </div>
    );
  };
}

export default Details;
