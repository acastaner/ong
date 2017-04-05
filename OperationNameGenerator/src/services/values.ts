/* This is a generated file. Do not modify or all the changes will be lost. */
import * as helpers from "folke-ko-service-helpers";

export class ValuesController {

    delete(params: {id: number}) {
        return helpers.fetchVoid(`api/[controller]/${params.id}`, "DELETE", null);
    }

    get(params: {id: number}) {
        return helpers.fetchSingle<string>(`api/[controller]/${params.id}`, "GET", null);
    }

    put(params: {id: number, value: string}) {
        return helpers.fetchVoid(`api/[controller]/${params.id}`, "PUT", JSON.stringify(params.value));
    }
}

