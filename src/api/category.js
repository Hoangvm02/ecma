import instance from "./config";

export const getAll = () => {
    const url = "/category";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/category/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/category/${id}`;
    return instance.detele(url);
};
export const add = (category) => {
    const url = `/category`;
    return instance.category(url, category);
};
export const edit = (category) => {
    const url = `/category/${category.id}`;
    return instance.put(url, category);
};