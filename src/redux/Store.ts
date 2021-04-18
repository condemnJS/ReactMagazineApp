export const Store = {
    get: (key: string) => JSON.parse(localStorage.getItem(key) || ''),
    set: (key: string, value: any) => localStorage.setItem(key, JSON.stringify(value))
}