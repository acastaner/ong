/* This is a generated file. Do not modify or all the changes will be lost. */
import * as helpers from "folke-ko-service-helpers";
import * as views from "./views";

export class AdjectiveController {

    get(params: {id: string}) {
        return helpers.fetchSingle<views.AdjectiveDto>(`api/Adjective/${params.id}`, "GET", null);
    }
}

