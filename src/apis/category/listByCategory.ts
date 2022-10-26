import { ICategory } from "../../bussiness/category";
import { ApiMethods } from "../defineApi";
import Repository from "../RepositoryApi";
import { ReturnResponse } from "../Response";

export const getListByCategory = async (id?: string): Promise<ReturnResponse<ICategory>> => {
    return Repository({
        method: ApiMethods.GET,
        url: `category/${id}`
    });
};
