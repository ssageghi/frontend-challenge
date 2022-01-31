export interface DeveloperItem {

    "author": string,
    "username": string,
    "avatar": string,
    "url": string,
    "reponame": string,
    "repourl": string,
    "description": number,
    "sponsorUrl": string
}

export interface DevelopersProps {
    developers: Array<DeveloperItem>
};