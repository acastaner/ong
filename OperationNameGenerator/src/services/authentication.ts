/* This is a generated file. Do not modify or all the changes will be lost. */
import * as helpers from "folke-ko-service-helpers";
import * as views from "./views";

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

    forgotPassword(params: {forgotPasswordView: views.ForgotPassword}) {
        return helpers.fetchVoid("api/authentication/forgot-password", "PUT", JSON.stringify(params.forgotPasswordView));
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

    login(params: {loginView: views.Login}) {
        return helpers.fetchSingle<views.LoginResult>("api/authentication/login", "PUT", JSON.stringify(params.loginView));
    }

    logOff(params: {}) {
        return helpers.fetchVoid("api/authentication/", "DELETE", null);
    }

    register(params: {registerView: views.Register}) {
        return helpers.fetchSingle<views.User>("api/authentication/register", "POST", JSON.stringify(params.registerView));
    }

    resetPassword(params: {resetPasswordView: views.ResetPassword}) {
        return helpers.fetchVoid("api/authentication/reset-password", "PUT", JSON.stringify(params.resetPasswordView));
    }

    sendAccountConfirm(params: {userId?: number}) {
        return helpers.fetchVoid("api/authentication/send-account-confirm" + helpers.getQueryString({ userId: params.userId }), "PUT", null);
    }

    verifyCode(params: {verifyCodeView: views.VerifyCode}) {
        return helpers.fetchVoid("api/authentication/verifycode", "PUT", JSON.stringify(params.verifyCodeView));
    }
}

