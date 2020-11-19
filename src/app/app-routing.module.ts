import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsownerComponent } from './jsowner/jsowner.component';
import { CallbackComponent } from './callback/callback.component';
import { MaphigerlevelComponent } from './maphigherlevel/maphigherlevel.component';
import { JSpromisesComponent } from './js-promises/js-promises.component';


const routes: Routes = [
  {
    path: 'jsowner', component: JsownerComponent
  },
{
    path: 'callback', component: CallbackComponent
},
{
    path: 'maphigherlevel', component: MaphigherlevelComponent
  },
  {
    path: 'jspromises', component: JsownerComponent
  }
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
