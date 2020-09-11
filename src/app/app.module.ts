import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app';
import { environment } from '../environments/environment';
import { WebpackTranslateLoader } from './webpack-translate-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * 主模块
 */
@NgModule({
    declarations: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: WebpackTranslateLoader,
            },
            defaultLanguage: 'zh-Hans',
        }),
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(readonly translate: TranslateService, readonly updates: SwUpdate) {
        translate.addLangs(Object.keys(WebpackTranslateLoader.langs));
        console.log(translate);
        if (updates.isEnabled) {
            updates.available.subscribe((event) => {
                console.log(`Updating from ${event.current.hash} to ${event.available.hash}.`);
                updates.activateUpdate().finally(() => location.reload());
            });
            updates.activated.subscribe((event) => {
                console.log(`Updated from ${event.previous?.hash ?? 'unknown'} to ${event.current.hash}.`);
            });
        }
    }
}
