/* This is a generated file. Do not modify or all the changes will be lost. */
import * as helpers from "folke-ko-service-helpers";
import * as views from "../views";
import * as koViews from "./views";

export class AdjectiveController {

    delete(params: {id?: string}) {
        return helpers.fetchSingleT<views.AdjectiveDto, koViews.AdjectiveDto>("api/adjective/" + helpers.getQueryString({ id: params.id }), "DELETE", view => new koViews.AdjectiveDto(view), null);
    }

    get(params: {id?: string}) {
        return helpers.fetchSingleT<views.AdjectiveReadDto, koViews.AdjectiveReadDto>("api/adjective/" + helpers.getQueryString({ id: params.id }), "GET", view => new koViews.AdjectiveReadDto(view), null);
    }

    getAll(params: {}) {
        return helpers.fetchSingle<views.AdjectiveListDto>("api/adjective/getall", "GET", null);
    }

    post(params: {adjDto: koViews.AdjectiveDto}) {
        return helpers.fetchSingleT<views.AdjectiveDto, koViews.AdjectiveDto>("api/adjective/", "POST", view => new koViews.AdjectiveDto(view), JSON.stringify(params.adjDto.toJs()));
    }
}

