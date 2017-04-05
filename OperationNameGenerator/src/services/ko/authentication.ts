/* This is a generated file. Do not modify or all the changes will be lost. */
import * as helpers from "folke-ko-service-helpers";
import * as views from "../views";
import * as koViews from "./views";

export class AuthenticationController {

    confirmEmail(params: {userId?: number, code?: string}) {
        return helpers.fetchVoid("api/authentication/confirm-email" + helpers.getQueryString({ userId: params.userId, code: params.code }), "PUT", null);
    }

    externalLogin(params: {provider?: string, returnUrl?: string}) {
        return helpers.fetchVoid("api/authentication/external-login" + helpers.getQueryString({ provider: params.provider, returnUrl: params.returnUrl }), "GET", null);
    }

    externalLoginCallback(params: {returnUrl?: string}) {
        return helpers.fetchVoid("api/authentication/callback" + helpers.getQueryString({ returnUrl: params.returnUrl }), "GET", null);
    }

    forgotPassword(params: {forgotPasswordView: koViews.ForgotPasswordView}) {
        return helpers.fetchVoid("api/authentication/forgot-password", "PUT", JSON.stringify(params.forgotPasswordView.toJs()));
    }

    getExternalAuthenticationProviders(params: {}) {
        return helpers.fetchList<views.AuthenticationDescription>("api/authentication/external-login-providers", "GET", null);
    }

    getExternalLogins(params: {}) {
        return helpers.fetchList<views.UserLoginInfo>("api/authentication/external-logins", "GET", null);
    }

    getSendCode(params: {rememberMe?: boolean}) {
        return helpers.fetchSingle<views.SendCode>("api/authentication/send-code" + helpers.getQueryString({ rememberMe: params.rememberMe }), "GET", null);
    }

    linkLogin(params: {provider?: string}) {
        return helpers.fetchVoid("api/authentication/link-external-login" + helpers.getQueryString({ provider: params.provider }), "GET", null);
    }

    linkLoginCallback(params: {}) {
        return helpers.fetchVoid("api/authentication/link-callback", "GET", null);
    }

    login(params: {loginView: koViews.LoginView}) {
        return helpers.fetchSingle<views.LoginResult>("api/authentication/login", "PUT", JSON.stringify(params.loginView.toJs()));
    }

    logOff(params: {}) {
        return helpers.fetchVoid("api/authentication/", "DELETE", null);
    }

    register(params: {registerView: koViews.RegisterView}) {
        return helpers.fetchSingle<views.User>("api/authentication/register", "POST", JSON.stringify(params.registerView.toJs()));
    }

    resetPassword(params: {resetPasswordView: koViews.ResetPasswordView}) {
        return helpers.fetchVoid("api/authentication/reset-password", "PUT", JSON.stringify(params.resetPasswordView.toJs()));
    }

    sendAccountConfirm(params: {userId?: number}) {
        return helpers.fetchVoid("api/authentication/send-account-confirm" + helpers.getQueryString({ userId: params.userId }), "PUT", null);
    }

    verifyCode(params: {verifyCodeView: koViews.VerifyCodeView}) {
        return helpers.fetchVoid("api/authentication/verifycode", "PUT", JSON.stringify(params.verifyCodeView.toJs()));
    }
}

