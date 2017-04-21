/* This is a generated file. Do not modify or all the changes will be lost. */
import * as helpers from "folke-ko-service-helpers";
import * as views from "./views";

export class DataController {

    getAll(params: {}) {
        return helpers.fetchSingle<views.DataDto>("api/data/getall", "GET", null);
    }
}

