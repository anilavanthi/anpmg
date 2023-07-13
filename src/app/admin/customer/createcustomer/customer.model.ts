export class SingleCustomerResponse{
  data! : Customer;
  msg! : string;
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
      applicationFor: string;
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