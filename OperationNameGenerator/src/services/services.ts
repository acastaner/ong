import * as accountGroup from "./account";
import * as authenticationGroup from "./authentication";
import * as roleGroup from "./role";
import * as valuesGroup from "./values";
import * as views from "./views";
export * from "./enums";
import { loading } from "folke-ko-service-helpers";
export * from "./views";
export { loading } from "folke-ko-service-helpers";

export const account = new accountGroup.AccountController();
export const authentication = new authenticationGroup.AuthenticationController();
export const role = new roleGroup.RoleController();
export const values = new valuesGroup.ValuesController();
export const services = {
    account: account,
    authentication: authentication,
    role: role,
    values: values,
    loading: loading
};

