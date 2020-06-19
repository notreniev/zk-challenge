import { Content } from './content.model'

export class Schedule implements Content{
    header: string
    timezone: string
    dates?:{}
    slots?:{}
}