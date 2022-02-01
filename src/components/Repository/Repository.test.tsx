import { render, screen } from '@testing-library/react'
import Repository from './index';
import { RepositoryItem } from '../../interfaces/RepoInterfaces';
const repository = {
    "author": "psf",
    "reponame": "black",
    "repourl": "https://github.com//psf/black",
    "repodesc": "The uncompromising Python code formatter",
    "language": "Python",
    "langcolor": "#3572A5",
    "stars": 24732,
    "forks": 1577,
    "laststars": 70,
    "builtby": [
        {
            "username": "ambv",
            "url": "https://github.com/ambv",
            "avatar": "https://avatars.githubusercontent.com/u/55281?s=40&v=4"
        },
        {
            "username": "JelleZijlstra",
            "url": "https://github.com/JelleZijlstra",
            "avatar": "https://avatars.githubusercontent.com/u/906600?s=40&v=4"
        },
        {
            "username": "ichard26",
            "url": "https://github.com/ichard26",
            "avatar": "https://avatars.githubusercontent.com/u/63936253?s=40&v=4"
        },
        {
            "username": "hugovk",
            "url": "https://github.com/hugovk",
            "avatar": "https://avatars.githubusercontent.com/u/1324225?s=40&v=4"
        },
        {
            "username": "cooperlees",
            "url": "https://github.com/cooperlees",
            "avatar": "https://avatars.githubusercontent.com/u/3005596?s=40&v=4"
        }
    ]
}

it("Navigate to user git hub url", () => {
    const { container } = render(<Repository repository={repository} />)
    console.log(container.getElementsByTagName("h1"))


})