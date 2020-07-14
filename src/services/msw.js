export const fetchSurfReport = () => {
  return fetch(`https://cors-anywhere.herokuapp.com/http://magicseaweed.com/api/${process.env.MSW_KEY}/forecast/?spot_id=308`)
    .then(res => res.json());
};

