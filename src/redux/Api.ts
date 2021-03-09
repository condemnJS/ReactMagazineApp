import axios from "axios";
import {APP_API_URL} from "../rootConstant";

// Получить только категории с их лимитом
export async function requestGetCategories(limit: number) {
    return axios.request({
        method: 'get',
        url: APP_API_URL + `/categories?limit=${limit}`
    })
}
// Получить все подкатегории
export async function requestGetSubCategories() {
    return axios.request({
        method: 'get',
        url: APP_API_URL + `/subcategories`
    })
}
