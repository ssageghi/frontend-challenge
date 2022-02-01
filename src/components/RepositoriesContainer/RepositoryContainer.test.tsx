import { render, screen } from '@testing-library/react'
import RepositoriesContainer from './RepositoriesContainer';
import { RepositoriesProps } from '../../interfaces/RepoInterfaces'

const repoList: RepositoriesProps = {
  repos: [
    {
      "author": "string1",
      "reponame": "string1",
      "repourl": "string1",
      "repodesc": "string1",
      "language": "string1",
      "langcolor": "string1",
      "stars": 213,
      "forks": 321,
      "laststars": 321,
      "builtby": [
        {
          "avatar": "string1",
          "url": "string1",
          "username": "string1",
        }
      ]
    },
    {
      "author": "string2",
      "reponame": "string2",
      "repourl": "string2",
      "repodesc": "string2",
      "language": "string2",
      "langcolor": "string2",
      "stars": 213,
      "forks": 321,
      "laststars": 321,
      "builtby": [
        {
          "avatar": "string2",
          "url": "string2",
          "username": "string2",
        }
      ]
    }]
}

it('Renders Repository Component correctly', () => {

  const { container } = render(<RepositoriesContainer repos={repoList.repos} />)
  expect(container.getElementsByClassName('repo-container').length).toBe(repoList.repos.length);
});
