import * as accountGroup from "./account";
import * as adjectiveGroup from "./adjective";
import * as authenticationGroup from "./authentication";
import * as dataGroup from "./data";
import * as nounGroup from "./noun";
import * as opNameGroup from "./opName";
import * as roleGroup from "./role";
import * as views from "../views";
import * as koViews from "./views";
export * from "../enums";
export { DataDto, OpNameDto, LoginResult, User, SendCode, AuthenticationDescription, UserLoginInfo, Role } from "../views";
import { loading } from "folke-ko-service-helpers";
export * from "./views";
export { loading } from "folke-ko-service-helpers";

export const account = new accountGroup.AccountController();
export const adjective = new adjectiveGroup.AdjectiveController();
export const authentication = new authenticationGroup.AuthenticationController();
export const data = new dataGroup.DataController();
export const noun = new nounGroup.NounController();
export const opName = new opNameGroup.OpNameController();
export const role = new roleGroup.RoleController();
export const services = {
    account: account,
    adjective: adjective,
    authentication: authentication,
    data: data,
    noun: noun,
    opName: opName,
    role: role,
    loading: loading
};

