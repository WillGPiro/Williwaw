import React, { useState, useEffect } from 'react';
import WashingtonSRList from '../components/Washington Report/WashingtonSRList';
import { fetchSurfReport } from '../services/msw';


const SurfReport = () => {

  const [surfReport, setSurfReport] = useState([]);

  useEffect(() => {
    fetchSurfReport()
      .then(fetchedSurfReport => setSurfReport(fetchedSurfReport));
  }, []);
  return (
    <WashingtonSRList washingtonSRList={surfReport} />
  );
};


export default SurfReport;

