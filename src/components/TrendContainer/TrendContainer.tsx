import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import DevelopersContainer from '../DevelopersContainer';
import RepositoriesContainer from '../RepositoriesContainer';
import TrendActionButtons from '../TrendActionButtons';
import './TrendContainer.scss'
import { Spin, Empty } from 'antd';
function TrendContainer() {
  //state to store that it's Developer trend or Repository Trend
  const [requestPrams, setRequestParams] = useState<any>({
    section: "repositories",
    since: "",
    spoken_language_code: "",
    language: ""
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [repositoryList, setRepositoryList] = useState([])
  const [developerList, setDeveloperList] = useState([])

  useEffect(() => {
    setLoading(true)
    var config = {
      method: 'get',
      url: `https://afternoon-escarpment-37303.herokuapp.com/${requestPrams.section}`,
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
        if (requestPrams.section === "developers") {
          setDeveloperList(response.data)
        }
        else {
          setRepositoryList(response.data)

        }
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false)
      });

  }, [requestPrams])

  return <div className='trends-container'>
    <div className='trends-container__header'>
      <TrendActionButtons requestPrams={requestPrams}
        setRequestParams={setRequestParams} />


    </div>

    <Spin spinning={loading} size={"large"}>
      {/* {responseList.length > 0 ? */}
      <div className='trends-container__content'>
        {
          requestPrams.section === "developers" ? <DevelopersContainer developers={developerList} /> : <RepositoriesContainer repos={repositoryList} />
        }
      </div>

    </Spin>
  </div>;

}

export default TrendContainer;
