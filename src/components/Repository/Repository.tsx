import React, { FunctionComponent } from 'react';
import { RepositoryItem } from '../../interfaces/RepoInterfaces';
const Repository: FunctionComponent<{ repository: RepositoryItem }> = (props) => {
  const repo = props;
  return <div className='row'> {JSON.stringify(repo)}</div>;

}

export default Repository;
