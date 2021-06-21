/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from '../../app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class clientService {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.registerListeners();
  }
  registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_clientService

  async countriesApi(...others) {
    try {
      var bh = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_gzCHrO9XkZRxts2E(bh);
      //appendnew_next_countriesApi
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wxsR4liVZmZJMbzl');
    }
  }

  async storeprofiledata(inputData: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          inputData: inputData,
        },
        local: {
          resp: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_Ox9CyCYqj98s7CAF(bh);
      //appendnew_next_storeprofiledata
      return (
        // formatting output variables
        {
          input: {},
          local: {
            resp: bh.local.resp,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tvZnfeEUpj2S9qbS');
    }
  }

  async storelinks(
    linkdata: any = undefined,
    username: any = undefined,
    ...others
  ) {
    try {
      var bh = {
        input: {
          linkdata: linkdata,
          username: username,
        },
        local: {
          reqbody: undefined,
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_BeuEUMr7KmWQ2bnG(bh);
      //appendnew_next_storelinks
      return (
        // formatting output variables
        {
          input: {},
          local: {
            reqbody: bh.local.reqbody,
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_H6TiUq3kGOSRRK55');
    }
  }

  async getProfile(username: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          username: username,
        },
        local: {
          res: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_MwcXaNSuRYDS2A1y(bh);
      //appendnew_next_getProfile
      return (
        // formatting output variables
        {
          input: {},
          local: {
            res: bh.local.res,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EABng4Yk4wkvUWDj');
    }
  }

  //appendnew_flow_clientService_start

  async sd_gzCHrO9XkZRxts2E(bh) {
    try {
      let requestOptions = {
        url: 'https://restcountries.eu/rest/v2/',
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_gzCHrO9XkZRxts2E
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gzCHrO9XkZRxts2E');
    }
  }

  async sd_Ox9CyCYqj98s7CAF(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/storeProfile',
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.inputData,
      };
      bh.local.resp = await this.sdService.nHttpRequest(requestOptions);
      this.sd_65X0wNwfHWm4x1wn(bh);
      //appendnew_next_sd_Ox9CyCYqj98s7CAF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ox9CyCYqj98s7CAF');
    }
  }

  async sd_65X0wNwfHWm4x1wn(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.resp);
      //appendnew_next_sd_65X0wNwfHWm4x1wn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_65X0wNwfHWm4x1wn');
    }
  }

  async sd_BeuEUMr7KmWQ2bnG(bh) {
    try {
      bh.local.reqbody = {
        username: bh.input.username,
        linkdata: bh.input.linkdata,
      };
      bh = await this.sd_hG7fpQCvWluIV5C7(bh);
      //appendnew_next_sd_BeuEUMr7KmWQ2bnG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BeuEUMr7KmWQ2bnG');
    }
  }

  async sd_hG7fpQCvWluIV5C7(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/storelinks',
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.local.reqbody,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_hG7fpQCvWluIV5C7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hG7fpQCvWluIV5C7');
    }
  }

  async sd_MwcXaNSuRYDS2A1y(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/getProfiledata',
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.username,
      };
      bh.local.res = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_MwcXaNSuRYDS2A1y
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MwcXaNSuRYDS2A1y');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_clientService_Catch
}
