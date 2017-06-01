/* This is a generated file. Do not modify or all the changes will be lost. */
import * as helpers from "folke-ko-service-helpers";
import * as views from "../views";
import * as koViews from "./views";

export class DataController {

    getAll(params: {}) {
        return helpers.fetchSingleT<views.DataDto, koViews.DataDto>("api/data/getall", "GET", view => new koViews.DataDto(view), null);
    }

    import(params: {data: koViews.DataDto}) {
        return helpers.fetchSingle<string>("api/data/import", "POST", JSON.stringify(params.data.toJs()));
    }
}

