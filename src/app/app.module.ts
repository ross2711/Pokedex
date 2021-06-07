import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PokeDetailHeaderComponent } from './components/poke-detail/poke-detail-header/poke-detail-header.component';
import { PokeDetailContentComponent } from './components/poke-detail/poke-detail-content/poke-detail-content.component';
import { FeetPipe } from './shared/pipes/feet/feet.pipe';
import { PoundPipe } from './shared/pipes/pound/pound.pipe';
import { FilterComponent } from './components/poke-list/filter/filter.component';
import { PokeListActionsComponent } from './components/poke-list/poke-list-actions/poke-list-actions.component';
import { PokeListContentComponent } from './components/poke-list/poke-list-content/poke-list-content.component';
import { PokeListHeaderComponent } from './components/poke-list/poke-list-header/poke-list-header.component';
import { MaterialModule } from './shared/material.module';
import { MyLoaderComponent } from './components/my-loader/my-loader.component';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptorService } from './interceptors/loader-interceptor.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PokeDetailComponent,
    PokeDetailHeaderComponent,
    PokeDetailContentComponent,
    FeetPipe,
    PoundPipe,
    PokeListComponent,
    FilterComponent,
    PokeListActionsComponent,
    PokeListContentComponent,
    PokeListHeaderComponent,
    MyLoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
