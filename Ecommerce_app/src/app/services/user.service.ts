import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private as: AngularFirestore) { }

 addNewUser(id,name,email,password)
 {
   return this.as.doc('user/' + id).set({
     name,
     email,
     password,
   });
 }
}
