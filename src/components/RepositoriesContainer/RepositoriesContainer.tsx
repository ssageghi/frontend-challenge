import React, { FunctionComponent } from 'react';
import Repository from '../Repository';
import { RepositoriesProps } from '../../interfaces/RepoInterfaces'
const RepositoriesContainer: FunctionComponent<RepositoriesProps> = (props) => {
  const { repos } = props;
  return <div>
    <h1>sajdg</h1>
    {
      repos?.map(repo => (
        <Repository repository={repo} key={repo.reponame} />
      ))

    }
  </div>;
}

export default RepositoriesContainer;
