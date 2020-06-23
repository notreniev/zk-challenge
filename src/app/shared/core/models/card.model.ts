import { Content } from './content.model';

export interface Card{
    header?: string;
    subheader?: string;
    content: Content;
    footer?: string;
};