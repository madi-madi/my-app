import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { FormComponent } from './form/form.component';
import { FormBookComponent } from './form-book/form-book.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { OrderbyPipe } from './orderby.pipe';
// import { AlertComponent } from './alert/alert.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { PanelComponent } from './panel/panel.component';
import { PanelListComponent } from './panel-list/panel-list.component';
import { ForsanDirective } from './forsan.directive';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    FormComponent,
    FormBookComponent,
    BookComponent,
    BookListComponent,
    OrderbyPipe,
    // AlertComponent,
    CarouselComponent,
    CarouselItemComponent,
    PanelComponent,
    PanelListComponent,
    ForsanDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
