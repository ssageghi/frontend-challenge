export interface DeveloperItem {

    "author": string,
    "username": string,
    "avatar": string,
    "url": string,
    "reponame": string,
    "repourl": string,
    "description": string,
    "sponsorUrl": string
}

export interface DevelopersProps {
    developers: Array<DeveloperItem>
};