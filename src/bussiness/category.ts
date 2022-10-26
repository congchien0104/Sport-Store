import { IBook } from "./book";

export interface ICategoryName {
    id: string;
    name: string;
}

export interface ICategory {
    booksOfCategory: IBook[];
    enable: true;
    id: string;
    name: string;
}
