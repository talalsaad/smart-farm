import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { FirebaseTSFirestore} from "firebasets/firebasetsFirestore/firebaseTSFirestore";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, getDocs, increment ,updateDoc ,doc , deleteDoc, query, loadBundle} from "firebase/firestore";
import { map } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { async } from '@firebase/util';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent  {
private firestore: FirebaseTSFirestore | undefined; 
userdata:any;
userinfo:any;
status:any;
status_new:any;
farmdata:any;
idholde:any;
  constructor(public authService: AuthService ,public db: AngularFirestore,public dbreal:AngularFireDatabase) {

  this.userinfo=JSON.parse(localStorage.getItem('user')!)
  
db.collection('/users').doc(`/${this.userinfo.uid}`).valueChanges().subscribe(x=>{
  this.userdata=x
  
});



///delet after seting the arduino
db.collection(`/users/${this.userinfo.uid}/deviceList`).snapshotChanges().subscribe(x=>{
this.status=x



 
});


}

///adding device
 adding(a:any){
  let test;
   this.dbreal.object(`/${a.value}`).valueChanges().subscribe(x=>{
    let textfiled:any =document.getElementById('device_null');
      if(x!=null){
         this.db.collection(`/users/${this.userinfo.uid}/deviceList`).doc(`/${a.value}`).set({id:a.value});
         textfiled.textContent='';
      }
      else
      {
        console.log('there is no device with that id');
        textfiled.textContent='there is no device with that id';
        
      }
      
  });
   
  
}
//delet device
deleto(a:any){
  this.db.collection(`/users/${this.userinfo.uid}/deviceList`).doc(`/${a}`).delete();
  this.farmdata=null;

}


  setStyle() {
  
      return{'height': `${ this.farmdata?.data().waterLevel}%`,'color':'blue'}
 
  }

  setStyleColor(a:any){
    if(a>=80){
      return{'color':'green'}
    }
    if (a<80 &&this.farmdata?.data().waterLevel>=50) {
      return{'color':'yellow'}
      
    } else {
      return{'color':'red'}

    }
  }
  
  fanSet(a:any){
    
    
if(a.fan==0)
{
  this.dbreal.object(`/${this.idholde}`).update({fan:1});
}
else{
  this.dbreal.object(`/${this.idholde}`).update({fan:0});
}





    
  }
/////////////////

async setFarmData(a:any){
  //this.farmdata=a.payload.doc;
  this.idholde=a.payload.doc.data().id;
  /////new test
this.dbreal.object(`/${a.payload.doc.data().id}`).valueChanges().subscribe(x=>{
  this.farmdata=x
  
  
   
  });
  
}

imagChange(){

  let img = prompt("Please enter your img url:");
  if (img == null || img == "") {
    return
  } else {
    this.db.collection('users').doc(`/${this.userinfo?.uid}`).update({photoURL:img})
    
  }
  

}
///////////////////
}



/*

///delet after seting the arduino
db.collection(`/users/${this.userinfo.uid}/deviceList`).snapshotChanges().pipe(map(action=>action.map(x=>{
this.status=x

console.log('this status:',this.status);
console.log('this status:',x);



  
})
));
*/