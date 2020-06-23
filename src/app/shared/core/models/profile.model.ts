import { Content } from './content.model';

export class Profile implements Content{
    name?: string;
    subtitle?: string;
    location?: string;
    reviews?: number;
    price?: number;
    time?: number;
    text?: string;
    photo?: string;
}