import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'add',
    loadChildren: () => import('./add-notes/add-notes.module').
    then((m) => m.AddNotesModule),
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(
      (m) => m.LoginModule
    ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
