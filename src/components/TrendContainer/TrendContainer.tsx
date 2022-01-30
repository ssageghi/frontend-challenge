import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import DevelopersContainer from '../DevelopersContainer';
import RepositoriesContainer from '../RepositoriesContainer';
import TrendActionButtons from '../TrendActionButtons';
import './TrendContainer.scss'
import mainContext from '../../context/mainContext';

function TrendContainer() {
  //state to store that it's Developer trend or Repository Trend
  const [requestPrams, setRequestParams] = useState<any>({
    section: "repositories",
    since: "",
    spoken_language_code: "",
    language: ""
  })

  const [responseList, setResponseList] = useState([])
  const { setOptions } = useContext(mainContext)
  useEffect(() => {
    axios.get("http://localhost:3600")
      .then((res) => {
        if (setOptions) {
          setOptions({ ...res.data })

        }
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])
  useEffect(() => {
    console.log(requestPrams);
    var config = {
      method: 'get',
      url: `http://localhost:3600/${requestPrams.section}`,
      params: {
        "spoken_language_code": requestPrams.spoken_language_code,
        "since": requestPrams.since,
        "language": requestPrams.language
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


  }, [requestPrams])

  return <div className='trends-container'>
    <div className='trends-container__header'>
      <TrendActionButtons requestPrams={requestPrams}
        setRequestParams={setRequestParams} />


    </div>
    <div className='trends-container__content'>
      {
        requestPrams.section === "developers" ? <DevelopersContainer developers={responseList} /> : <RepositoriesContainer repos={responseList} />
      }
    </div>
  </div>;

}

export default TrendContainer;
