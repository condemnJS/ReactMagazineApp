import axios from "axios";
import {APP_API_URL} from "../rootConstant";
import {Store} from "./Store";

// Получить только категории с их лимитом
export async function requestGetCategories(limit: number) {
    if (limit) {
        return axios.request({
            method: 'get',
            url: APP_API_URL + `/categories?limit=${limit}`
        })
    }
    return axios.request({
        method: 'get',
        url: APP_API_URL + `/categories`
    })
}

// Получить все подкатегории
export async function requestGetSubsCategories() {
    return axios.request({
        method: 'get',
        url: APP_API_URL + '/subcategories'
    })
}

// Получить все подподкатегории

export async function requestGetSubsSubsCategories() {
    return axios.request({
        method: 'get',
        url: APP_API_URL + '/subsubcategories'
    })
}

// Получить все категории с их подкатегориями и подподкатегориями
export async function requestGetSubCategories() {
    return axios.request({
        method: 'get',
        url: APP_API_URL + `/categories/childrens`
    })
}

// Получить конкретную категорию (подкатегории или подподкатегорию)
export async function requestGetCategory(slug: string) {
    return axios.request({
        method: 'get',
        url: APP_API_URL + `/categories/` + slug
    })
}

export interface userDataI {
    email: string,
    password: string
}

// Авторизация пользователя 
export async function requestAuth(data: userDataI) {
    return axios.request({
        method: 'post',
        url: APP_API_URL + '/login',
        data
    });
}

export interface userRegisterDataI {
    email: string,
    tel: string,
    password: string,
    password_confirmation: string,
    fio: string
}


// Регистрация пользователя
export async function requestRegister(data: userRegisterDataI) {
    return axios.request({
        method: 'post',
        url: APP_API_URL + '/register',
        data
    })
}

// Создание категории
export async function requestCategoryCreate(data: any) {
    return axios.request({
        method: 'post',
        url: APP_API_URL + '/admin/category/create',
        headers: {
            "Authorization": 'Bearer ' + Store.get('token'),
            'Content-Type': 'multipart/form-data'
        },
        data
    })
}

// Создание подкатегории
export async function requestSubCategoryCreate(data: any) {
    return axios.request({
        method: 'post',
        url: APP_API_URL + '/admin/subcategory/create',
        headers: {
            "Authorization": 'Bearer ' + Store.get('token'),
            'Content-Type': 'multipart/form-data'
        },
        data
    })
}

// Создание подподкатегории
export async function requestSubSubCategoryCreate(data: any) {
    return axios.request({
        method: 'post',
        url: APP_API_URL + '/admin/subsubcategory/create',
        headers: {
            "Authorization": 'Bearer ' + Store.get('token'),
            'Content-Type': 'multipart/form-data'
        },
        data
    })
}

// Получить подкатегории по слагу категории
export async function requestGetSubCategoryBySlug(slug: string) {
    return axios.request({
        method: 'get',
        url: APP_API_URL + `/categories/` + slug + '/subcategories'
    })
}

// Запрос создания товара
export async function requestCreateOrder(data: any) {
    return axios.request({
        method: 'post',
        url: APP_API_URL + '/order/create',
        headers: {
            "Authorization": 'Bearer ' + Store.get('token'),
        },
        data
    })
}

// Запрос на получение товаров по категориями по слагу
export async function requestGetOrdersWithSubSubCategory(slug: string) {
    return axios.request({
        method: 'get',
        url: APP_API_URL + '/order/' + slug
    })
}

export async function requestDeleteCategories(id: string) {
    return axios.request({
        method: 'delete',
        url: APP_API_URL + '/admin/category/' + id + '/delete',
        headers: {
            "Authorization": 'Bearer ' + Store.get('token'),
        },
    })
}

export async function requestDeleteSubCategories(id: string) {
    return axios.request({
        method: 'delete',
        url: APP_API_URL + '/admin/subcategory/' + id + '/delete',
        headers: {
            "Authorization": 'Bearer ' + Store.get('token'),
        },
    })
}

export async function requestDeleteSubSubCategories(id: string) {
    return axios.request({
        method: 'delete',
        url: APP_API_URL + '/admin/subsubcategory/' + id + '/delete',
        headers: {
            "Authorization": 'Bearer ' + Store.get('token'),
        },
    })
}