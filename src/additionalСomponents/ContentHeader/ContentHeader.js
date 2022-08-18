import React from 'react';

import './ContentHeader.scss';

const ContentHeader = ({ headerTitle, buttonTitle, onClickButton }) => {
  return (
    <div className="content__header">
      <h2>{headerTitle}</h2>
      <button onClick={onClickButton}>{buttonTitle}</button>
    </div>
  );
};

export default ContentHeader;
