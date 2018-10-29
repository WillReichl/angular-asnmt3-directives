import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SecretParagraphComponent } from './secret-paragraph/secret-paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    SecretParagraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// I. Add A button which says 'Display Details'
// 2. Add a paragraph with any content of your choice (e.g. 'Secret Password tuna')
// 3. Toggle the displaying of that paragraph with the button created in the first step
// 4. Log all button clicks in an array and output that array below the secret paragraph (maybe log a timestamp or
// simply an incrementing number)
// 5. Starting at the 5th log item, give all future log items a blue background (via ngStyIe) and white color
// (ngClass)
