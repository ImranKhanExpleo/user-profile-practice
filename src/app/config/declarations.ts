import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';


window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-partial_headerComponent
import { partial_headerComponent } from '../components/partial_headerComponent/partial_header.component';
//CORE_REFERENCE_IMPORT-partial_external_linksComponent
import { partial_external_linksComponent } from '../components/partial_external_linksComponent/partial_external_links.component';
//CORE_REFERENCE_IMPORT-partial_personal_settingsComponent
import { partial_personal_settingsComponent } from '../components/partial_personal_settingsComponent/partial_personal_settings.component';
//CORE_REFERENCE_IMPORT-partial_profile_infoComponent
import { partial_profile_infoComponent } from '../components/partial_profile_infoComponent/partial_profile_info.component';
//CORE_REFERENCE_IMPORT-page_profile_update_mainComponent
import { page_profile_update_mainComponent } from '../components/page_profile_update_mainComponent/page_profile_update_main.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-partial_headerComponent
partial_headerComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-partial_external_linksComponent
partial_external_linksComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-partial_personal_settingsComponent
partial_personal_settingsComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-partial_profile_infoComponent
partial_profile_infoComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-page_profile_update_mainComponent
page_profile_update_mainComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'profile', component: page_profile_update_mainComponent},{path: '', redirectTo: 'profile', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
