import * as React from 'react';
import {buildGrid} from "../utils/helpers";

const TimeRange = (props) => {
  const timeRanges = [
    [
      '12:00 - 12:30 AM',
      '12:30 - 01:00 PM',
      '01:00 - 01:30 PM',
      '01:30 - 02:00 PM'
    ],
    [
      '07:00 - 07:30 PM',
      '07:30 - 08:00 PM',
      '08:00 - 08:30 PM',
      '08:30 - 09:00 PM',
      '09:00 - 09:30 PM'
    ]
  ];

  let grid = buildGrid(timeRanges, props.selected, props.handleSelect);

  return (
    <div className="tab table-picker">
      <table className="table-condensed">
        <tbody>
        {grid}
        </tbody>
      </table>
    </div>
  );
};

export default TimeRange;
