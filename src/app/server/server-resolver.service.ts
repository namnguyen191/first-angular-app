import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

interface Server {
  id: number;
  name: string;
  status: 'Online' | 'Offline';
}

@Injectable({
  providedIn: 'root',
})
export class ServerResolverService
  implements Resolve<Server> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    return {id: 3123123, name: 'New Serve', status: 'Online'}
  }
}
