export interface SiteGlobalVariableInterface {
    pageHeaders: PageHeaderInterface,
    categories: CategoriesInterface[],
    gameButton: string[],
    titles: TitlesInterface 
}

export interface TitlesInterface {
    home: string;
    news: string;
    game: string;
    characters: string;
    notFound: string,
    inquiries: string;
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