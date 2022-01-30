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
    "builtby": Array<Object>
}

export interface RepositoriesProps {
    repos: Array<RepositoryItem>
};