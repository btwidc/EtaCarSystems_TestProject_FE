import React from 'react';

import './CustomHeader.scss';

const CustomHeader = ({ headerTitle, buttonTitle, onClickButton }) => {
  return (
    <div className="header-container">
      <h2>{headerTitle}</h2>
      <button onClick={onClickButton}>{buttonTitle}</button>
    </div>
  );
};

export default CustomHeader;
