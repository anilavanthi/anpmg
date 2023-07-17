import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BehaviorSubject,Observable, firstValueFrom } from 'rxjs';
import { CustomerService } from '../createcustomer/customer.service';
import { Customer,CustomerResponse,User,UserUpdate } from '../createcustomer/customer.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-about-customer',
  templateUrl: './about-customer.component.html',
  styleUrls: ['./about-customer.component.scss'],
  providers :[CustomerService]

})
export class AboutCustomerComponent {

  breadscrums = [
    {
      title: 'Profile',
      items: ['Customer'],
      active: 'Profile',
    },
  ];
  public customer$: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);
  public customer!: Customer |null | undefined ;
  public data:Customer[] = [];

  constructor(
    private route: ActivatedRoute,
    private customerService : CustomerService,
  ) {
    // constructor;
  }

  ngOnInit() {
    const customerId = this.route.snapshot.paramMap.get('id');
    const id: number = Number(customerId);
    this.customerService.getCustomerData(id).subscribe((response)=>{
      this.customer = response.data;
    })
    
  }

}
