import { render, screen } from '@testing-library/react'
import DevelopersContainer from './DevelopersContainer';
import { DevelopersProps } from '../../interfaces/DeveloeprInterfaces'

const developerList: DevelopersProps = {
    developers: [
        {
            "author": "string1",
            "username": "string1",
            "avatar": "string1",
            "url": "string1",
            "reponame": "string1",
            "repourl": "string1",
            "description": "string1",
            "sponsorUrl": "string1"

        },
        {
            "author": "string2",
            "username": "string2",
            "avatar": "string2",
            "url": "string2",
            "reponame": "string2",
            "repourl": "string2",
            "description": "string2",
            "sponsorUrl": "string2",

        }]
}
it('Renders Developer Component correctly', () => {

    const { container } = render(<DevelopersContainer developers={developerList.developers} />)
    expect(container.getElementsByClassName('dev-container').length).toBe(developerList.developers.length);
});
