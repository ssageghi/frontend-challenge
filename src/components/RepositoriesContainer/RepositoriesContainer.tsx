import { FunctionComponent } from 'react';
import Repository from '../Repository';
import { RepositoriesProps } from '../../interfaces/RepoInterfaces'
import { Empty } from 'antd';
const RepositoriesContainer: FunctionComponent<RepositoriesProps> = (props) => {
  const { repos } = props;
  return <>
    {
      repos.length > 0 ? repos.map(repo => (
        <Repository repository={repo} key={repo.reponame} />
      )) : <Empty className='no_data' />

    }
  </>;
}

export default RepositoriesContainer;
