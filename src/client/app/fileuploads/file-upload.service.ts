import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { ApiService } from '../shared/api.service';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class FileUploadService {
  private baseUrl = 'odaupload';

    constructor(public api: ApiService) { }

     uploadFile(fileToUpload: File)  {

      const _formData = new FormData();
      _formData.append('ohafile', fileToUpload, fileToUpload.name);

       //  const headers = new Headers({ 'Content-Type': 'application/json' });
   //    const options = new RequestOptions({ headers: headers });
    //   options.params = parameters;
      return  this.api.post(this.baseUrl , _formData).pipe(
        //  .map(response => response.json())
      catchError(error => Observable.throw(error))
      );
   }
    /*
    getImages() {
        return this.http.get(this.baseUrl + 'getimages')
                   .map(response => response.json())
                   .catch(error => Observable.throw(error));
    }
*/
downloadFile(file: String) {
const body = {filename: file};
return this.api.post(this.baseUrl, body);
}

}
