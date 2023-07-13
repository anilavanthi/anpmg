import { Component,Input, OnInit } from '@angular/core';
import { Customer,CustomerResponse,User,UserUpdate,SingleCustomerResponse } from '../createcustomer/customer.model';
import { StateService } from '../../settings/state/state.service';
import { DistrictService } from '../../settings/district/district.service';
import { CountryService } from '../../settings/country/country.service';
import { CityService } from '../../settings/city/city.service';
import { BranchService } from '../../settings/branch/branch.service';
import { ReligionService } from '../../settings/religion/religion.service';
import { CasteService } from '../../settings/caste/caste.service';
import { EducationdetailsService } from '../../settings/educationdetails/educationdetails.service';
import { SourceService } from '../../settings/source/source.service';
import {BehaviorSubject,Observable } from 'rxjs';
import { Country, CountryResponse } from '../../settings/country/country.model';
import { State,StateResponse } from '../../settings/state/state.model';
import { District, DistrictResponse } from '../../settings/district/district.model';
import { City, CityResponse } from '../../settings/city/city.model';
import { Branch,BranchResponse } from '../../settings/branch/branch.model';
import { Religion,ReligionResponse } from '../../settings/religion/religion.model';
import { Caste,CasteResponse } from '../../settings/caste/caste.model';
import { Educationdetails,EducationdetailsResponse } from '../../settings/educationdetails/educationdetails.model';
import { Source,SourceResponse } from '../../settings/source/source.model';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { Role } from 'src/app/core/models/role';
import { Router } from '@angular/router';
import { CustomerService } from '../createcustomer/customer.service';
import { AuthService } from 'src/app/core/service/auth.service';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss'],
  providers: [ StateService,CountryService,DistrictService,CityService,BranchService,ReligionService,
    CasteService,EducationdetailsService,SourceService]
})
export class AddCustomerComponent {
  //custForm: UntypedFormGroup;
  isDataLoaded = false;
  isLinear = false;
  photofile!:File;
  idfile!:File;
  file!:File;
  chide = true;
  hide = true;
  proForm!: UntypedFormGroup;
  HFormGroup1: UntypedFormGroup;
  HFormGroup2: UntypedFormGroup;
  HFormGroup3: UntypedFormGroup;
  HFormGroup4: UntypedFormGroup;
  HFormGroup5: UntypedFormGroup;
  HFormGroup6: UntypedFormGroup;
  HFormGroup8: UntypedFormGroup;
  public customer!: Customer | null | undefined;
  public countries$: BehaviorSubject<Country[]> = new BehaviorSubject<Country[]>([]);
  public states$: BehaviorSubject<State[]> = new BehaviorSubject<State[]>([]);
  public districts$: BehaviorSubject<District[]> = new BehaviorSubject<District[]>([]);
  public cities$: BehaviorSubject<City[]> = new BehaviorSubject<City[]>([]);
  public branches$: BehaviorSubject<Branch[]> = new BehaviorSubject<Branch[]>([]);
  public religions$: BehaviorSubject<Religion[]> = new BehaviorSubject<Religion[]>([]);
  public castes$: BehaviorSubject<Caste[]> = new BehaviorSubject<Caste[]>([]);
  public educations$: BehaviorSubject<Educationdetails[]> = new BehaviorSubject<Educationdetails[]>([]);
  public sources$: BehaviorSubject<Source[]> = new BehaviorSubject<Source[]>([]);
  idValue!:number;
  user!:User;
  customer1!:Customer;
  userNew!:UserUpdate;
  customerNew!:Customer;
  genders: string[] = ['Male', 'Female'];
  breadscrums = [
    {
      title: 'Add Customer',
      items: ['Customer'],
      active: 'Add Customer',
    },
  ];
  constructor(private fb: UntypedFormBuilder,
    private stateService: StateService,
    private countryService : CountryService,
    private districtService : DistrictService,
    private cityService : CityService,
    private branchService : BranchService,
    private religionService : ReligionService,
    private casteService : CasteService,
    private educationService : EducationdetailsService,
    private sourceService : SourceService,
    private snackBar: MatSnackBar,
    private customerService : CustomerService,
    private authService: AuthService,
    private router: Router
    ) {
    this.HFormGroup1 = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required,Validators.pattern('^[0-9]*$')]],
      email: ['',[Validators.required, Validators.email, Validators.minLength(5)],],
      dob: ['', [Validators.required]],
      maritalStatus: ['', Validators.required],
      applicationFor: ['', Validators.required],
      eating: [''],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      bgroup: [''],
      idProofType: [''],
      idProofNumber: [''],
      mtongue: [''],
      birthtime: [''],
      birthplace: [''],
      healthcondition: [''],
      complexion:[''],
      smoke: [''],
      drink: [''],
    });
    this.HFormGroup2 = this.fb.group({
     country: ['',Validators.required],
     state: ['', Validators.required],
     district: ['', Validators.required],
     city: ['', Validators.required], 
     address: [''],
     altmobile: [''],
     altemail: ['',[Validators.email]],
     timetocall: [''],
     hobbies: [''],
     lang: [''],
     source: [''],
    });
    this.HFormGroup3 = this.fb.group({
      religion: ['', Validators.required],
      caste: ['', Validators.required],
      ccaste: [''],
      gothram: [''],
      star: [''],
      raasi: [''],
      padam: [''],
      dosham: [''],
    });
    this.HFormGroup4 = this.fb.group({
      fstatus: [''],
      ftype: [''],
      fathername: [''],
      fatherreligion: [''],
      fathercaste: [''],
      fccaste: [''],
      fIsAlive: [''],
      mothername: [''],
      mothermname: [''],
      motherreligion: [''],
      mothercaste: [''],
      mccaste: [''],
      mIsAlive: [''],
      fperaddress: [''],
      fpreaddress: [''],
      nobrothers: [''],
      nosisters: [''],
    });
    this.HFormGroup5 = this.fb.group({
      education: ['', Validators.required],
      edudetail: [''],
      univ: [''],
      employedin : [''],
      property : ['']
    });
    this.HFormGroup6 = this.fb.group({
      age: ['', Validators.required],
      lheight: ['',Validators.required],
      lweight : ['',Validators.required],
      lfstatus:  ['',Validators.required],
      intercaste:  ['',Validators.required],
      ldosham:  ['',Validators.required],
      lpassport:  ['',Validators.required],
      leducation:  ['',Validators.required],
      lemployedin:  ['',Validators.required],
      lcomplexion:  ['',Validators.required],
      lsmoke:  ['',Validators.required],
      ldrink:  ['',Validators.required],
      leating:  ['',Validators.required],
    });
    this.HFormGroup8 = this.fb.group({
      aboutme: ['', [Validators.required]],
      referencename : [''],
      referencemobile : [''],
      referenceaddress : [''],
      referencerelation : [''],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
      // photo:[''],
      // idproof:[''],
    });

    this.proForm = this.fb.group({
      HFormGroup1: this.HFormGroup1,
      HFormGroup2: this.HFormGroup2,
      HFormGroup3: this.HFormGroup3,
      HFormGroup4: this.HFormGroup4,
      HFormGroup5: this.HFormGroup5,
      HFormGroup6: this.HFormGroup6,
      HFormGroup8: this.HFormGroup8,
    });

  }

  onInput(event: any) {
    // Get input value and remove non-numeric characters
    const inputValue = event.target.value.replace(/[^0-9]/g, '');
    // Update input value
    event.target.value = inputValue;
    // Update ngModel value
    // this.mobile = inputValue;
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.file = file;
    //this.staff.photo = file;
}

  showNotification(
    colorName: string,
    text: string,
    placementFrom: MatSnackBarVerticalPosition,
    placementAlign: MatSnackBarHorizontalPosition
  ) {
    this.snackBar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }

  ngOnInit() {
    this.idValue = this.authService.currentUserValue.id;
    this.countryService.getCountries();
    this.countries$ = this.countryService.countries$;
    this.branchService.getBranches();
    this.branches$=this.branchService.branches$;
    this.religionService.getReligions();
    this.religions$=this.religionService.religions$;
    this.casteService.getCastes();
    this.castes$=this.casteService.castes$;
    this.educationService.getEducations();
    this.educations$=this.educationService.educations$;
    this.sourceService.getSources();
    this.sources$ = this.sourceService.sources$;
   }

   public onCountryChange(e:any){
    this.stateService.onCountryChangeState(e);
    this.states$ = this.stateService.states$;
   }

   public onCountryStateChangeDistrict(e:any){
    this.districtService.onCountryStateChangeDistrict(e);
    this.districts$ = this.districtService.districts$;
   }

   public onCountryStateDistrictChangeCity(e:any){
    this.cityService.onCountryStateDistrictChangeCity(e);
    this.cities$ = this.cityService.cities$;
   }


  onSubmit() {
   // console.log('Form Value', this.custForm.value);

   if(this.HFormGroup8.value.password !== this.HFormGroup8.value.cpassword){
    this.showNotification(
      'snackbar-danger',
      'Password and ConfirmPassword Mismatch...!!!',
      'top',
      'center'
    );
    return;
  }

   const blankObject1 = {} as User;
     this.user = new User(blankObject1);
     this.user.first_name = this.HFormGroup1.getRawValue().first_name;
     this.user.last_name = this.HFormGroup1.getRawValue().last_name;
    this.user.email = this.HFormGroup1.getRawValue().email;
      this.user.phone = this.HFormGroup1.getRawValue().phone;
    this.user.username = this.HFormGroup1.getRawValue().email;
     this.user.address = this.HFormGroup2.getRawValue().address;
     this.user.country = this.HFormGroup2.getRawValue().country; 
     this.user.state = this.HFormGroup2.getRawValue().state; 
     this.user.district = this.HFormGroup2.getRawValue().district; 
     this.user.city = this.HFormGroup2.getRawValue().city; 
     this.user.password = this.HFormGroup8.getRawValue().password;
     this.user.is_customer=1

     const blankObject = {} as Customer;
     this.customerNew = new Customer(blankObject);
     this.customerNew.gender = this.HFormGroup1.getRawValue().gender; 
     this.customerNew.dob = this.HFormGroup1.getRawValue().dob;
     this.customerNew.maritalStatus = this.HFormGroup1.getRawValue().maritalStatus;
     this.customerNew.applicationFor = this.HFormGroup1.getRawValue().applicationFor;
     this.customerNew.eating = this.HFormGroup1.getRawValue().eating;
     this.customerNew.height = this.HFormGroup1.getRawValue().height;
     this.customerNew.weight = this.HFormGroup1.getRawValue().weight;
     this.customerNew.bgroup = this.HFormGroup1.getRawValue().bgroup;
     this.customerNew.idProofType = this.HFormGroup1.getRawValue().idProofType;
     this.customerNew.idProofNumber = this.HFormGroup1.getRawValue().idProofNumber;
     this.customerNew.mtongue = this.HFormGroup1.getRawValue().mtongue;
     this.customerNew.birthtime = this.HFormGroup1.getRawValue().birthtime;
     this.customerNew.birthplace = this.HFormGroup1.getRawValue().birthplace;
     this.customerNew.healthcondition = this.HFormGroup1.getRawValue().healthcondition;
     this.customerNew.complexion = this.HFormGroup1.getRawValue().complexion;
     this.customerNew.smoke = this.HFormGroup1.getRawValue().smoke;
     this.customerNew.drink = this.HFormGroup1.getRawValue().drink;
     
     this.customerNew.altmobile = this.HFormGroup2.getRawValue().altmobile;
     this.customerNew.altemail = this.HFormGroup2.getRawValue().altemail;
     this.customerNew.timetocall = this.HFormGroup2.getRawValue().timetocall;
     this.customerNew.hobbies = this.HFormGroup2.getRawValue().hobbies;
     this.customerNew.lang = this.HFormGroup2.getRawValue().lang;
     this.customerNew.source = this.HFormGroup2.getRawValue().source;

     this.customerNew.religion = this.HFormGroup3.getRawValue().religion;
     this.customerNew.caste = this.HFormGroup3.getRawValue().caste;
     this.customerNew.ccaste = this.HFormGroup3.getRawValue().ccaste;
     this.customerNew.gothram = this.HFormGroup3.getRawValue().gothram;
     this.customerNew.star = this.HFormGroup3.getRawValue().star;
     this.customerNew.raasi = this.HFormGroup3.getRawValue().raasi;
     this.customerNew.padam = this.HFormGroup3.getRawValue().padam;
     this.customerNew.dosham = this.HFormGroup3.getRawValue().dosham;

     this.customerNew.fstatus = this.HFormGroup4.getRawValue().fstatus;
     this.customerNew.ftype = this.HFormGroup4.getRawValue().ftype;
     this.customerNew.fathername = this.HFormGroup4.getRawValue().fathername;
     this.customerNew.fatherreligion = this.HFormGroup4.getRawValue().fatherreligion;
     this.customerNew.fathercaste = this.HFormGroup4.getRawValue().fathercaste;
     this.customerNew.fccaste = this.HFormGroup4.getRawValue().fccaste;
     this.customerNew.fIsAlive = this.HFormGroup4.getRawValue().fIsAlive;
     this.customerNew.mothername = this.HFormGroup4.getRawValue().mothername;
     this.customerNew.mothermname = this.HFormGroup4.getRawValue().mothermname;
     this.customerNew.motherreligion = this.HFormGroup4.getRawValue().motherreligion;
     this.customerNew.mothercaste = this.HFormGroup4.getRawValue().mothercaste;
     this.customerNew.mccaste = this.HFormGroup4.getRawValue().mccaste;
     this.customerNew.mIsAlive = this.HFormGroup4.getRawValue().mIsAlive;
     this.customerNew.fperaddress = this.HFormGroup4.getRawValue().fperaddress;
     this.customerNew.fpreaddress = this.HFormGroup4.getRawValue().fpreaddress;
     this.customerNew.nobrothers = this.HFormGroup4.getRawValue().nobrothers;
     this.customerNew.nosisters = this.HFormGroup4.getRawValue().nosisters;   

     this.customerNew.education = this.HFormGroup5.getRawValue().education;  
     this.customerNew.edudetail = this.HFormGroup5.getRawValue().edudetail;  
     this.customerNew.univ = this.HFormGroup5.getRawValue().univ;  
     this.customerNew.employedin = this.HFormGroup5.getRawValue().employedin;  
     this.customerNew.property = this.HFormGroup5.getRawValue().property;  
     
     this.customerNew.age = this.HFormGroup6.getRawValue().age; 
     this.customerNew.lheight = this.HFormGroup6.getRawValue().lheight;
     this.customerNew.lweight = this.HFormGroup6.getRawValue().lweight;
     this.customerNew.lfstatus = this.HFormGroup6.getRawValue().lfstatus;
     this.customerNew.intercaste = this.HFormGroup6.getRawValue().intercaste;
     this.customerNew.ldosham = this.HFormGroup6.getRawValue().ldosham;
     this.customerNew.lpassport = this.HFormGroup6.getRawValue().lpassport;
     this.customerNew.leducation = this.HFormGroup6.getRawValue().leducation;
     this.customerNew.lemployedin = this.HFormGroup6.getRawValue().lemployedin;
     this.customerNew.lcomplexion = this.HFormGroup6.getRawValue().lcomplexion;
     this.customerNew.lsmoke = this.HFormGroup6.getRawValue().lsmoke;
     this.customerNew.ldrink = this.HFormGroup6.getRawValue().ldrink;
     this.customerNew.leating = this.HFormGroup6.getRawValue().leating;

     this.customerNew.aboutme = this.HFormGroup8.getRawValue().aboutme;
     this.customerNew.referencename = this.HFormGroup8.getRawValue().referencename;
     this.customerNew.referencemobile = this.HFormGroup8.getRawValue().referencemobile;
     this.customerNew.referenceaddress = this.HFormGroup8.getRawValue().referenceaddress;
     this.customerNew.referencerelation = this.HFormGroup8.getRawValue().referencerelation;
     this.customerNew.createdby = this.idValue;
     this.customerNew.modifiedby=this.idValue;
    //  this.customerNew.photo = this.HFormGroup8.getRawValue().photo;
    //  this.customerNew.idproof = this.HFormGroup8.getRawValue().idproof;
     
     this.customerNew.user = this.user;
  
     console.log(this.customerNew); 

     this.customerService.addCustomer(this.customerNew);
     this.showNotification(
       'snackbar-success',
       'User Created Successfully...!!!',
       'top',
       'center'
     );

   this.router.navigate(['admin/dashboard/main']);

  }
}
