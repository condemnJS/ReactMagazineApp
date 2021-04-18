// Поулчение всех категории и их детей
export const GET_SUB_CATEGORIES = "GET_SUB_CATEGORIES"
export const FETCH_GET_SUB_CATEGORIES = "FETCH_GET_SUB_CATEGORIES"

// Получить только категории
export const GET_CATEGORIES = "GET_CATEGORIES"
export const FETCH_GET_CATEGORIES = "FETCH_GET_CATEGORIES"

// Получить конкретную категорию
export const GET_CATEGORY = "GET_CATEGORY";
export const FETCH_GET_CATEGORY = "FETCH_GET_CATEGORY";

// Получить только подкатегории
export const GET_SUBS_CATEGORIES = "GET_SUBS_CATEGORIES";
export const FETCH_GET_SUBS_CATEGORIES = "FETCH_GET_SUBS_CATEGORIES";

export const AUTH_USER = "AUTH_USER";
export const FETCH_AUTH_USER = "FETCH_AUTH_USER";

export const REGISTER_USER = "REGISTER_USER"
export const REGISTER_USER_FETCH = "REGISTER_USER_FETCH"

export const CREATE_USER = "CREATE_USER"

export const SET_ERRORS = "SET_ERRORS"
export const CLEAN_ERRORS = "CLEAN_ERRORS"

export const SET_TOKEN = "SET_TOKEN"
export const SAVE_TOKEN = "SAVE_TOKEN"

// Создангие категории
export const CATEGORY_CREATE = "CATEGORY_CREATE"
export const CATEGORY_CREATE_FETCH = "CATEGORY_CREATE_FETCH"
export const CLEAN_CATEGORY = "CLEAN_CATEGORY"

// Создание подкатегории
export const SUBCATEGORY_CREATE = "SUBCATEGORY_CREATE"
export const SUBCATEGORY_CREATE_FETCH = "SUBCATEGORY_CREATE_FETCH"
export const CLEAN_SUBCATEGORY = "CLEAN_SUBCATEGORY"

// Создание подподкатегории
export const SUBSUBCATEGORY_CREATE = "SUBSUBCATEGORY_CREATE"
export const SUBSUBCATEGORY_CREATE_FETCH = "SUBSUBCATEGORY_CREATE_FETCH"
export const CLEAN_SUBSUBCATEGORY = "CLEAN_SUBSUBCATEGORY"


export interface BaseCategoryPropsI {
    slug: string,
    id: number,
    title: string,
}

export interface errorsBody {
    code?: number,
    message?: string,
}

export interface is_created {
    code: 201,
    message: string
}