/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-partial_profile_info',
    templateUrl: './partial_profile_info.template.html'
})

export class partial_profile_infoComponent extends NBaseComponent implements OnInit {
   // imageuri;
    constructor() {
        super();
    }
    posts_count="86";
    followers_count="1.5K"
    likes_count="4.5K"
    slogan_string="short slogan string"
    slogan_long_string="This is a temporary slogan string. Will be updated later"

    ngOnInit() {
      //  this.imageuri="\Web\17241-200.png";
    }
}
