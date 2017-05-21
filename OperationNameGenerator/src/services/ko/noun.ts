/* This is a generated file. Do not modify or all the changes will be lost. */
import * as helpers from "folke-ko-service-helpers";
import * as views from "../views";
import * as koViews from "./views";

export class NounController {

    get(params: {id: string}) {
        return helpers.fetchSingleT<views.NounReadDto, koViews.NounReadDto>(`api/noun/${params.id}`, "GET", view => new koViews.NounReadDto(view), null);
    }

    post(params: {nounDto: koViews.NounDto}) {
        return helpers.fetchSingleT<views.NounDto, koViews.NounDto>("api/noun/", "POST", view => new koViews.NounDto(view), JSON.stringify(params.nounDto.toJs()));
    }
}

