import React, { FunctionComponent } from 'react';
import Repository from '../Repository';
import { RepositoriesProps } from '../../interfaces/RepoInterfaces'
const RepositoriesContainer: FunctionComponent<RepositoriesProps> = (props) => {
  const { repos } = props;
  console.log(props, repos);
  return <>
    {
      repos?.map(repo => (
        <Repository repository={repo} key={repo.reponame} />
      ))

    }
  </>;
}

export default RepositoriesContainer;
