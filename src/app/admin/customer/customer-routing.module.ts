import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatecustomerComponent } from './createcustomer/createcustomer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AboutCustomerComponent } from './about-customer/about-customer.component';
const routes: Routes = [
  {
    path: 'createcustomer',
    component: CreatecustomerComponent
  },
  {
    path: 'about-customer/:id',
    component: AboutCustomerComponent
  },
  {
    path: 'add-customer',
    component: AddCustomerComponent
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}

