import { L } from "@fullcalendar/list/internal-common";

export class SingleCustomerResponse{
  data! : Customer;
  msg! : string;
}

export class PostCustomerResponse{
  data! : Customer;
  message! : string;
  status_code!: number;
}


export class CustomerResponse{
    data : Customer[]=[];
    msg! : string;
  }
  export class Customer{
      id : number;
      gender: string;
      dob : string;
      maritalStatus: string;
      dateOfMarriage : string;
      dateOfDivorce : string;
      reasonDivorce : string;
      divorceChildren : string;
      divorcenoofsons : number;
      divorceSonName_1:string;
      divorceSonAge_1:string;
      divorceSonMStatus_1:string;
      divorceSonName_2:string;
      divorceSonAge_2:string;
      divorceSonMStatus_2:string;
      divorceSonName_3:string;
      divorceSonAge_3:string;
      divorceSonMStatus_3:string;
      divorceSonName_4:string;
      divorceSonAge_4:string;
      divorceSonMStatus_4:string;
      divorcenoofdaughters : number;
      divorceDaughterName_1:string;
      divorceDaughterAge_1:string;
      divorceDaughterMStatus_1:string;
      divorceDaughterName_2:string;
      divorceDaughterAge_2:string;
      divorceDaughterMStatus_2:string;
      divorceDaughterName_3:string;
      divorceDaughterAge_3:string;
      divorceDaughterMStatus_3:string;
      divorceDaughterName_4:string;
      divorceDaughterAge_4:string;
      divorceDaughterMStatus_4:string;
      dateOfMarriageWidowed : string;
      dateOfDeath : string;
      widowedChildren : string;
      widowednoofsons : number;
      widowedSonName_1:string;
      widowedSonAge_1:string;
      widowedSonMStatus_1:string;
      widowedSonName_2:string;
      widowedSonAge_2:string;
      widowedSonMStatus_2:string;
      widowedSonName_3:string;
      widowedSonAge_3:string;
      widowedSonMStatus_3:string;
      widowedSonName_4:string;
      widowedSonAge_4:string;
      widowedSonMStatus_4:string;
      widowednoofdaughters : number;
      widowedDaughterName_1:string;
      widowedDaughterAge_1:string;
      widowedDaughterMStatus_1:string;
      widowedDaughterName_2:string;
      widowedDaughterAge_2:string;
      widowedDaughterMStatus_2:string;
      widowedDaughterName_3:string;
      widowedDaughterAge_3:string;
      widowedDaughterMStatus_3:string;
      widowedDaughterName_4:string;
      widowedDaughterAge_4:string;
      widowedDaughterMStatus_4:string;
      applicationFor: string;
      nameofappfilling:string;
      nameofappmobile : string;
      nameofapprelation : string;
      eating: string;
      height: string;
      weight: string;
      bgroup: string;
      idProofType: string;
      idProofNumber: string;
      mtongue: string;
      birthtime: string;
      birthplace: string;
      healthcondition: string;
      smoke: string;
      drink: string;
      complexion:string;
      altmobile: string;
      altemail: string;
      timetocall: string;
      hobbies: string;
      lang: string;
      source: string;
      religion: string;
      caste: string;
      subcaste:string;
      ccaste: string;
      gothram: string;
      star: string;
      raasi: string;
      padam: string;
      dosham: string;
      fstatus: string;
      ftype: string;
      fathername: string;
      fatherreligion: string;
      fathercaste: string;
      fccaste: string;
      fIsAlive: string;
      fatherHealth:string;
      fatherWSector:string;
      fatherMobile : string;
      fatherProfession:string;
      fatherAddress:string;
      fatherAnnualIncome:string;
      fatherProperty:string;
      fatherPension:string;
      motherHealth:string;
      motherWSector:string;
      motherMobile : string;
      motherProfession:string;
      motherAddress:string;
      motherAnnualIncome:string;
      motherProperty:string;
      motherPension:string;
      mothername: string;
      mothermname: string;
      motherreligion: string;
      mothercaste: string;
      mccaste: string;
      mIsAlive: string;
      fperaddress: string;
      fpreaddress: string;
      nobrothers: string;
      nosisters: string;
      education: number;
      edudetail: string;
      univ: string;
      employedin : string;
      property : string;
      edesignation:string;
      eprofession:string;
      eworkinglocation:string;
      eindiastate : string;
      eindiacity:string;
      eindiaaddress:string;
      eindiacompanyname : string;
      eindiaworkingsince:string;
      eindiatotalexperience:string;
      eindiapassport:string;
      eabroadcountry : string;
      eabroadstate:string;
      eabroadtype:string;
      eabroadpassport : string;
      eabroadvalidfrom:string;
      eabroadvalidto:string;
      eabroadworkingcompanyname:string;
      eabroadaddress:string;
      ecolleguename:string;
      ecolleguemobileno:string;
      eannualincome:string;
      age: string;
      lheight: string;
      lweight : string;
      lfstatus: string;
      intercaste: string;
      ldosham:  string;
      lpassport:  string;
      leducation:  number;
      lemployedin:  string;
      lcomplexion:  string;
      lsmoke:  string;
      ldrink:  string;
      leating:  string;
      aboutme: string;
      referencename : string;
      referencemobile : string;
      referenceaddress : string;
      referencerelation : string;
      createdby :number;
      modifiedby:number;
      createdon!:Date;
      createdby_username!:string;
      education_name! : string;
      source_name! : string;
      religion_name!:string;
      caste_name!:string;
      user! : User;
      photo! : File;
      idproof! : File;
      constructor(customer: Customer) 
        {
          this.id = customer.id;
          this.gender = customer.gender || '';
          this.dob = customer.dob || '';
          this.maritalStatus = customer.maritalStatus || '';
          this.applicationFor = customer.applicationFor || '';
          this.eating = customer.eating || '';
          this.height = customer.height|| '';
          this.weight = customer.weight|| '';
          this.bgroup =customer.bgroup ||'';
          this.idProofType=customer.idProofType||'';
          this.idProofNumber=customer.idProofNumber||'';
          this.mtongue=customer.mtongue||'';
          this.birthtime=customer.birthtime||'';
          this.birthplace=customer.birthplace||'';
          this.healthcondition=customer.healthcondition||'';
          this.smoke = customer.smoke || '';
          this.drink = customer.drink || '';
          this.complexion=customer.complexion ||'';
          this.altmobile=customer.altmobile || '';
          this.altemail =customer.altemail || '';
          this.timetocall = customer.timetocall || '';
          this.hobbies =customer.hobbies || '';
          this.source = customer.source || '';
          this.lang = customer.lang || '';
          this.religion=customer.religion || '';
          this.caste = customer.caste || '';
          this.subcaste = customer.subcaste||'';
          this.ccaste = customer.ccaste || '';
          this.gothram = customer.gothram || '';
          this.star = customer .star || '';
          this.raasi = customer.raasi || '';
          this.padam = customer.padam || '';
          this.dosham = customer.dosham || '';
          this.fstatus = customer.fccaste || '';
          this.ftype = customer.ftype || '';
          this.fathername = customer.fathername || '';
          this.fatherreligion = customer.fatherreligion || '';
          this.fathercaste = customer.fathercaste || '';
          this.fccaste = customer.fccaste || '';
          this.fIsAlive = customer.fIsAlive || '';
          this.fatherHealth= customer.fatherHealth || '';
          this.fatherWSector= customer.fatherWSector || '';
          this.fatherMobile = customer.fatherMobile || '';
          this.fatherProfession= customer.fatherProfession || '';
          this.fatherAddress= customer.fatherAddress || '';
          this.fatherAnnualIncome= customer.fatherAnnualIncome || '';
          this.fatherProperty= customer.fatherProperty || '';
          this.fatherPension= customer.fatherPension || '';
          this.motherHealth= customer.motherHealth || '';
          this.motherWSector= customer.motherWSector || '';
          this.motherMobile = customer.motherMobile || '';
          this.motherProfession= customer.motherProfession || '';
          this.motherAddress= customer.motherAddress || '';
          this.motherAnnualIncome= customer.motherAnnualIncome || '';
          this.motherProperty= customer.motherProperty || '';
          this.motherPension= customer.motherPension || '';
          this.mothername = customer.mothername || '';
          this.mothermname = customer.mothermname || '';
          this.motherreligion = customer.motherreligion || '';
          this.mothercaste = customer.mothercaste || '';
          this.mccaste = customer.mccaste || '';
          this.mIsAlive = customer.mIsAlive || '';
          this.fperaddress = customer.fperaddress || '';
          this.fpreaddress = customer.fpreaddress || '';
          this.nobrothers = customer.nobrothers || '';
          this.nosisters = customer.nosisters || '';
          this.education = customer.education;
          this.edudetail = customer.edudetail || '';
          this.univ = customer.univ || '';
          this.employedin = customer.employedin || '';
          this.property = customer.property || '';
          this.age = customer.age || '';
          this.lheight = customer.lheight || '';
          this.lweight = customer.lweight || '';
          this.lfstatus = customer.lfstatus ||'';
          this.intercaste = customer.intercaste ||'';
          this.ldosham = customer.ldosham || '';
          this.lpassport = customer.lpassport || '';
          this.leducation = customer.leducation;
          this.lemployedin = customer.lemployedin||'';
          this.lcomplexion =  customer.lcomplexion ||'';
          this.lsmoke = customer.lsmoke ||'';
          this.ldrink = customer.ldrink||'';
          this.leating =  customer.leating ||'';
          this.aboutme =  customer.aboutme ||'';
          this.referencename =  customer.referencename ||'';
          this.referencemobile =  customer.referencemobile ||'';
          this.referenceaddress =  customer.referenceaddress ||'';
          this.referencerelation =  customer.referencerelation ||'';
          this.createdby = customer.createdby;
          this.modifiedby=customer.modifiedby;
         // this.photo = staff.photo;
          this.dateOfMarriage = customer.dateOfMarriage || '';
          this.dateOfDivorce = customer .dateOfDivorce || '';
          this.reasonDivorce = customer. reasonDivorce || '';
          this.divorceChildren = customer.divorceChildren||'';
          this.divorcenoofsons = customer.divorcenoofsons;
          this.divorceSonName_1 = customer.divorceSonName_1||'';
          this.divorceSonAge_1 = customer.divorceSonAge_1||'';
          this.divorceSonMStatus_1 = customer.divorceSonMStatus_1||'';
          this.divorceSonName_2 = customer.divorceSonName_2||'';
          this.divorceSonAge_2 = customer.divorceSonAge_2||'';
          this.divorceSonMStatus_2 = customer.divorceSonMStatus_2||'';
          this.divorceSonName_3 = customer.divorceSonName_3||'';
          this.divorceSonAge_3 = customer.divorceSonAge_3||'';
          this.divorceSonMStatus_3 = customer.divorceSonMStatus_3||'';
          this.divorceSonName_4 = customer.divorceSonName_4||'';
          this.divorceSonAge_4 = customer.divorceSonAge_4||'';
          this.divorceSonMStatus_4 = customer.divorceSonMStatus_4||'';
          this.divorcenoofdaughters = customer.divorcenoofdaughters;
          this.divorceDaughterName_1 = customer.divorceDaughterName_1||'';
          this.divorceDaughterAge_1 = customer.divorceDaughterAge_1||'';
          this.divorceDaughterMStatus_1 = customer.divorceDaughterMStatus_1||'';
          this.divorceDaughterName_2 = customer.divorceDaughterName_2||'';
          this.divorceDaughterAge_2 = customer.divorceDaughterAge_2||'';
          this.divorceDaughterMStatus_2 = customer.divorceDaughterMStatus_2||'';
          this.divorceDaughterName_3 = customer.divorceDaughterName_3||'';
          this.divorceDaughterAge_3 = customer.divorceDaughterAge_3||'';
          this.divorceDaughterMStatus_3 = customer.divorceDaughterMStatus_3||'';
          this.divorceDaughterName_4 = customer.divorceDaughterName_4||'';
          this.divorceDaughterAge_4 = customer.divorceDaughterAge_4||'';
          this.divorceDaughterMStatus_4 = customer.divorceDaughterMStatus_4||'';

          this.dateOfMarriageWidowed = customer.dateOfMarriageWidowed || '';
          this.dateOfDeath = customer .dateOfDeath || '';
          this.widowedChildren = customer.widowedChildren||'';
          this.widowednoofsons = customer.widowednoofsons;
          this.widowedSonName_1 = customer.widowedSonName_1||'';
          this.widowedSonAge_1 = customer.widowedSonAge_1||'';
          this.widowedSonMStatus_1 = customer.widowedSonMStatus_1||'';
          this.widowedSonName_2 = customer.widowedSonName_2||'';
          this.widowedSonAge_2 = customer.widowedSonAge_2||'';
          this.widowedSonMStatus_2 = customer.widowedSonMStatus_2||'';
          this.widowedSonName_3 = customer.widowedSonName_3||'';
          this.widowedSonAge_3 = customer.widowedSonAge_3||'';
          this.widowedSonMStatus_3 = customer.widowedSonMStatus_3||'';
          this.widowedSonName_4 = customer.widowedSonName_4||'';
          this.widowedSonAge_4 = customer.widowedSonAge_4||'';
          this.widowedSonMStatus_4 = customer.widowedSonMStatus_4||'';
          this.widowednoofdaughters = customer.widowednoofdaughters;
          this.widowedDaughterName_1 = customer.widowedDaughterName_1||'';
          this.widowedDaughterAge_1 = customer.widowedDaughterAge_1||'';
          this.widowedDaughterMStatus_1 = customer.widowedDaughterMStatus_1||'';
          this.widowedDaughterName_2 = customer.widowedDaughterName_2||'';
          this.widowedDaughterAge_2 = customer.widowedDaughterAge_2||'';
          this.widowedDaughterMStatus_2 = customer.widowedDaughterMStatus_2||'';
          this.widowedDaughterName_3 = customer.widowedDaughterName_3||'';
          this.widowedDaughterAge_3 = customer.widowedDaughterAge_3||'';
          this.widowedDaughterMStatus_3 = customer.widowedDaughterMStatus_3||'';
          this.widowedDaughterName_4 = customer.widowedDaughterName_4||'';
          this.widowedDaughterAge_4 = customer.widowedDaughterAge_4||'';
          this.widowedDaughterMStatus_4 = customer.widowedDaughterMStatus_4||'';
           
          this.nameofappfilling = customer.nameofappfilling||'';
          this.nameofappmobile = customer.nameofappmobile||'';
          this.nameofapprelation = customer.nameofapprelation||'';

          this.edesignation = customer.edesignation || '';
          this.eprofession = customer.eprofession || '';
          this.eworkinglocation = customer.eworkinglocation||'';
          this.eindiastate = customer.eindiastate || '';
          this.eindiacity = customer.eindiacity || '';
          this.eindiaaddress = customer.eindiaaddress||''
          this.eindiacompanyname = customer.eindiacompanyname ||'';
          this.eindiaworkingsince = customer.eindiaworkingsince||'';
          this.eindiatotalexperience = customer.eindiatotalexperience||'';
          this.eindiapassport = customer.eindiapassport||'';
          this.eabroadcountry = customer.eabroadcountry || '';
          this.eabroadstate = customer.eabroadstate||'';
          this.eabroadtype = customer.eabroadtype ||'';
          this.eabroadpassport = customer.eabroadpassport||'';
          this.eabroadvalidfrom = customer.eabroadvalidfrom||'';
          this.eabroadvalidto = customer.eabroadvalidto||'';
          this.eabroadworkingcompanyname = customer.eabroadworkingcompanyname||'';
          this.eabroadaddress = customer.eabroadaddress||'';
          this.ecolleguename = customer.ecolleguename||'';
          this.ecolleguemobileno=customer.ecolleguemobileno||'';
          this.eannualincome = customer.eannualincome||'';

        }
    }
  
    export class User{
        id : number;
        password: string;
        username:string;
        email: string;
        phone:string;
        first_name: string;
        last_name:string;
        address: string;
        country:number;
        state:number;
        district: number;
        city:number;
        is_customer:number;
        country_name!:string;
        state_name! : string;
        district_name! : string;
        city_name! : string;
        pincode!:string;
        constructor(user: User) {
          {
            this.id = user.id;
            this.password = user.password || '';
            this.username = user.username || '';
            this.email = user.email || '';
            this.phone = user.phone || '';
            this.first_name = user.first_name || '';
            this.last_name = user.last_name || '';
            this.address = user.address || '';
            this.country = user.country;
            this.state = user.state;
            this.district = user.district;
            this.city = user.city;
            this.is_customer = user.is_customer;
            
          }
        }
      }


      export class UserUpdate{
        id : number;
        // password: string;
        // username:string;
        // email: string;
        phone:string;
        first_name: string;
        last_name:string;
        address: string;
        country:number;
        state:number;
        district: number;
        city:number;
        country_name!:string;
        state_name! : string;
        district_name! : string;
        city_name! : string;
        pincode!:string;
        constructor(user: UserUpdate) {
          {
            this.id = user.id;
            // this.password = user.password || '';
            // this.username = user.username || '';
            // this.email = user.email || '';
            this.phone = user.phone || '';
            this.first_name = user.first_name || '';
            this.last_name = user.last_name || '';
            this.address = user.address || '';
            this.country = user.country;
            this.state = user.state;
            this.district = user.district;
            this.city = user.city;
           
          }
        }
      }




      // Define the interface for the DivorceSon model
export class DivorceSon {
  name: string;
  age: number;
  maritalStatus: string;
  // Add other properties if needed
  constructor(divorceson:DivorceSon){
    this.name = divorceson.name||'';
    this.age = divorceson.age;
    this.maritalStatus = divorceson.maritalStatus||'';
  }
}