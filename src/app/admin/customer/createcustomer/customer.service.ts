import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer, CustomerResponse } from './customer.model';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import {environment} from 'src/environments/environment';
import { AuthService } from 'src/app/core/service/auth.service';
import { Role } from 'src/app/core/models/role';
@Injectable()
export class CustomerService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = 'assets/data/customer.json';
  isTblLoading = true;
  url!:string;
  dataChange: BehaviorSubject<Customer[]> = new BehaviorSubject<Customer[]>([]);
  // Temporarily stores data from dialogs
  dialogData!: Customer;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Customer[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllCustomers(): void {
    const currentUserString = localStorage.getItem("currentUser");
    if (currentUserString) {
      const currentUser = JSON.parse(currentUserString);
      const userId = currentUser.id;
      const userRole = currentUser.role;
    if(userRole === Role.Admin){
      this.url = "/masters/customerUser/"; 
    }
    else{
      this.url = "/masters/customerUserLogin/"+userId;
    }
  }
    this.subs.sink = this.httpClient.get<CustomerResponse>(environment.apiUrl+this.url).subscribe({
      next: (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data.data);
      },
      error: (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
      },
    });
  }

  addCustomer(customer: Customer): void {
    this.dialogData = customer;
    const formData: FormData = new FormData();
    const jsonCustomer = JSON.stringify(customer);
    // formData.append('photo', photo);
    formData.append('data', jsonCustomer);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    this.httpClient.post(environment.apiUrl+"/masters/customerAdd/", formData,{headers})
      .subscribe({
        next: (data) => {
         this.dialogData = customer;
        //this.dialogData = formData.get('data');
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        },
      });
  }


  updateCustomer(customer: Customer): void {
    this.dialogData = customer;

    // this.httpClient.put(this.API_URL + customer.id, customer)
    //     .subscribe({
    //       next: (data) => {
    //         this.dialogData = customer;
    //       },
    //       error: (error: HttpErrorResponse) => {
    //          // error code here
    //       },
    //     });
  }
  deleteCustomer(id: number): void {
    console.log(id);

    // this.httpClient.delete(this.API_URL + id)
    //     .subscribe({
    //       next: (data) => {
    //         console.log(id);
    //       },
    //       error: (error: HttpErrorResponse) => {
    //          // error code here
    //       },
    //     });
  }
}
