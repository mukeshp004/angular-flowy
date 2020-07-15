import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowyComponent } from './flowy/flowy.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'flowy',
    component: FlowyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
