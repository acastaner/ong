import * as ko from 'knockout';
import * as services from './../../services/ko/services';

export class AdjectiveAddViewModel {
    adj = new services.AdjectiveDto({value: null, id: '00000000-0000-0000-0000-000000000000'});
    constructor() {
        
    }
    save = () =>
    {
        services.adjective.post({adjDto: this.adj})
                    .then(t => window.location.hash = "admin/adjectives");
    }
}