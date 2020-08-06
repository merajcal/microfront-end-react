/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactDOM from 'react-dom';

import Programming from '.';

const ProgrammingStandalone = () => {
  const props = {};

  return <Programming isStandalone {...props} />;
};

ReactDOM.render(
  <ProgrammingStandalone />,
  document.getElementById('app')
);
