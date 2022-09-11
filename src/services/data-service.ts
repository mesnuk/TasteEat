import {CardProps, TextBlockProps} from "../components/about-us-section/types";
import axios from "axios";
import {MenuCardProps} from "../components/menu-section/type";
const headers = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}
export class DataService {
    public getInfoCards(): Promise<CardProps[]> {
        return axios.get<CardProps[]>('./data/short-info-cards.json', headers ).then(response => {
            return response.data;
        })
    }
    public getTextCards(): Promise<TextBlockProps[]> {
        return axios.get<TextBlockProps[]>('./data/text-cards.json', headers ).then(response => {

            return response.data;
        })
    }
    public getMenuCards(): Promise<MenuCardProps[]> {
        return axios.get<MenuCardProps[]>('./data/menu.json', headers ).then(response => {
            console.log(response.data)
            return response.data;
        })
    }
}