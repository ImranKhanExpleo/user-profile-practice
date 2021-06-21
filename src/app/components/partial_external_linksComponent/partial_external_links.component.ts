/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {FormBuilder,Validators}from '@angular/forms'
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
    selector: 'bh-partial_external_links',
    templateUrl: './partial_external_links.template.html'
})

export class partial_external_linksComponent extends NBaseComponent implements OnInit {
fbUrl="";
twitterUrl="";
bloggerUrl="";
googleUrl="";
websiteUrl="";
linkedinUrl="";
external_links_form;
username="Imran";
    constructor(public formBuilder:FormBuilder,private cs:clientService) {
        super();
    }
   async onSubmitFunc(){
        let  responsefromserver=(await this.cs.storelinks(this.external_links_form.value,this.username)).local.result;
             console.log(responsefromserver);
    }

    ngOnInit() {
        this.external_links_form=this.formBuilder.group({
            fbUrl:['',Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')],
            twitterUrl:['',Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')],
            bloggerUrl:['',Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')],
            googleUrl:['',Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')],
            linkedinUrl:['',Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')],
            websiteUrl:['',Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')],
        });

    }
}
