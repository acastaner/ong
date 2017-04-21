import * as ko from 'knockout';
import * as services from './../services/ko/services';

export class HomeViewModel {
    opname = ko.observable<services.OpNameDto>();
    enableButton = ko.observable(false);
    constructor() {
        services.opName.get({})
                        .then(t => { this.opname(t); 
                                     this.enableButton(true); }
        );
        
    }

    update = () =>
    {
        this.enableButton(false);
        services.opName.get({})
                        .then(t => { this.opname(t);
                                     this.enableButton(true); }
        );
    }
}