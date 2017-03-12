import { Component } from '@angular/core';
import { ImportSuggestionService } from './ImportSuggestion.service';
import { ImportSuggestion } from '../domain/ImportSuggestion';

@Component({
  selector: 'importSuggestion',
  templateUrl: './importsuggestion.component.html',
  styleUrls: ['./importsuggestion.component.css'],
  providers: [ImportSuggestionService]
})
export class ImportSuggestionComponent {

  importSuggestions: ImportSuggestion[];
  errorMessage: string;
  importSuggestionsLoaded: boolean;

  constructor(private importSuggestionService: ImportSuggestionService) {
    this.importSuggestionsLoaded = false;
  }

  ngOnInit() { this.getImportSuggestions(); }

  getImportSuggestions(){
    this.importSuggestionService.getImportSuggestions()
                                .subscribe(
                                  importSuggestions => this.loadData(importSuggestions),
                                  error => this.error(error));
  }

  loadData(importSuggestions: ImportSuggestion[]){
    this.importSuggestions = importSuggestions
    this.importSuggestionsLoaded = true
  }

  error(error) {
    this.errorMessage = "ERROR fetching import suggestions: " + <any>error;
    this.importSuggestionsLoaded = true;
  }
}
