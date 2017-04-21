/* This is a generated file. Do not modify or all the changes will be lost. */
import * as helpers from "folke-ko-service-helpers";
import * as views from "./views";

export class NounController {

    get(params: {id: string}) {
        return helpers.fetchSingle<views.NounDto>(`api/noun/${params.id}`, "GET", null);
    }

    post(params: {nounDto: views.NounDto}) {
        return helpers.fetchSingle<views.NounDto>("api/noun/", "POST", JSON.stringify(params.nounDto));
    }
}

