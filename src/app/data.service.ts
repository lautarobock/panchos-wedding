import { Injectable } from "@angular/core";
import { getJSON } from "tns-core-modules/http";

@Injectable({providedIn: "root"})
export class DataService {

    config() {
        // tslint:disable-next-line:max-line-length
        return getJSON("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/panchoswedding-jwaoi/service/config/incoming_webhook/config");
    }
}
