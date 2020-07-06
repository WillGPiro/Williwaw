import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

  // const oregonSurfReport = () => {
  //   <Link to="/oregon-surf-report">Oregon Surf Report</Link>;
  // };

  // const washingtonSurfReport = () => {
  //   <Link to="/washington-surf-report">Oregon Surf Report</Link>;
  //   console.log(washingtonSurfReport, 'hey');
  // };

  return (
    <>
      <Link to="/oregon-surf-report">Oregon Surf Report</Link>
      <Link to="/washington-surf-report">Oregon Surf Report</Link>;
    </>
  );
};

export default Home;

