import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ProductService,MockProductService} from './services/product-service'
import {ProductComponent,Product2Component} from './components/product';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent, ProductComponent,Product2Component
    ],
    providers: [ProductService, {provide:"IS_DEV_ENVIRONMENT", useValue:true}],
    //providers: [{provide:ProductService, useClass:MockProductService}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
