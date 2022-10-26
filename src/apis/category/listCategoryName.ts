import { IBook } from "../../bussiness/book";
import { ICategoryName } from "../../bussiness/category";
import { ApiMethods, ApiRoutes } from "../defineApi";
import Repository from "../RepositoryApi";
import { ReturnListResponse } from "../Response";

const route: ApiRoutes = {
    method: ApiMethods.GET, //GET,DELETE su dung param
    // POST, PUT, PATCH su dung payload
    url: "category",
};
export const getListCategoryName = async (): Promise<ReturnListResponse<ICategoryName>> => {
    return Repository(route);
};
