import { render, screen } from '@testing-library/react'
import { DeveloperItem } from '../../interfaces/DeveloeprInterfaces';
import Developer from './index';
const DevItem = {
    "author": "Liam Galvin",
    "username": "",
    "avatar": "https://avatars.githubusercontent.com/u/1187060?s=96&v=4",
    "url": "https://github.com/liamg",
    "reponame": "",
    "repourl": "https://github.com/liamg/traitor",
    "description": "⬆️ ☠️ Automatic Linux privesc via exploitation of low-hanging fruit e.g. gtfobins, polkit, docker socket",
    "sponsorUrl": "https://github.com/sponsors/liamg"
}
it("showing author name and username", () => {
    // expect(screen.getByText(Developer.author)).toBe(Developer.author)
    const { container } = render(<Developer developer={DevItem} index={1} />);

    expect(container.querySelector(".dev-container__avatar p")).toHaveTextContent(`${1 + 1}`)
    expect(container.querySelector(".dev-container__avatar h1")).toHaveTextContent(DevItem.author)
    if (DevItem.username)
        expect(container.querySelector(".dev-container__avatar h3"))?.toHaveTextContent(DevItem.username)


})
it("it redirect to correct github url", () => {
    // expect(screen.getByText(Developer.author)).toBe(Developer.author)
    const { container } = render(<Developer developer={DevItem} index={1} />);
    const link = container.querySelector(".dev-container__user-info >a")?.getAttribute("href")
    expect(link).toBe(DevItem.url)


})
it("component has popular repo shown if it's exist", () => {
    const { container } = render(<Developer developer={DevItem} index={1} />);
    if (DevItem.reponame)

        expect(container.querySelector(".dev-container__repo-information")).toHaveTextContent(DevItem.reponame)
})

