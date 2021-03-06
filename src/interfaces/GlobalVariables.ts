export interface SiteGlobalVariableInterface {
    pageHeaders: PageHeaderInterface,
    categories: CategoriesInterface[],
    gameButton: string[]
}

export interface PageHeaderInterface {
    CHARACTERS: string,
    NEWS: string,
    GAME: string,
}

export interface CategoriesInterface {
    tag: string;
    color: string
}