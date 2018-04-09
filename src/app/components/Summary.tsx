import * as React from 'react';

const Summary = (props) => {
  return (
    <div id="summary" className={props.summary.class}>
      {props.summary.message}
    </div>
  );
};

export default Summary;
