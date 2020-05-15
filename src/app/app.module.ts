import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SeasonDetailsComponent } from './season-details/season-details.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MovieSearchComponent,
    MoreDetailsComponent,
    SearchListComponent,
    SeasonDetailsComponent,
    EpisodeDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'seasons', component:SeasonDetailsComponent},
      {path:'episodes', component:EpisodeDetailsComponent}
    ]),
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
