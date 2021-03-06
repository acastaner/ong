import * as ko from 'knockout';
import * as services from './../../services/ko/services';

export class NounAddViewModel {
    noun = ko.observable(new services.NounDto({value: null, id: '00000000-0000-0000-0000-000000000000'}));
    constructor() {
        
    }
    save = () =>
    {
        services.noun.post({nounDto: this.noun()})
                    .then(t => this.noun().value(""));
    }
}