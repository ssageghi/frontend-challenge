import { FunctionComponent } from 'react';
import { DeveloperItem } from '../../interfaces/DeveloeprInterfaces';
import { repoIcon, popularIcon, heartIcon } from '../../icons';
import { Button } from 'antd';
import "./Developer.scss";
const Developer: FunctionComponent<{ developer: DeveloperItem, index: number }> = (props) => {
  const { developer, index } = props;
  return <div className='row dev-container'>
    <div className="dev-container__avatar">
      <p>{index + 1}</p>
      <img src={developer.avatar} alt="" />
      <div className='dev-container__user-info'>
        <a href={developer.url}>
          <h1>
            {developer.author}</h1>
        </a>

        {developer.username ? <a href={developer.url}><h3>{developer.username}</h3></a> : ""}
      </div>
    </div>
    <div className="dev-container__repo-information">
      <div>
        {popularIcon}
        PUPULAR REPO
      </div>
      <a href={developer.repourl}>
        {repoIcon}
        {developer.reponame}
      </a>
      <div>
        {developer.description}
      </div>
    </div>
    <div className="dev-container__action-buttons">
      {developer.sponsorUrl ? <Button className='support-btn'>{heartIcon}Sponsor</Button> : ""}
      <Button>Follow</Button>
    </div>
  </div>;
}

export default Developer;
