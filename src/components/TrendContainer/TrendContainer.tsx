import { useState, useEffect } from 'react';
import axios from 'axios';
import DevelopersContainer from '../DevelopersContainer';
import RepositoriesContainer from '../RepositoriesContainer';
import './TrendContainer.scss'

function TrendContainer() {
  //state to store that it's Developer trend or Repository Trend
  const [state, setState] = useState("developers")
  useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://localhost:3600/developer',
      params: {
        "section": "",
        "spoken_language_code": "",
        "since": "",
        "language": ""
      },
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    };

    axios(config as Object)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });


  }, [state])
  return <div className='trends-container'>
    <div className='trends-container__header'>

    </div>
  </div>;

}

export default TrendContainer;
