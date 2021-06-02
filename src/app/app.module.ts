import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { PokeDetailHeaderComponent } from './components/poke-detail/poke-detail-header/poke-detail-header.component';
import { PokeDetailContentComponent } from './components/poke-detail/poke-detail-content/poke-detail-content.component';
import { FeetPipe } from './shared/pipes/feet/feet.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PokeListComponent,
    PokeDetailComponent,
    PokeDetailHeaderComponent,
    PokeDetailContentComponent,
    FeetPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
