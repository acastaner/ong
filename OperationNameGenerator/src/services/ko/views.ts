import * as ko from "knockout";
import * as views from "../views";
import * as validation from "folke-ko-validation";
import { loading } from "folke-ko-service-helpers";


export class AdjectiveDto {
    originalData: views.AdjectiveDto;
    changed: KnockoutComputed<boolean>;
    id: string;

    value = ko.observable<string>();

    constructor(data: views.AdjectiveDto) {
        this.load(data);
        this.originalData = data;
        this.changed = ko.pureComputed(() =>
            this.value() !== this.originalData.value
        );
    }
    public toJs() {
        return {
            id: this.id,
            value: this.value(),
        };
    }
    public load(data: views.AdjectiveDto) {
        this.id = data.id;
        this.value(data.value);
    }
}

export class NounDto {
    originalData: views.NounDto;
    changed: KnockoutComputed<boolean>;
    id?: string;

    value = ko.observable<string>();

    constructor(data: views.NounDto) {
        this.load(data);
        this.originalData = data;
        this.changed = ko.pureComputed(() =>
            this.value() !== this.originalData.value
        );
    }
    public toJs() {
        return {
            id: this.id,
            value: this.value(),
        };
    }
    public load(data: views.NounDto) {
        this.id = data.id;
        this.value(data.value);
    }
}

export class LoginView {
    originalData: views.Login;
    changed: KnockoutComputed<boolean>;
    email = validation.validableObservable<string>().addValidator(validation.isRequired).addValidator(validation.isEmail);

    password = validation.validableObservable<string>().addValidator(validation.isRequired);

    rememberMe = validation.validableObservable<boolean>().addValidator(validation.isRequired);

    constructor(data: views.Login) {
        this.load(data);
        this.originalData = data;
        this.changed = ko.pureComputed(() =>
            this.email() !== this.originalData.email
            || this.password() !== this.originalData.password
            || this.rememberMe() !== this.originalData.rememberMe
        );
    }
    public toJs() {
        return {
            email: this.email(),
            password: this.password(),
            rememberMe: this.rememberMe(),
        };
    }
    public load(data: views.Login) {
        this.email(data.email);
        this.password(data.password);
        this.rememberMe(data.rememberMe);
    }

    public isValid = ko.computed(() => !loading() && !this.email.validating() && !this.email.errorMessage() && !this.password.validating() && !this.password.errorMessage() && !this.rememberMe.validating() && !this.rememberMe.errorMessage());
}

export class VerifyCodeView {
    originalData: views.VerifyCode;
    changed: KnockoutComputed<boolean>;
    provider = validation.validableObservable<string>().addValidator(validation.isRequired);

    code = validation.validableObservable<string>().addValidator(validation.isRequired);

    rememberBrowser = validation.validableObservable<boolean>().addValidator(validation.isRequired);

    rememberMe = validation.validableObservable<boolean>().addValidator(validation.isRequired);

    constructor(data: views.VerifyCode) {
        this.load(data);
        this.originalData = data;
        this.changed = ko.pureComputed(() =>
            this.provider() !== this.originalData.provider
            || this.code() !== this.originalData.code
            || this.rememberBrowser() !== this.originalData.rememberBrowser
            || this.rememberMe() !== this.originalData.rememberMe
        );
    }
    public toJs() {
        return {
            provider: this.provider(),
            code: this.code(),
            rememberBrowser: this.rememberBrowser(),
            rememberMe: this.rememberMe(),
        };
    }
    public load(data: views.VerifyCode) {
        this.provider(data.provider);
        this.code(data.code);
        this.rememberBrowser(data.rememberBrowser);
        this.rememberMe(data.rememberMe);
    }

    public isValid = ko.computed(() => !loading() && !this.provider.validating() && !this.provider.errorMessage() && !this.code.validating() && !this.code.errorMessage() && !this.rememberBrowser.validating() && !this.rememberBrowser.errorMessage() && !this.rememberMe.validating() && !this.rememberMe.errorMessage());
}

export class RegisterView {
    originalData: views.Register;
    changed: KnockoutComputed<boolean>;
    email = validation.validableObservable<string>().addValidator(validation.isRequired).addValidator(validation.isEmail);

    password = validation.validableObservable<string>().addValidator(validation.isRequired).addValidator(validation.hasMinLength(4)).addValidator(validation.hasMaxLength(100));

    confirmPassword = validation.validableObservable<string>().addValidator(validation.areSame(this.password));

    constructor(data: views.Register) {
        this.load(data);
        this.originalData = data;
        this.changed = ko.pureComputed(() =>
            this.email() !== this.originalData.email
            || this.password() !== this.originalData.password
            || this.confirmPassword() !== this.originalData.confirmPassword
        );
    }
    public toJs() {
        return {
            email: this.email(),
            password: this.password(),
            confirmPassword: this.confirmPassword(),
        };
    }
    public load(data: views.Register) {
        this.email(data.email);
        this.password(data.password);
        this.confirmPassword(data.confirmPassword);
    }

    public isValid = ko.computed(() => !loading() && !this.email.validating() && !this.email.errorMessage() && !this.password.validating() && !this.password.errorMessage() && !this.confirmPassword.validating() && !this.confirmPassword.errorMessage());
}

export class ForgotPasswordView {
    originalData: views.ForgotPassword;
    changed: KnockoutComputed<boolean>;
    email = validation.validableObservable<string>().addValidator(validation.isRequired).addValidator(validation.isEmail);

