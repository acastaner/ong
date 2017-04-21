import * as ko from 'knockout';
import * as services from './../services/ko/services';

export class HomeViewModel {
    opname = ko.observable<services.OpNameDto>();
    constructor() {
        services.opName.get({})
                        .then(t => {
                                    this.opname(t);
                                    }
        );
    }

    update = () =>
    {
        services.opName.get({})
                        .then(t => {
                                    this.opname(t);
                                    }
        );
    }
}