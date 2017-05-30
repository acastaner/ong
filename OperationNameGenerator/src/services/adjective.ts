/* This is a generated file. Do not modify or all the changes will be lost. */
import * as helpers from "folke-ko-service-helpers";
import * as views from "./views";

export class AdjectiveController {

    delete(params: {id?: string}) {
        return helpers.fetchSingle<views.AdjectiveDto>("api/adjective/" + helpers.getQueryString({ id: params.id }), "DELETE", null);
    }

    get(params: {id?: string}) {
        return helpers.fetchSingle<views.AdjectiveReadDto>("api/adjective/" + helpers.getQueryString({ id: params.id }), "GET", null);
    }

    getAll(params: {}) {
        return helpers.fetchSingle<views.AdjectiveListDto>("api/adjective/getall", "GET", null);
    }

    post(params: {adjDto: views.AdjectiveDto}) {
        return helpers.fetchSingle<views.AdjectiveDto>("api/adjective/", "POST", JSON.stringify(params.adjDto));
    }
}

