import {Component} from '@angular/core';

interface Alert {
  alertType: string;
  type: string;
  message: string;
}

const ALERT =[
  {
    alertType: 'ALERT_SUCCESS',
    type: 'success',
    message: 'This is an success alert'
  },
  {
    alertType: 'ALERT_DANGER',
    type: 'danger',
    message: 'This is an danger alert'
  } 
];

// finds the alert type and return the alert type
const getAlert = (alertType:string) => ALERT.find( alert => alert.alertType === alertType);

@Component({selector: 'ngbd-alert-basic',
 templateUrl: './alert-basic.html'})

export class NgbdAlertBasic {

  alertMessage: any;
  messageType: string;

  cloneObject(obj) {
    var clone = {};
    for(var i in obj) {
        if(typeof(obj[i])=="object" && obj[i] != null)
            clone[i] = this.cloneObject(obj[i]);
        else
            clone[i] = obj[i];
    }
    return clone;
}

addMessage(){
  this.alertMessage = this.cloneObject(getAlert("ALERT_SUCCESS"));
  console.log(this.alertMessage);
}

  

}
