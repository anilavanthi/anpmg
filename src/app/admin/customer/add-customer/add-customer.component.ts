import { Component,Input, OnInit,ChangeDetectionStrategy  } from '@angular/core';
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
import { ValidatorFn, AbstractControl, UntypedFormControl, FormBuilder } from '@angular/forms';
import { Role } from 'src/app/core/models/role';
import { Router } from '@angular/router';
import { CustomerService } from '../createcustomer/customer.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { SubCasteService } from '../../settings/subcast/subcast.service';
import { SubCaste,SubCasteResponse } from '../../settings/subcast/subcast.model';
import { debounceTime } from 'rxjs/operators';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { FormControl, FormGroup,FormArray  } from '@angular/forms';
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
    CasteService,EducationdetailsService,SourceService,SubCasteService],
    changeDetection: ChangeDetectionStrategy.OnPush,
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
 // HFormGroup1: UntypedFormGroup;
 HFormGroup1: FormGroup;
  HFormGroup2: UntypedFormGroup;
  HFormGroup3: UntypedFormGroup;
 // HFormGroup4: UntypedFormGroup;
  HFormGroup4:FormGroup;
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
  public subcastes$: BehaviorSubject<SubCaste[]> = new BehaviorSubject<SubCaste[]>([]);
  public educations$: BehaviorSubject<Educationdetails[]> = new BehaviorSubject<Educationdetails[]>([]);
  public sources$: BehaviorSubject<Source[]> = new BehaviorSubject<Source[]>([]);
  idValue!:number;
  user!:User;
  customer1!:Customer;
  userNew!:UserUpdate;
  customerNew!:Customer;
  selectGender?: string;
  // ShowSubForm1: FormGroup;
  fIsAliveControl: FormControl;
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
    private subcasteService : SubCasteService,
    private snackBar: MatSnackBar,
    private customerService : CustomerService,
    private authService: AuthService,
    private formBuilder : FormBuilder,
    private router: Router
    ) {
      this.fIsAliveControl = new FormControl('');
    this.HFormGroup1 = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      gender: ['', [Validators.required]],
      phone: ['', [Validators.required,Validators.pattern('^[0-9]*$')]],
      email: ['',[Validators.required, Validators.email, Validators.minLength(5)],],
      dob: ['', [Validators.required,this.ageValidator.bind(this)]],
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
      nameofappfilling:[''],
      nameofappmobile: [''],
      nameofapprelation: [''],
      dateOfMarriage:[''],
      dateOfDivorce:[''],
      reasonDivorce:[''],
      divorceChildren:[''],
      dateOfMarriageWidowed:[''],
      dateOfDeath:[''],
      widowedChildren:[''],
      divorcenoofsons: [0], // Default value for number of sons
      divorceSonsArray: this.formBuilder.array([]), // Empty form array for sons
      divorcenoofdaughters: [0], // Default value for number of daughters
      divorceDaughtersArray: this.formBuilder.array([]), // Empty form array for daughers
      widowednoofsons: [0], // Default value for number of sons
      widowedSonsArray: this.formBuilder.array([]), // Empty form array for sons
      widowednoofdaughters: [0], // Default value for number of daughters
      widowedDaughtersArray: this.formBuilder.array([]), // Empty form array for daughters

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
      caste: [''],
      subcaste: [''],
      ccaste: [''],
      gothram: [''],
      star: [''],
      raasi: [''],
      padam: [''],
      dosham: [''],
    });
    this.HFormGroup4 = this.formBuilder.group({
      fstatus: [''],
      ftype: [''],
      fathername: [''],
      fatherreligion: [''],
      fathercaste: [''],
      fccaste: [''],
      // fIsAlive: [''],
      mothername: [''],
      mothermname: [''],
      motherreligion: [''],
      mothercaste: [''],
      mccaste: [''],
      //mIsAlive: [''],
      fperaddress: [''],
      fpreaddress: [''],
      nobrothers: [0], // Default value for number of brothers
      brothersArray: this.formBuilder.array([]), // Empty form array for brothers
      nosisters: [0], // Default value for number of sisters
      sistersArray: this.formBuilder.array([]), // Empty form array for sisters
      fIsAlive: [''], // Default value is "Late"
      fatherHealth: [''], // Health Condition
      fatherWSector: [''], // Working Sector
      fatherMobile: [''], // Mobile Number
      fatherProfession: [''], // Profession
      fatherAddress: [''], // Address
      fatherAnnualIncome: [''], // Annual Income
      fatherProperty: [''], // Property Details
      fatherPension: [''], // Pension
      mIsAlive: [''], // Default value is "Late"
      motherHealth: [''], // Health Condition
      motherWSector: [''], // Working Sector
      motherMobile: [''], // Mobile Number
      motherProfession: [''], // Profession
      motherAddress: [''], // Address
      motherAnnualIncome: [''], // Annual Income
      motherProperty: [''], // Property Details
      motherPension: [''], // Pension
    });


    this.HFormGroup5 = this.fb.group({
      education: ['', Validators.required],
      edudetail: [''],
      univ: [''],
      employedin : [''],
      property : [''],
      edesignation:[''],
      eprofession:[''],
      eworkinglocation:[''],
      eindiastate : [''],
      eindiacity:[''],
      eindiaaddress:[''],
      eindiacompanyname : [''],
      eindiaworkingsince:[''],
      eindiatotalexperience:[''],
      eindiapassport:[''],
      eabroadcountry : [''],
      eabroadstate:[''],
      eabroadtype:[''],
      eabroadpassport : [''],
      eabroadvalidfrom:[''],
      eabroadvalidto:[''],
      eabroadworkingcompanyname:[''],
      eabroadaddress:[''],
      ecolleguename:[''],
      ecolleguemobileno:[''],
      eannualincome:[''],
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
      photo:[''],
      idproof:[''],
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

//   onFileSelected(event: any): void {
//     const file: File = event.target.files[0];
//     this.photofile = file;
//     const file1: File = event.target.files[1];
//     this.idfile = file1;
//     console.log(this.photofile);
//     console.log(this.idfile);
//     //this.staff.photo = file;
// }


onFileSelected(event: any): void {

  const files: FileList = event.target.files;
  // Find the files based on their input field IDs
  const photoInput: HTMLInputElement = document.getElementById('photo') as HTMLInputElement;
  const idProofInput: HTMLInputElement = document.getElementById('idproof') as HTMLInputElement;

  const photoFile: File | null = photoInput.files ? photoInput.files[0] : null;
  const idFile: File | null = idProofInput.files ? idProofInput.files[0] : null;

  if (photoFile && idFile) {
    console.log("Photo File:", photoFile);
    console.log("ID File:", idFile);

    // Assign the selected files to the respective variables
    this.photofile = photoFile;
    this.idfile = idFile;
  } else {
    // Handle the case where two files are not selected
    console.log("Please select two files.");
  }
   
  }

onIdFileSelected1(event: any): void {
  const file: File = event.target.files[0];
  this.idfile = file;
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

  ageValidator(control: FormControl): { [key: string]: boolean } | null {
    const dob = new Date(control.value);
    const ageDiff = Date.now() - dob.getTime();
    const ageDate = new Date(ageDiff); // Age in milliseconds
    const age = Math.abs(ageDate.getUTCFullYear() - 1970); // Calculate the age
  
    if (age < 18 || age > 70) {
      return { invalidAge: true };
    }
  
    return null;
  }


  // Getter for brothersArray form array
  get brothersArray(): FormArray {
    return this.HFormGroup4.get('brothersArray') as FormArray;
  }

  // Function to add or remove form groups in the brothersArray based on the entered number of brothers
  updateBrothersArray() {
    const nobrothers = this.HFormGroup4.get('nobrothers')?.value;
    const brothersArray = this.HFormGroup4.get('brothersArray') as FormArray;

    // Calculate the difference between the current length and the desired length
    const diff = nobrothers - brothersArray.length;

    if (diff > 0) {
      // Add new form groups if the desired length is greater than the current length
      for (let i = 0; i < diff; i++) {
        const brotherGroup = this.formBuilder.group({
          brotherName: [''], // Set default values for each form control
          brotherAge: [''],
          brotherMStatus: [''],
          brotherEYounger: ['']
        });
        brothersArray.push(brotherGroup);
      }
    } else if (diff < 0) {
      // Remove form groups if the desired length is less than the current length
      for (let i = 0; i < -diff; i++) {
        brothersArray.removeAt(brothersArray.length - 1);
      }
    }
  }

  // Getter for individual brother form controls in the form array
  getBrotherControl(index: number, controlName: string): FormControl {
    const brotherGroup = this.getBrotherGroup(index);
    return brotherGroup.get(controlName) as FormControl;
  }

  // Function to get the individual brother form group based on the index
  getBrotherGroup(index: number): FormGroup {
    const brothersArray = this.HFormGroup4.get('brothersArray') as FormArray;
    const brotherGroup = brothersArray.at(index) as FormGroup;
    return brotherGroup;
  }



    // Getter for sistersArray form array
    get sistersArray(): FormArray {
      return this.HFormGroup4.get('sistersArray') as FormArray;
    }
  
    // Function to add or remove form groups in the sistersArray based on the entered number of brothers
    updateSistersArray() {
      const nosisters = this.HFormGroup4.get('nosisters')?.value;
      const sistersArray = this.HFormGroup4.get('sistersArray') as FormArray;
  
      // Calculate the difference between the current length and the desired length
      const diff = nosisters - sistersArray.length;
  
      if (diff > 0) {
        // Add new form groups if the desired length is greater than the current length
        for (let i = 0; i < diff; i++) {
          const sisterGroup = this.formBuilder.group({
            sisterName: [''], // Set default values for each form control
            sisterAge: [''],
            sisterMStatus: [''],
            sisterEYounger: ['']
          });
          sistersArray.push(sisterGroup);
        }
      } else if (diff < 0) {
        // Remove form groups if the desired length is less than the current length
        for (let i = 0; i < -diff; i++) {
          sistersArray.removeAt(sistersArray.length - 1);
        }
      }
    }
  
    // Getter for individual sister form controls in the form array
    getSisterControl(index: number, controlName: string): FormControl {
      const sisterGroup = this.getSisterGroup(index);
      return sisterGroup.get(controlName) as FormControl;
    }
  
    // Function to get the individual brother form group based on the index
    getSisterGroup(index: number): FormGroup {
      const sistersArray = this.HFormGroup4.get('sistersArray') as FormArray;
      const sisterGroup = sistersArray.at(index) as FormGroup;
      return sisterGroup;
    }


 // Getter for widowedSonsArray form array
 get widowedSonsArray(): FormArray {
  return this.HFormGroup1.get('widowedSonsArray') as FormArray;
}

updateWidowedNoOfSonsArray() {
  const widowednoofsons = this.HFormGroup1.get('widowednoofsons')?.value;
  const widowedSonsArray = this.HFormGroup1.get('widowedSonsArray') as FormArray;
  const diff = widowednoofsons - widowedSonsArray.length;
  if (diff > 0) {
    for (let i = 0; i < diff; i++) {
      const widowedSonsGroup = this.formBuilder.group({
        widowedSonName: [''], // Set default values for each form control
        widowedSonAge: [''],
        widowedSonMStatus: ['']
      });
      widowedSonsArray.push(widowedSonsGroup);
    }
  } else if (diff < 0) {
    for (let i = 0; i < -diff; i++) {
      widowedSonsArray.removeAt(widowedSonsArray.length - 1);
    }
  }
}

getWidowedSonControl(index: number, controlName: string): FormControl {
  const widowedSonsGroup = this.getWidowedSonsGroup(index);
  return widowedSonsGroup.get(controlName) as FormControl;
}

getWidowedSonsGroup(index: number): FormGroup {
  const widowedSonsArray = this.HFormGroup1.get('widowedSonsArray') as FormArray;
  const widowedSonsGroup = widowedSonsArray.at(index) as FormGroup;
  return widowedSonsGroup;
}


 // Getter for widowedDaughtersArray form array
 get widowedDaughtersArray(): FormArray {
  return this.HFormGroup1.get('widowedDaughtersArray') as FormArray;
}

updateWidowedNoOfDaughtersArray() {
  const widowednoofdaughters = this.HFormGroup1.get('widowednoofdaughters')?.value;
  const widowedDaughtersArray = this.HFormGroup1.get('widowedDaughtersArray') as FormArray;
  const diff = widowednoofdaughters - widowedDaughtersArray.length;
  if (diff > 0) {
    for (let i = 0; i < diff; i++) {
      const widowedDaughterGroup = this.formBuilder.group({
        widowedDaughterName: [''], // Set default values for each form control
        widowedDaughterAge: [''],
        widowedDaughterMStatus: ['']
      });
      widowedDaughtersArray.push(widowedDaughterGroup);
    }
  } else if (diff < 0) {
    for (let i = 0; i < -diff; i++) {
      widowedDaughtersArray.removeAt(widowedDaughtersArray.length - 1);
    }
  }
}

getWidowedDaughterControl(index: number, controlName: string): FormControl {
  const widowedDaughterGroup = this.getWidowedDaughtersGroup(index);
  return widowedDaughterGroup.get(controlName) as FormControl;
}

getWidowedDaughtersGroup(index: number): FormGroup {
  const widowedDaughtersArray = this.HFormGroup1.get('widowedDaughtersArray') as FormArray;
  const widowedDaughterGroup = widowedDaughtersArray.at(index) as FormGroup;
  return widowedDaughterGroup;
}

 // Getter for divorceSonsArray form array
 get divorceSonsArray(): FormArray {
  return this.HFormGroup1.get('divorceSonsArray') as FormArray;
}

updateDivorceNoOfSonsArray() {
  const divorcenoofsons = this.HFormGroup1.get('divorcenoofsons')?.value;
  const divorceSonsArray = this.HFormGroup1.get('divorceSonsArray') as FormArray;
  const diff = divorcenoofsons - divorceSonsArray.length;
  if (diff > 0) {
    for (let i = 0; i < diff; i++) {
      const divorceSonsGroup = this.formBuilder.group({
        divorceSonName: [''], // Set default values for each form control
        divorceSonAge: [''],
        divorceSonMStatus: ['']
      });
      divorceSonsArray.push(divorceSonsGroup);
    }
  } else if (diff < 0) {
    for (let i = 0; i < -diff; i++) {
      divorceSonsArray.removeAt(divorceSonsArray.length - 1);
    }
  }
}

getDivroceSonControl(index: number, controlName: string): FormControl {
  const divorceSonsGroup = this.getDivorceSonsGroup(index);
  return divorceSonsGroup.get(controlName) as FormControl;
}

getDivorceSonsGroup(index: number): FormGroup {
  const divorceSonsArray = this.HFormGroup1.get('divorceSonsArray') as FormArray;
  const divorceSonsGroup = divorceSonsArray.at(index) as FormGroup;
  return divorceSonsGroup;
}


 // Getter for divorceDaughtersArray form array
 get divorceDaughtersArray(): FormArray {
  return this.HFormGroup1.get('divorceDaughtersArray') as FormArray;
}

updateDivorceNoOfDaughtersArray() {
  const divorcenoofdaughters = this.HFormGroup1.get('divorcenoofdaughters')?.value;
  const divorceDaughtersArray = this.HFormGroup1.get('divorceDaughtersArray') as FormArray;
  const diff = divorcenoofdaughters - divorceDaughtersArray.length;
  if (diff > 0) {
    for (let i = 0; i < diff; i++) {
      const divorceDaughterGroup = this.formBuilder.group({
        divorceDaughterName: [''], // Set default values for each form control
        divorceDaughterAge: [''],
        divorceDaughterMStatus: ['']
      });
      divorceDaughtersArray.push(divorceDaughterGroup);
    }
  } else if (diff < 0) {
    for (let i = 0; i < -diff; i++) {
      divorceDaughtersArray.removeAt(divorceDaughtersArray.length - 1);
    }
  }
}

getDivroceDaughterControl(index: number, controlName: string): FormControl {
  const divorceDaughterGroup = this.getDivorceDaughtersGroup(index);
  return divorceDaughterGroup.get(controlName) as FormControl;
}

getDivorceDaughtersGroup(index: number): FormGroup {
  const divorceDaughtersArray = this.HFormGroup1.get('divorceDaughtersArray') as FormArray;
  const divorceDaughterGroup = divorceDaughtersArray.at(index) as FormGroup;
  return divorceDaughterGroup;
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

   public onCasteChange(e:any){
    this.subcasteService.onCasteChangeSubCaste(e);
    this.subcastes$ = this.subcasteService.subcastes$;
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
     this.customerNew.dateOfMarriage = this.HFormGroup1.getRawValue().dateOfMarriage;
     this.customerNew.dateOfDivorce = this.HFormGroup1.getRawValue().dateOfDivorce;
     this.customerNew.reasonDivorce = this.HFormGroup1.getRawValue().reasonDivorce;
     this.customerNew.divorceChildren = this.HFormGroup1.getRawValue().divorceChildren;
     this.customerNew.divorcenoofsons = this.HFormGroup1.getRawValue().divorcenoofsons; 
     const divorceSonsArray: FormArray = this.HFormGroup1.get('divorceSonsArray') as FormArray;
     const values = divorceSonsArray.value;
        let inc = 1;
        for(const group of values){
          const dynamicPropertyName1 = `divorceSonName_${inc}`;
          const dynamicPropertyName2 = `divorceSonAge_${inc}`;
          const dynamicPropertyName3 = `divorceSonMStatus_${inc}`;
          (this.customerNew as any)[dynamicPropertyName1] = group.divorceSonName;
          (this.customerNew as any)[dynamicPropertyName2] = group.divorceSonAge;
          (this.customerNew as any)[dynamicPropertyName3] = group.divorceSonMStatus;
          inc=inc +1 ;
        }
     
        this.customerNew.divorcenoofdaughters = this.HFormGroup1.getRawValue().divorcenoofdaughters; 
        const divorceDaughtersArray: FormArray = this.HFormGroup1.get('divorceDaughtersArray') as FormArray;
        const daughtervalues = divorceDaughtersArray.value;
           let incdaughter = 1;
           for(const group of daughtervalues){
             const dynamicPropertyName1 = `divorceDaughterName_${incdaughter}`;
             const dynamicPropertyName2 = `divorceDaughterAge_${incdaughter}`;
             const dynamicPropertyName3 = `divorceDaughterMStatus_${incdaughter}`;
             (this.customerNew as any)[dynamicPropertyName1] = group.divorceDaughterName;
             (this.customerNew as any)[dynamicPropertyName2] = group.divorceDaughterAge;
             (this.customerNew as any)[dynamicPropertyName3] = group.divorceDaughterMStatus;
             incdaughter=incdaughter +1 ;
           }   
//widowed
this.customerNew.dateOfMarriageWidowed = this.HFormGroup1.getRawValue().dateOfMarriageWidowed;
this.customerNew.dateOfDeath = this.HFormGroup1.getRawValue().dateOfDeath;
this.customerNew.widowedChildren = this.HFormGroup1.getRawValue().widowedChildren;
this.customerNew.widowednoofsons = this.HFormGroup1.getRawValue().widowednoofsons; 
const widowedSonsArray: FormArray = this.HFormGroup1.get('widowedSonsArray') as FormArray;
const valuesWidowedSons = widowedSonsArray.value;
   let incWidowedSons = 1;
   for(const group of valuesWidowedSons){
     const dynamicPropertyName1 = `widowedSonName_${incWidowedSons}`;
     const dynamicPropertyName2 = `widowedSonAge_${incWidowedSons}`;
     const dynamicPropertyName3 = `widowedSonMStatus_${incWidowedSons}`;
     (this.customerNew as any)[dynamicPropertyName1] = group.widowedSonName;
     (this.customerNew as any)[dynamicPropertyName2] = group.widowedSonAge;
     (this.customerNew as any)[dynamicPropertyName3] = group.widowedSonMStatus;
     incWidowedSons=incWidowedSons +1 ;
   }

   this.customerNew.widowednoofdaughters = this.HFormGroup1.getRawValue().widowednoofdaughters; 
   const widowedDaughtersArray: FormArray = this.HFormGroup1.get('widowedDaughtersArray') as FormArray;
   const valuesWidowedDaughters = widowedDaughtersArray.value;
      let incWidowedDaughters = 1;
      for(const group of valuesWidowedDaughters){
        const dynamicPropertyName1 = `widowedDaughterName_${incWidowedDaughters}`;
        const dynamicPropertyName2 = `widowedDaughterAge_${incWidowedDaughters}`;
        const dynamicPropertyName3 = `widowedDaughterMStatus_${incWidowedDaughters}`;
        (this.customerNew as any)[dynamicPropertyName1] = group.widowedDaughterName;
        (this.customerNew as any)[dynamicPropertyName2] = group.widowedDaughterAge;
        (this.customerNew as any)[dynamicPropertyName3] = group.widowedDaughterMStatus;
        incWidowedDaughters=incWidowedDaughters +1 ;
      }   
      this.customerNew.nameofappfilling = this.HFormGroup1.getRawValue().nameofappfilling;
      this.customerNew.nameofappmobile = this.HFormGroup1.getRawValue().nameofappmobile;
      this.customerNew.nameofapprelation = this.HFormGroup1.getRawValue().nameofapprelation;

     this.customerNew.altmobile = this.HFormGroup2.getRawValue().altmobile;
     this.customerNew.altemail = this.HFormGroup2.getRawValue().altemail;
     this.customerNew.timetocall = this.HFormGroup2.getRawValue().timetocall;
     this.customerNew.hobbies = this.HFormGroup2.getRawValue().hobbies;
     this.customerNew.lang = this.HFormGroup2.getRawValue().lang;
     this.customerNew.source = this.HFormGroup2.getRawValue().source;
     
     const selectedReligionID = this.HFormGroup3.get('religion')?.value;
     console.log(selectedReligionID);
     this.customerNew.religion = this.HFormGroup3.getRawValue().religion;
     this.customerNew.caste = this.HFormGroup3.getRawValue().caste;
     this.customerNew.subcaste = this.HFormGroup3.getRawValue().subcaste;
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
     this.customerNew.fatherHealth=this.HFormGroup4.getRawValue().fatherHealth;
     this.customerNew.fatherWSector=this.HFormGroup4.getRawValue().fatherWSector;
     this.customerNew.fatherMobile=this.HFormGroup4.getRawValue().fatherMobile;
     this.customerNew.fatherProfession=this.HFormGroup4.getRawValue().fatherProfession;
     this.customerNew.fatherAddress=this.HFormGroup4.getRawValue().fatherAddress;
     this.customerNew.fatherAnnualIncome=this.HFormGroup4.getRawValue().fatherAnnualIncome;
     this.customerNew.fatherProperty=this.HFormGroup4.getRawValue().fatherProperty;
     this.customerNew.fatherPension=this.HFormGroup4.getRawValue().fatherPension;
     this.customerNew.mothername = this.HFormGroup4.getRawValue().mothername;
     this.customerNew.mothermname = this.HFormGroup4.getRawValue().mothermname;
     this.customerNew.motherreligion = this.HFormGroup4.getRawValue().motherreligion;
     this.customerNew.mothercaste = this.HFormGroup4.getRawValue().mothercaste;
     this.customerNew.mccaste = this.HFormGroup4.getRawValue().mccaste;
     this.customerNew.mIsAlive = this.HFormGroup4.getRawValue().mIsAlive;
     this.customerNew.motherHealth=this.HFormGroup4.getRawValue().motherHealth;
     this.customerNew.motherWSector=this.HFormGroup4.getRawValue().motherWSector;
     this.customerNew.motherMobile=this.HFormGroup4.getRawValue().motherMobile;
     this.customerNew.motherProfession=this.HFormGroup4.getRawValue().motherProfession;
     this.customerNew.motherAddress=this.HFormGroup4.getRawValue().motherAddress;
     this.customerNew.motherAnnualIncome=this.HFormGroup4.getRawValue().motherAnnualIncome;
     this.customerNew.motherProperty=this.HFormGroup4.getRawValue().motherProperty;
     this.customerNew.motherPension=this.HFormGroup4.getRawValue().motherPension;
     this.customerNew.fperaddress = this.HFormGroup4.getRawValue().fperaddress;
     this.customerNew.fpreaddress = this.HFormGroup4.getRawValue().fpreaddress;
     this.customerNew.nobrothers = this.HFormGroup4.getRawValue().nobrothers;
     this.customerNew.nosisters = this.HFormGroup4.getRawValue().nosisters; 
     
     this.customerNew.education = this.HFormGroup5.getRawValue().education;  
     this.customerNew.edudetail = this.HFormGroup5.getRawValue().edudetail;  
     this.customerNew.univ = this.HFormGroup5.getRawValue().univ;  
     this.customerNew.employedin = this.HFormGroup5.getRawValue().employedin;  
     this.customerNew.property = this.HFormGroup5.getRawValue().property;  
     this.customerNew.edesignation = this.HFormGroup5.getRawValue().edesignation;
     this.customerNew.eprofession = this.HFormGroup5.getRawValue().eprofession;
     this.customerNew.eworkinglocation = this.HFormGroup5.getRawValue().eworkinglocation;
     this.customerNew.eindiastate = this.HFormGroup5.getRawValue().eindiastate;
     this.customerNew.eindiacity = this.HFormGroup5.getRawValue().eindiacity;
     this.customerNew.eindiaaddress = this.HFormGroup5.getRawValue().eindiaaddress;
     this.customerNew.eindiacompanyname = this.HFormGroup5.getRawValue().eindiacompanyname;
     this.customerNew.eindiaworkingsince = this.HFormGroup5.getRawValue().eindiaworkingsince;
     this.customerNew.eindiatotalexperience = this.HFormGroup5.getRawValue().eindiatotalexperience;
     this.customerNew.eindiapassport = this.HFormGroup5.getRawValue().eindiapassport;
     this.customerNew.eabroadcountry = this.HFormGroup5.getRawValue().eabroadcountry;
     this.customerNew.eabroadstate = this.HFormGroup5.getRawValue().eabroadstate;
     this.customerNew.eabroadtype = this.HFormGroup5.getRawValue().eabroadtype;
     this.customerNew.eabroadpassport = this.HFormGroup5.getRawValue().eabroadpassport;
     this.customerNew.eabroadvalidfrom = this.HFormGroup5.getRawValue().eabroadvalidfrom;
     this.customerNew.eabroadvalidto = this.HFormGroup5.getRawValue().eabroadvalidto;
     this.customerNew.eabroadworkingcompanyname = this.HFormGroup5.getRawValue().eabroadworkingcompanyname;
     this.customerNew.eabroadaddress = this.HFormGroup5.getRawValue().eabroadaddress;
     this.customerNew.ecolleguename = this.HFormGroup5.getRawValue().ecolleguename;
     this.customerNew.ecolleguemobileno = this.HFormGroup5.getRawValue().ecolleguemobileno;
     this.customerNew.eannualincome = this.HFormGroup5.getRawValue().eannualincome; 
    
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
  
     //console.log(this.customerNew); 

    this.customerService.addCustomer(this.customerNew,this.photofile,this.idfile);
     this.showNotification(
       'snackbar-success',
       'User Created Successfully...!!!',
       'top',
       'center'
     );

   this.router.navigate(['admin/dashboard/main']);

  }
}
