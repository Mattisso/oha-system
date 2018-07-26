import { Component, OnInit, Input, Output, EventEmitter,  OnDestroy, ElementRef, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericValidator } from '../shared/generic-validator';
import { FileUploadService} from './file-upload.service';

// import {SaveAs} from 'file-saver';
import { ApiService } from '../shared/api.service';
// import the file-upload plugin
// import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
// import the native angular http and respone libraries

import { Http, Headers, RequestOptions, Response } from '@angular/http';

const  baseUrl = 'upload';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  selectedFile = null;
  pageTitle = 'Uploading....';

  //  public uploader: FileUploader = new FileUploader({url: baseUrl , itemAlias: 'file'});

  //  attachmentList: any = [];

    ngOnInit() {

   //   this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };

    /*  this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        this.attachmentList.push(JSON.parse( response));
          //   console.log('BalanceUpload:uploaded:', item, status, response);
        };*/
    }

    constructor(private fileUploadService: FileUploadService,  public apiService: ApiService) {   }


onFileSelected(event) {
    this.selectedFile = event.target.files[0];
}




    onUpload() {

               this.fileUploadService.uploadFile(this.selectedFile);
                 /*  .map((res: Response) => res.json()).subscribe(
                    (success) => {
                            alert(success._body);
                   },
                   (error) => alert(error));*/

       }


/*
   download(index) {

     const filename = this.attachmentList[index].uploadname;
     this.fileUploadService.downloadFile(filename)
     .subscribe(
       data =>  console.log(data), // SaveAs(data,  filename),
       error => console.error(error)
     );

   }*/
}


