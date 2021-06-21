/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {FormBuilder,Validators}from '@angular/forms';
import {clientService} from '../../sd-services/clientService'

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-partial_personal_settings',
    templateUrl: './partial_personal_settings.template.html'
})

export class partial_personal_settingsComponent extends NBaseComponent implements OnInit {
 email="";
 fullname="";
titlepos="";
countries=[];
date;
country="";region=""; postal_code=""; contact_number="";
personalDetailsForm;
days=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
months=[
{value:1,viewValue:'January'},
 {value:2,viewValue:'February'}, 
 {value:3,viewValue:'March'},
 {value:4,viewValue: 'April'},
 {value:5,viewValue: 'May'},
 {value:6,viewValue: 'June'},
 {value:7,viewValue: 'July'},
 {value:8,viewValue: 'August'},
 {value:9,viewValue: 'September'},
 {value:10,viewValue: 'October'},
 {value:11,viewValue: 'November'},
 {value:12,viewValue: 'December'}];
 years=[];
 sel_day="";sel_month="";sel_year="";
    constructor(public formBuilder: FormBuilder,private cs:clientService) {
        super();
    }
    // dateFun(){
    //     if(this.sel_day && this.sel_month && this.sel_year){
    //         this.date=new Date(this.sel_day+"/"+this.sel_month+"/"+this.sel_year);
    //         console.log(this.date)
    //     }
    // }

    async ngOnInit() {
        this.personalDetailsForm=this.formBuilder.group({
           fullname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
           titlepos:['',Validators.required],
           email:['',[Validators.required,Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],           
           day:[''],
           month:[''],
           year:[''],
           country:['',Validators.required],           
           region:['',Validators.required],
           postalcode:['',[Validators.required, Validators.pattern("^[0-9]*$")]],
           contactnumber:['',[Validators.required, Validators.pattern("^[0-9]*$"),Validators.min(10),Validators.max(10)]]
       }) ;
      this.generateArrayOfYears();
      this.countries = (await this.cs.countriesApi()).local.result;
     // console.log(JSON.stringify(this.countries))

           }
             generateArrayOfYears() {
             var max = new Date().getFullYear()
             var min = max - 50;
          for (var i = max; i >= min; i--) {
              this.years.push(i)
                }
                }
           async submitFun(){
               console.log(this.personalDetailsForm.value)
             let  responsefromserver=(await this.cs.storeprofiledata(this.personalDetailsForm.value)).local.result;
             console.log(responsefromserver);
           }
}
