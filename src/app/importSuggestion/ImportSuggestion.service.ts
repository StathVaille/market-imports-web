import { Http, Response }          from '@angular/http';
import { Injectable }              from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ImportSuggestion } from '../domain/ImportSuggestion';

@Injectable()
export class ImportSuggestionService {

  private url = 'http://localhost:5000/api/import';

  constructor(private _http: Http) {}

  getImportSuggestions(): Observable<ImportSuggestion[]>  {
    console.log('Loading data...')
    return this._http.get(this.url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response){
    console.log('Data loaded')
    let body = res.json();

    let importSuggestions: ImportSuggestion[] = [];
    for (let importSuggestionJson of body.data) {
      let importSuggestion =  new ImportSuggestion().deserialize(importSuggestionJson);
      importSuggestions.push(importSuggestion);
    }

    return importSuggestions || {};
  }

  private handleError(error: Response | any){
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
