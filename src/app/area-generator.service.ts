import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList,AngularFireObject } from 'angularfire2/database'



@Injectable({
  providedIn: 'root'
})
export class AreaGeneratorService {

  constructor(private db: AngularFireDatabase) {
   }

  getProvince(){
    return this.db.list('area');
  }
}
