import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyMovieComponent } from './my-movie/my-movie.component';


const routes: Routes = [
  // router.get('/', ...
  // { path: '', component: LandingPageComponent },

  // router.get('/contacts/:blahId', ...
  // { path: 'contacts/:blahId', component: ContactDetailsComponent },

  // router.get('/contacts/:blahId', ...
  { path: '', component: MyHomeComponent },

  { path: 'movie/:movieId', component: MyMovieComponent }

  // Handle all other urls (MUST BE LAST)
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
