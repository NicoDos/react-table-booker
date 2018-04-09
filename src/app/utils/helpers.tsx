import * as React from 'react';

export const buildGrid = (ranges, activeCell, handleSelect) => {
  let grid = [];

  for (let i = 0; i < ranges.length; i++) {
    let rowID = `row${i}`;
    let cell = [];

    for (let idx = 0; idx < ranges[i].length; idx++) {
      let cellID = `cell${i}-${idx}`;
      let cellValue = ranges[i][idx];
      let btnClass = cellValue === activeCell ? 'active' : '';

      cell.push(
        <td key={cellID} className={btnClass}>
          <a id={cellID}
            data-action="selectCell"
            data-value="{cellValue}"
            className={btnClass}
            onClick={() => handleSelect(cellValue)}>{cellValue}
          </a>
        </td>
      )
    }
    grid.push(<tr key={i} id={rowID}>{cell}</tr>);
  }

  return grid;
};
