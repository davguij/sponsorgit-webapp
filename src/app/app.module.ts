import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { MaterialModule } from '@angular/material';

import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';

import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoListService } from './repo-list/repo-list.service';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';
import { RepoDetailService } from './repo-detail/repo-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    RepoListComponent,
    RepoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(AppRoutes),

    AuthModule
  ],
  providers: [
    RepoListService,
    RepoDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
