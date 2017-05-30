import * as ko from 'knockout';
import * as services from './../../services/ko/services';
import { AdjectiveListDto, AdjectiveDto } from './../../services/ko/views';

export class AdjectiveDeleteViewModel {
    adjectiveList = ko.observable<AdjectiveListDto>();
    constructor()
    {
        services.adjective.getAll({})
                        .then(t => {
                            this.adjectiveList(t)
                        });
    }

    delete = (adjective: AdjectiveDto) =>
    {
        services.adjective.delete({id: adjective.id})
                            .then(t => {
                                //this.adjectiveList().adjectives.remove(adjective)
                                
                            })
    }
}