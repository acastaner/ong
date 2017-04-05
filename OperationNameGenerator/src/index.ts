import * as services from './services/services';
import * as ko from 'knockout';
import * as defaultApp from 'folke-default-application';
import { IdentityResetViewModel, IdentityLoginViewModel, IdentityRegisterViewModel } from 'folke-identity';

declare function require(name: string): string;
require('./site.less');

const { folke, defaultMenu } = defaultApp.register(services.services)
folke.start();