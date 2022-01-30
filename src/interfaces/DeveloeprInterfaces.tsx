export interface DeveloperItem {

    "author": string,
    "username": string,
    "avatar": string,
    "url": string,
    "reponame": string,
    "repourl": string,
    "description": number,
}

export interface DevelopersProps {
    repos: Array<DeveloperItem>
};