import * as ko from 'knockout';
import * as services from './../../services/ko/services';

export class AdjectiveAddViewModel {
    adj = new services.AdjectiveDto({value: null, id: '00000000-0000-0000-0000-000000000000'});
    adj2 = ko.observable(new services.AdjectiveDto({value: null, id: '00000000-0000-0000-0000-000000000000'}));
    constructor() {
        
    }
    save = () =>
    {
        services.adjective.post({adjDto: this.adj2()})
                    .then(t => this.adj2().value(""));
    }
}