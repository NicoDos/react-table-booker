import * as React from 'react';
import {buildGrid} from '../utils/helpers';

const Guests = (props) => {

  const guestRanges = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
  ];

  let grid = buildGrid(guestRanges, props.selected, props.handleSelect);

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

export default Guests;
