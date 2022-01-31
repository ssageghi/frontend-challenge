export interface RepositoryBuilder {
    "avatar": string,
    "url": string,
    "username": string,
}
export interface RepositoryItem {
    "author": string,
    "reponame": string,
    "repourl": string,
    "repodesc": string,
    "language": string,
    "langcolor": string,
    "stars": number,
    "forks": number,
    "laststars": number,
    "builtby": Array<RepositoryBuilder>
}

export interface RepositoriesProps {
    repos: Array<RepositoryItem>
};