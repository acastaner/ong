/* This is a generated file. Do not modify or all the changes will be lost. */
import * as helpers from "folke-ko-service-helpers";
import * as views from "./views";

export class AccountController {

    changePassword(params: {view: views.ChangePassword}) {
        return helpers.fetchVoid("api/account/password", "PUT", JSON.stringify(params.view));
    }

    get(params: {id: number}) {
        return helpers.fetchSingle<views.User>(`api/account/${params.id}`, "GET", null);
    }

    getMe(params: {}) {
        return helpers.fetchSingle<views.User>("api/account/me", "GET", null);
    }

    getUserRoles(params: {}) {
        return helpers.fetchList<string>("api/user/me/role", "GET", null);
    }

    search(params: {filter: views.UserSearchFilter, offset?: number, limit?: number, sortColumn?: string}) {
        return helpers.fetchList<views.User>("api/account/search" + helpers.getQueryString({ offset: params.offset, limit: params.limit, sortColumn: params.sortColumn }), "PUT", JSON.stringify(params.filter));
    }

    setEmail(params: {model: views.SetEmail}) {
        return helpers.fetchVoid("api/account/email", "PUT", JSON.stringify(params.model));
    }

    setPassword(params: {model: views.SetPassword}) {
        return helpers.fetchVoid("api/account/password", "POST", JSON.stringify(params.model));
    }
}

