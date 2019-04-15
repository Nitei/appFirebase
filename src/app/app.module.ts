import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeroesComponent } from './components/heroes/heroes.component'
import { HeroeComponent } from './components/heroe/heroe.component'
import { HeroesService } from './services/heroes.service';
import { Key$pipePipe } from './components/pipes/key$pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    Key$pipePipe
    ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
 })
export class AppModule {  }
