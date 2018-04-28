import {Injectable, Inject, EventEmitter} from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

    constructor(private db: AngularFireDatabase) {

    }

    fetchStatus() {
        return this.db.object('onOffStatus');
    }

}