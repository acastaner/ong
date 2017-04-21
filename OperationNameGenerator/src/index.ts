import { register } from 'folke-default-application';
import * as services from './services/services';
import * as ko from 'knockout';
import * as defaultApp from 'folke-default-application';

import * as identity from 'folke-identity';

import { HomeViewModel } from './components/home';
import { AdminViewModel } from './components/admin/admin';
import { AdjectivesViewModel } from './components/admin/adjectives';
import { AdjectiveAddViewModel } from './components/admin/adjective-add';
import { NounsViewModel } from './components/admin/nouns';
import { NounAddViewModel } from './components/admin/noun-add';

declare function require(name: string): string;
require('./index.less');

const { folke, defaultMenu } = defaultApp.register(services.services)

function addLoggedRoute(pattern: string, view: string) {
    folke.addRoute(pattern, parameters => {
        identity.authentication.getLogged().then(logged => {
            if (logged) {
                return folke.goToView(view, parameters);
            }
            else {
                location.assign('#identity-login');
                return undefined;
            }
        });
    });
}

ko.components.register('home', { viewModel: HomeViewModel, template: require('./components/home.html') });
ko.components.register('admin', { viewModel: AdminViewModel, template: require('./components/admin/admin.html') });
ko.components.register('adjectives', { viewModel: AdjectivesViewModel, template: require('./components/admin/adjectives.html') });
ko.components.register('adjective-add', { viewModel: AdjectiveAddViewModel, template: require('./components/admin/adjective-add.html') });
ko.components.register('nouns', { viewModel: NounsViewModel, template: require('./components/admin/nouns.html') });
ko.components.register('noun-add', { viewModel: NounAddViewModel, template: require('./components/admin/noun-add.html') });

folke.addRoute('', 'home');
folke.addRoute('home', 'home');
folke.addRoute('logout', parameters => identity.authentication.logout().then(() => location.assign('#home')));
addLoggedRoute('admin', 'admin');
addLoggedRoute('admin/adjectives', 'adjectives');
addLoggedRoute('admin/nouns', 'nouns');


folke.start();