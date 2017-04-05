/* This is a generated file. Do not modify or all the changes will be lost. */
import * as helpers from "folke-ko-service-helpers";
import * as views from "./views";

export class RoleController {

    addUser(params: {roleName: string, userId: string}) {
        return helpers.fetchVoid(`api/user/${params.userId}/role`, "POST", JSON.stringify(params.roleName));
    }

    create(params: {name: string}) {
        return helpers.fetchSingle<views.Role>("api/role/", "POST", JSON.stringify(params.name));
    }

    delete(params: {id: string}) {
        return helpers.fetchVoid(`api/role/${params.id}`, "DELETE", null);
    }

    deleteUser(params: {roleName: string, userId: string}) {
        return helpers.fetchVoid(`api/user/${params.userId}/role`, "DELETE", JSON.stringify(params.roleName));
    }

    get(params: {id: string}) {
        return helpers.fetchSingle<views.Role>(`api/role/${params.id}`, "GET", null);
    }

    getAll(params: {}) {
        return helpers.fetchList<views.Role>("api/role/", "GET", null);
    }

    getForUser(params: {userId: string}) {
        return helpers.fetchList<string>(`api/user/${params.userId}/role`, "GET", null);
    }
}

