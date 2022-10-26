import { CURRENCY, LANGUAGE } from "./common";

interface IPublisher {
    name: string;
    date: Date;
}

interface IDescription {
    language: LANGUAGE;
    description: string;
}

interface IPrice {
    price: number;
    currency: CURRENCY;
}

interface IFallIntoCate {
    id: string;
    name: string;
}

export interface IBook {
    id: string;
    name: string;
    createDate: Date;
    author: string;
    publishers: IPublisher;
    description: IDescription[];
    price: IPrice;
    image_URLs: Array<string>;
    quantity: number;
    sold: number;
    bookLockNumber: number;
    discount: number;
    fallIntoCategories: IFallIntoCate;
    enable: boolean;
}