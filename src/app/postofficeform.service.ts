import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { postoffice } from './models/postoffice';


@Injectable({
  providedIn: 'root'
})
export class PostofficeformService {

   constructor(private afDb: AngularFireDatabase) { }

   create(product) {
    // returning a Promise incase You wanted to do something in future
    return this.afDb.list('/products').push(product);
  }

  getAll() {
    return this.afDb.list('/products');
  }

  // get one product for edit flow :)
  getPostoffice(prodId) {
    return this.afDb.object('/products/' + prodId);
  }

  update(prodId, product) {

    return this.afDb.object('/products/' + prodId).update(product);

  }


  delete (prodId) {

    return this.afDb.object('/products/' + prodId).remove();

  }
}
