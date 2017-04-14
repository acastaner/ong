import * as accountGroup from "./account";
import * as adjectiveGroup from "./adjective";
import * as authenticationGroup from "./authentication";
import * as roleGroup from "./role";
import * as views from "../views";
import * as koViews from "./views";
export * from "../enums";
export { AdjectiveDto, LoginResult, User, SendCode, AuthenticationDescription, UserLoginInfo, Role } from "../views";
import { loading } from "folke-ko-service-helpers";
export * from "./views";
export { loading } from "folke-ko-service-helpers";

export const account = new accountGroup.AccountController();
export const adjective = new adjectiveGroup.AdjectiveController();
export const authentication = new authenticationGroup.AuthenticationController();
export const role = new roleGroup.RoleController();
export const services = {
    account: account,
    adjective: adjective,
    authentication: authentication,
    role: role,
    loading: loading
};

