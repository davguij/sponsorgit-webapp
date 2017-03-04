import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoListService } from './repo-list/repo-list.service';

@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    RepoListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
