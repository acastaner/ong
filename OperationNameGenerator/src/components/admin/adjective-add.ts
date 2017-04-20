import * as ko from 'knockout';
import * as services from './../../services/ko/services';

export class AdjectiveAddViewModel {
    adj = ko.observable<services.AdjectiveDto>();
    constructor() {
        
    }
    save = () =>
    {
        //services.adjective.
    }
}