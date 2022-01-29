import { useState, useEffect } from 'react';
import axios from 'axios';
import Repository from '../Repository';
import Developer from '../Developer';
function TrendContainer() {
  //state to store that it's Developer trend or Repository Trend
  const [state, setState] = useState("developers")
  // useEffect(() => {

  //   axios({
  //     method: 'get',
  //     url: `https://gh-trending-api.herokuapp.com/${state}`,
  //     headers: {
  //       accept: "application/json"
  //     },
  //     responseType: 'stream'
  //   })
  //     .then((response) => {
  //       console.log(response)
  //     }).catch((error) => {
  //       console.log(error);
  //     });
  // }, [state])
  return <div></div>;

}

export default TrendContainer;
