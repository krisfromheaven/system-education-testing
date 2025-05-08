import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '@app/app.config';
import { AppComponent } from '@app/app.component';
import { TuiRoot } from '@taiga-ui/core';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [TuiRoot, AppComponent],
  template: '<tui-root> <app-base/> </tui-root>',
})
class RootComponent {}

bootstrapApplication(RootComponent, appConfig).catch((err) =>
  console.error(err),
);
