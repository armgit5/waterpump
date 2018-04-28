import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs/Rx';
import { HomeService } from './home-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, OnDestroy {

  onOff: boolean = false;
  $statusSub: Subscription;

  constructor(public navCtrl: NavController,
              private homeService: HomeService,
              private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.$statusSub = this.homeService.fetchStatus()
    .subscribe(
      status => {
        console.log(status);
        console.log(status.onOff);
        if (status.onOff) {
          this.onOff = true;
        } else {
          this.onOff = false;
        }
      }
    );
    console.log("test");
  }

  onToggle() {
    if (this.onOff) {
      console.log("turn on");
      this.db.object('/onOff').set({onOff:true});
    } else {
      console.log("turn off");
      this.db.object('/onOff').set({onOff:false});
    }
  }

  ngOnDestroy() {
    this.$statusSub.unsubscribe();
  }



}
