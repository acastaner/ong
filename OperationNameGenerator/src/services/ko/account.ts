/* This is a generated file. Do not modify or all the changes will be lost. */
import * as helpers from "folke-ko-service-helpers";
import * as views from "../views";
import * as koViews from "./views";

export class AccountController {

    changePassword(params: {view: koViews.ChangePasswordView}) {
        return helpers.fetchVoid("api/account/password", "PUT", JSON.stringify(params.view.toJs()));
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

    search(params: {filter: koViews.UserSearchFilter, offset?: number, limit?: number, sortColumn?: string}) {
        return helpers.fetchList<views.User>("api/account/search" + helpers.getQueryString({ offset: params.offset, limit: params.limit, sortColumn: params.sortColumn }), "PUT", JSON.stringify(params.filter.toJs()));
    }

    setEmail(params: {model: koViews.SetEmailView}) {
        return helpers.fetchVoid("api/account/email", "PUT", JSON.stringify(params.model.toJs()));
    }

    setPassword(params: {model: koViews.SetPasswordView}) {
        return helpers.fetchVoid("api/account/password", "POST", JSON.stringify(params.model.toJs()));
    }
}

