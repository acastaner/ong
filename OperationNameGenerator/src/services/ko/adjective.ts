/* This is a generated file. Do not modify or all the changes will be lost. */
import * as helpers from "folke-ko-service-helpers";
import * as views from "../views";
import * as koViews from "./views";

export class AdjectiveController {

    get(params: {id?: string}) {
        return helpers.fetchSingleT<views.AdjectiveReadDto, koViews.AdjectiveReadDto>("api/adjective/" + helpers.getQueryString({ id: params.id }), "GET", view => new koViews.AdjectiveReadDto(view), null);
    }

    post(params: {adjDto: koViews.AdjectiveDto}) {
        return helpers.fetchSingleT<views.AdjectiveDto, koViews.AdjectiveDto>("api/adjective/", "POST", view => new koViews.AdjectiveDto(view), JSON.stringify(params.adjDto.toJs()));
    }
}

