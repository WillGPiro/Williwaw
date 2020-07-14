import React from 'react';
import PropTypes from 'prop-types';
import WashingtonSR from './WashingtonSR';
import styles from './WAshingtonSRList.css';

const WashingtonSRList = ({ washingtonSRList }) => {
  const washingtonSRElements = washingtonSRList.map(washingtonSR => (
    <li key={washingtonSR.timestamp}>
      <WashingtonSR {...washingtonSR} />
    </li>
  ));

  return (
    <ul className={styles.WashingtonSRList}>
      {washingtonSRElements}
    </ul>
  );
};

WashingtonSRList.propTypes = {
  washingtonSRList: PropTypes.arrayOf(PropTypes.shape({
    timestamp: PropTypes.number.isRequired,
    // localTimestamp: PropTypes.string.isRequired,
    // issueTimestamp:PropTypes.string.isRequired,
    // fadedRating:PropTypes.string.isRequired,
    // solidRating:PropTypes.string.isRequired,
    // swell:PropTypes.string.isRequired,
    // wind:PropTypes.string.isRequired,
    // condition:PropTypes.string.isRequired,
    // charts:PropTypes.string.isRequired,
  })).isRequired
};

export default WashingtonSRList;
