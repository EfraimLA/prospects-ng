import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProspectsComponent} from "./components/prospects/prospects.component";
import {CreateProspectComponent} from "./components/create-prospect/create-prospect.component";

const routes: Routes = [
  {
    path: '',
    component: ProspectsComponent
  },
  {
    path: 'new',
    component: CreateProspectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
