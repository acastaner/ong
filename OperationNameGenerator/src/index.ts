import { register } from 'folke-default-application';
import * as services from './services/services';
import * as ko from 'knockout';
import * as defaultApp from 'folke-default-application';

//import { IdentityResetViewModel, IdentityLoginViewModel, IdentityRegisterViewModel } from 'folke-identity';
import * as identity from 'folke-identity';

import { HomeViewModel } from './components/home';
import { AboutViewModel } from './components/about';

declare function require(name: string): string;
require('./site.less');

const { folke, defaultMenu } = defaultApp.register(services.services)

ko.components.register('home', { viewModel: HomeViewModel, template: require('./components/home.html') });
ko.components.register('about', { viewModel: HomeViewModel, template: require('./components/about.html') });

folke.addRoute('', 'home');
folke.addRoute('about', 'about');

folke.start();