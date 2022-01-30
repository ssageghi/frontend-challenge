import { useState, useEffect } from 'react';
import axios from 'axios';
import DevelopersContainer from '../DevelopersContainer';
import RepositoriesContainer from '../RepositoriesContainer';
import './TrendContainer.scss'
import { Radio } from 'antd';

function TrendContainer() {
  //state to store that it's Developer trend or Repository Trend
  const [state, setState] = useState("repositories")
  const [responseList, setResponseList] = useState([])
  useEffect(() => {
    var config = {
      method: 'get',
      url: `http://localhost:3600/${state}`,
      params: {
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
        setResponseList(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });


  }, [state])
  const options = [
    { label: 'Repositories', value: 'repositories' },
    { label: 'Developers', value: 'developers' },
  ];
  return <div className='trends-container'>
    <div className='trends-container__header'>
      <Radio.Group options={options} optionType="button" defaultValue={state}
        buttonStyle="solid" onChange={(e) => setState(e.target.value)} />

    </div>
    <div className='trends-container__content'>
      {
        state === "developers" ? <DevelopersContainer develoeprs={responseList} /> : <RepositoriesContainer repos={responseList} />
      }
    </div>
  </div>;

}

export default TrendContainer;
