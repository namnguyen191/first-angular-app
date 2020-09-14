import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-router-demo',
  templateUrl: './router-demo.component.html',
  styleUrls: ['./router-demo.component.css'],
})
export class RouterDemoComponent implements OnInit, OnDestroy {
  userId: number = 0;
  paramsSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.clear();
    console.log(this.route);
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.userId = this.route.snapshot.params['id'];

    // For future same component reloading
    this.paramsSubscription = this.route.params.subscribe(() => {
      (params: Params) => {
        this.userId = params['id'];
      };
    });
  }

  // You don't have to do this because Angular does it for you
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.paramsSubscription.unsubscribe();
  }

  onLoadServers() {
    this.router.navigate(['/'], {
      relativeTo: this.route,
      queryParams: { allowEdit: '1' },
      fragment: 'loading',
      queryParamsHandling: 'preserve'
    });
  }
}
