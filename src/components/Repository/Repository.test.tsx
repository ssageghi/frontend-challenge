import { render, screen } from '@testing-library/react'
import Repository from './index';
import { RepositoryItem } from '../../interfaces/RepoInterfaces';
const repository = {
    "author": "psf",
    "reponame": "black",
    "repourl": "https://github.com/psf/black",
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

it("showing author name and repo name", () => {
    // expect(screen.getByText(repository.author)).toBe(repository.author)
    const { container } = render(<Repository repository={repository} />);

    expect(container.querySelector(".repo-container__header h1")).toHaveTextContent(`${repository.author} / ${repository.reponame}`)


})
it("it redirect to correct github url", () => {
    // expect(screen.getByText(repository.author)).toBe(repository.author)
    const { container } = render(<Repository repository={repository} />);
    const link = container.querySelector(".repo-container__header a")?.getAttribute("href")
    expect(link).toBe(repository.repourl)


})
it("showing repo description", () => {
    // expect(screen.getByText(repository.author)).toBe(repository.author)
    const { container } = render(<Repository repository={repository} />);

    expect(container.querySelector(".repo-container__content")).toHaveTextContent(repository.repodesc)
})
it("it show starts and forks", () => {
    // expect(screen.getByText(repository.author)).toBe(repository.author)
    const { container } = render(<Repository repository={repository} />);

    expect(container).toHaveTextContent(`${repository.stars}`)
    expect(container).toHaveTextContent(`${repository.forks}`)
})
it("it show the repo contributer ", () => {
    // expect(screen.getByText(repository.author)).toBe(repository.author)
    const { container } = render(<Repository repository={repository} />);

    
    expect(container.querySelector(".repo-container__built-by")).toHaveTextContent("Built by")
    expect(container.querySelectorAll(".repo-container__built-by > div a")?.length).toBe(repository.builtby.length)


})