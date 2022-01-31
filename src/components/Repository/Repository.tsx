import React, { FunctionComponent } from 'react';
import { RepositoryItem } from '../../interfaces/RepoInterfaces';
import './Repository.scss';
import { Button, Menu, Dropdown } from 'antd';
import { forkIcon, starIcon, trianAngle, repoIcon } from '../../icons';
const Repository: FunctionComponent<{ repository: RepositoryItem }> = (props) => {
  const { repository } = props;
  const menu = (
    <Menu >
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2nd item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );

  return (
    <div className='row repo-container'>
      <div className='repo-container__header'>
        <a href={repository.repourl}>
          {repoIcon}
          <h1><span>{repository.author} / </span>  {repository.reponame} </h1>
        </a>
        <Dropdown.Button overlay={menu} icon={trianAngle}>
          {starIcon}
          Star
        </Dropdown.Button>

      </div>
      <div className='repo-container__content'>
        {repository.repodesc}
      </div>
      <div className='repo-container__footer'>
        <div className='repo-container__details'>
          <div className="repo-container__language">
            {repository.language}
          </div>
          <div className='repo-container__total-star'>
            {starIcon}
            {repository.stars}
          </div>
          <div className='repo-container__total-fork'>
            {forkIcon}
            {repository.forks}
          </div>
          <div className='repo-container__built-by'>
            <p>Built by</p>
            <div>
              {
                repository.builtby?.map(person => (
                  <a href={person.url} key={person.username}>
                    <img src={person.avatar} alt={person.username} />
                  </a>))
              }
            </div>
          </div>
        </div>
        <div className='repo-container__today-star'>
          {starIcon}
          {repository.laststars}

          <p>starts today</p>

        </div>
      </div>
    </div >);

}

export default Repository;
