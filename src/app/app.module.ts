import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { SearchComponent } from './search/search.component';
// import { ContentComponent } from './content/content.component';
// import { ContentTabComponent } from './content-tab/content-tab.component';
// import { ContentTabSetComponent } from './content-tab-set/content-tab-set.component';
// import { ContentTabDemoComponent } from './content-tab-demo/content-tab-demo.component';
import { ModalComponent } from './modal/modal.component';
import { DmodalDirective } from './dmodal.directive';
import { CollapseComponent } from './collapse/collapse.component';
import { DemoComponent } from './demo/demo.component';
import { NgmodalDirective } from './ngmodal.directive';
// import { NgformComponent } from './ngform/ngform.component';

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
    ForsanDirective,
    SearchComponent,
    // ContentComponent,
    // ContentTabComponent,
    // ContentTabSetComponent,
    // ContentTabDemoComponent,
    ModalComponent,
    DmodalDirective,
    CollapseComponent,
    DemoComponent,
    NgmodalDirective,
    // NgformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
