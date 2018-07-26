import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadComponent } from './file-upload.component';

 import { FileUploadService } from './file-upload.service';
// import { AuthGuard } from '../user/auth-guard.service';

import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: FileUploadComponent
      }

      ])
  ],
  declarations: [FileUploadComponent],
  providers: [FileUploadService]
})
export class FileuploadModule { }
