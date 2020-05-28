import { NgModule, ModuleWithProviders } from '@angular/core';
import { VideoComponentModule } from './video/video.component.module';
import { VideoSliderComponentModule } from './video-slider/video-slider.component.module';

@NgModule({
  declarations: [],
  imports: [
    VideoComponentModule,
    VideoSliderComponentModule
  ],
  exports: []
})
export class WidgetsModule {
  // public static forRoot(environment: any): ModuleWithProviders {

  //   return {
  //     ngModule: WidgetsModule,
  //     providers: [
  //       ImageService,
  //       {
  //         provide: 'env', // you can also use InjectionToken
  //         useValue: environment
  //       }
  //     ]
  //   };
  // }
}