    constructor(data: views.ForgotPassword) {
        this.load(data);
        this.originalData = data;
        this.changed = ko.pureComputed(() =>
            this.email() !== this.originalData.email
        );
    }
    public toJs() {
        return {
            email: this.email(),
        };
    }
    public load(data: views.ForgotPassword) {
        this.email(data.email);
    }

    public isValid = ko.computed(() => !loading() && !this.email.validating() && !this.email.errorMessage());
}

export class ResetPasswordView {
    originalData: views.ResetPassword;
    changed: KnockoutComputed<boolean>;
    email = ko.observable<string>();

    userId = ko.observable<string>();

    password = validation.validableObservable<string>().addValidator(validation.isRequired).addValidator(validation.hasMinLength(6)).addValidator(validation.hasMaxLength(100));

    confirmPassword = validation.validableObservable<string>().addValidator(validation.areSame(this.password));

    code = ko.observable<string>();

    constructor(data: views.ResetPassword) {
        this.load(data);
        this.originalData = data;
        this.changed = ko.pureComputed(() =>
            this.email() !== this.originalData.email
            || this.userId() !== this.originalData.userId
            || this.password() !== this.originalData.password
            || this.confirmPassword() !== this.originalData.confirmPassword
            || this.code() !== this.originalData.code
        );
    }
    public toJs() {
        return {
            email: this.email(),
            userId: this.userId(),
            password: this.password(),
            confirmPassword: this.confirmPassword(),
            code: this.code(),
        };
    }
    public load(data: views.ResetPassword) {
        this.email(data.email);
        this.userId(data.userId);
        this.password(data.password);
        this.confirmPassword(data.confirmPassword);
        this.code(data.code);
    }

    public isValid = ko.computed(() => !loading() && !this.password.validating() && !this.password.errorMessage() && !this.confirmPassword.validating() && !this.confirmPassword.errorMessage());
}

export class ChangePasswordView {
    originalData: views.ChangePassword;
    changed: KnockoutComputed<boolean>;
    oldPassword = validation.validableObservable<string>().addValidator(validation.isRequired);

    newPassword = validation.validableObservable<string>().addValidator(validation.isRequired);

    confirmPassword = validation.validableObservable<string>().addValidator(validation.isRequired).addValidator(validation.areSame(this.newPassword));

    constructor(data: views.ChangePassword) {
        this.load(data);
        this.originalData = data;
        this.changed = ko.pureComputed(() =>
            this.oldPassword() !== this.originalData.oldPassword
            || this.newPassword() !== this.originalData.newPassword
            || this.confirmPassword() !== this.originalData.confirmPassword
        );
    }
    public toJs() {
        return {
            oldPassword: this.oldPassword(),
            newPassword: this.newPassword(),
            confirmPassword: this.confirmPassword(),
        };
    }
    public load(data: views.ChangePassword) {
        this.oldPassword(data.oldPassword);
        this.newPassword(data.newPassword);
        this.confirmPassword(data.confirmPassword);
    }

    public isValid = ko.computed(() => !loading() && !this.oldPassword.validating() && !this.oldPassword.errorMessage() && !this.newPassword.validating() && !this.newPassword.errorMessage() && !this.confirmPassword.validating() && !this.confirmPassword.errorMessage());
}

export class SetPasswordView {
    originalData: views.SetPassword;
    changed: KnockoutComputed<boolean>;
    newPassword = validation.validableObservable<string>().addValidator(validation.isRequired).addValidator(validation.hasMinLength(6)).addValidator(validation.hasMaxLength(100));

    confirmPassword = validation.validableObservable<string>().addValidator(validation.areSame(this.newPassword));

    constructor(data: views.SetPassword) {
        this.load(data);
        this.originalData = data;
        this.changed = ko.pureComputed(() =>
            this.newPassword() !== this.originalData.newPassword
            || this.confirmPassword() !== this.originalData.confirmPassword
        );
    }
    public toJs() {
        return {
            newPassword: this.newPassword(),
            confirmPassword: this.confirmPassword(),
        };
    }
    public load(data: views.SetPassword) {
        this.newPassword(data.newPassword);
        this.confirmPassword(data.confirmPassword);
    }

    public isValid = ko.computed(() => !loading() && !this.newPassword.validating() && !this.newPassword.errorMessage() && !this.confirmPassword.validating() && !this.confirmPassword.errorMessage());
}

export class SetEmailView {
    originalData: views.SetEmail;
    changed: KnockoutComputed<boolean>;
    email = validation.validableObservable<string>().addValidator(validation.isRequired).addValidator(validation.isEmail);

    constructor(data: views.SetEmail) {
        this.load(data);
        this.originalData = data;
        this.changed = ko.pureComputed(() =>
            this.email() !== this.originalData.email
        );
    }
    public toJs() {
        return {
            email: this.email(),
        };
    }
    public load(data: views.SetEmail) {
        this.email(data.email);
    }

    public isValid = ko.computed(() => !loading() && !this.email.validating() && !this.email.errorMessage());
}

export class UserSearchFilter {
    originalData: views.UserSearchFilter;
    changed: KnockoutComputed<boolean>;
    name = ko.observable<string>();

    constructor(data: views.UserSearchFilter) {
        this.load(data);
        this.originalData = data;
        this.changed = ko.pureComputed(() =>
            this.name() !== this.originalData.name
        );
    }
    public toJs() {
        return {
            name: this.name(),
        };
    }
    public load(data: views.UserSearchFilter) {
        this.name(data.name);
    }
}
