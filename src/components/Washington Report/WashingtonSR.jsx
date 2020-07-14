import React from 'react';
import PropTypes from 'prop-types';
import styles from './WashingtonSR.css';


const WashingtonSR = ({ timestamp, localTimestamp, issueTimestamp, fadedRating, solidRating, swell, wind, condition, charts }) => (
  <section className={styles.WashingtonSR}>
    <h1>{timestamp}</h1> 
    <h2>{localTimestamp}</h2>
    <h3>{issueTimestamp}</h3>
    <h3>{fadedRating}</h3>
    <h3>{solidRating}</h3>
    <h3>{swell.absMinBreakingHeight}</h3>
    <h3>{swell.absMaxBreakingHeight}</h3>
    {/* <h3>{wind}</h3>
    <h3>{condition}</h3> 
    <h3>{charts}</h3> */}
  </section>
);

WashingtonSR.propTypes = {
  timestamp: PropTypes.number.isRequired,
  localTimestamp: PropTypes.number.isRequired,
  issueTimestamp:PropTypes.number.isRequired,
  fadedRating:PropTypes.number.isRequired,
  solidRating:PropTypes.number.isRequired,
  // swell:PropTypes.string.isRequired,
  // wind:PropTypes.string.isRequired,
  // condition:PropTypes.string.isRequired,
  // charts:PropTypes.string.isRequired,
};
export default WashingtonSR;
