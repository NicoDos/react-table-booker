import * as React from 'react';
import * as moment from 'moment';
import * as DateTime from 'react-datetime/DateTime';
import {FlatButton} from 'material-ui';

import Constants from "../utils/Constants";

const DATE_FORMAT = Constants.dateFormat;
const LOCALE = Constants.locale;
const MOMENT_LOCALE = Constants.momentLocale;

require(`moment/locale/${MOMENT_LOCALE}`);

class DatePicker extends React.Component<any> {

  state = {
    scheduleAt: null
  };

  constructor(props) {
    super(props);
    this.state = {
      scheduleAt: moment(new Date())
    };
    this.handleDate = this.handleDate.bind(this);
  }

  handleDate(newDate) {
    const {scheduleAt} = this.state;
    scheduleAt.set({
      year: newDate.get('year'),
      month: newDate.get('month'),
      date: newDate.get('date')
    });

    this.setState({
      scheduleAt
    }, () => this.props.selectDate(scheduleAt));
  };

  render() {
    const {scheduleAt} = this.state;
    const yesterday = moment().subtract(1, 'day');
    const validDate = (current) =>
      current.isAfter(yesterday)
      && current.day() !== 0 && current.day() !== 6;

    return (
      <div className="tab">
        <DateTime
          open
          input={false}
          locale={LOCALE}
          dateFormat={DATE_FORMAT}
          timeFormat={false}
          isValidDate={validDate}
          onChange={this.handleDate}
          value={scheduleAt}
        />
      </div>
    )
  };
}

export default DatePicker;
