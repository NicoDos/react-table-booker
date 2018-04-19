import * as React from 'react';
import * as moment from 'moment';
import axios from 'axios';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {CircularProgress, Tabs, Tab, Paper} from 'material-ui';
import {Alarm, DateRange, People, Phone} from 'material-ui-icons';

import Constants from "../utils/Constants";

import DatePicker from "./DatePicker";
import Details from "./Details";
import Guests from "./Guests";
import Summary from "./Summary";
import TimeRange from "./TimeRange";

const API_ENTRY_POINT = Constants.APIEntryPoint;
const DATE_FORMAT = Constants.dateFormat;
const INITIAL_STATE = Constants.initialState;
const MOMENT_LOCALE = Constants.momentLocale;

require(`moment/locale/${MOMENT_LOCALE}`);

class App extends React.Component {

  state = INITIAL_STATE;

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.numberOfGuests) {
      return this.setState({activeTab: 0});
    }

    if (!this.state.date) {
      return this.setState({activeTab: 1});
    }

    if (!this.state.timeRange) {
      return this.setState({activeTab: 2});
    }

    for (let field in this.state.bookingDetails) {
      this.state.bookingDetails[field] = e.target[field].value;
    }

    return this.sendData();
  };

  async sendData() {
    this.setState({isLoading: true});

    try {
      await axios.post(API_ENTRY_POINT, {
        numberOfGuests: this.state.numberOfGuests,
        dateAndTime: this.state.date + ' ' + this.state.timeRange,
        bookingDetails: this.state.bookingDetails
      });

      this.setState(INITIAL_STATE);
      return this.setState({
        isLoading: false,
        summary: {
          message: `We confirm your reservation. In case of unavailability, we will contact you as soon as possible.`,
          class: `success`
        }
      });
    } catch (error) {
      return this.setState({
        isLoading: false,
        summary: {
          message: `An error has occurred. Please try again later.`,
          class: `error`
        }
      });
    }
  }

  render() {
    const formatSummary = () => {
      let summary = ``;

      if(this.state.numberOfGuests) {
        summary += `For ${this.state.numberOfGuests} people`
      }
      if(this.state.date) {
        summary += ` on ${this.state.date}`
      }
      if(this.state.timeRange) {
        summary += ` at ${this.state.timeRange}`
      }

      this.setState({
        summary: {
          message: summary
        }
      });
    };

    const selectGuests = (numberOfGuests) => {
      this.setState({
        activeTab: 1,
        numberOfGuests: numberOfGuests
      }, () => formatSummary());
    };

    const selectDate = (date) => {
      this.setState({
        activeTab: 2,
        date: moment(date).format(DATE_FORMAT)
      }, () => formatSummary());
    };

    const selectTimeRange = (timeRange) => {
      this.setState({
        activeTab: 3,
        timeRange: timeRange
      }, () => formatSummary());
    };

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Summary summary={this.state.summary}/>
          <Paper>
            <div className="frame-container">
              {this.state.isLoading ?
                <div className="loading">
                  <CircularProgress/>
                  <div className="loading-message">Hold on please...</div>
                </div>
                : ''
              }
              <Tabs
                value={this.state.activeTab}
                onChange={(value) => this.setState({activeTab: value})}>
                <Tab value={0} icon={<People/>} label="Guests">
                  <Guests
                    selected={this.state.numberOfGuests}
                    handleSelect={selectGuests}/>
                </Tab>
                <Tab value={1} icon={<DateRange/>} label="Date">
                  <DatePicker
                    scheduleAt={null}
                    selectDate={selectDate}/>
                </Tab>
                <Tab value={2} icon={<Alarm/>} label="Hour">
                  <TimeRange
                    selected={this.state.timeRange}
                    handleSelect={selectTimeRange}/>
                </Tab>
                <Tab value={3} icon={<Phone/>} label="Details">
                  <Details
                    {...this.state.bookingDetails}
                    handleSubmit={this.handleSubmit}
                  />
                </Tab>
              </Tabs>
            </div>
          </Paper>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
