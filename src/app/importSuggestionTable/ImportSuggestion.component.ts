import { Component } from '@angular/core';
import { ImportSuggestionService } from './ImportSuggestion.service';
import { ImportSuggestion } from '../domain/ImportSuggestion';

@Component({
  selector: 'importSuggestion',
  templateUrl: './importsuggestion.component.html',
  providers: [ImportSuggestionService]
})
export class ImportSuggestionComponent {

  importSuggestions: ImportSuggestion[];
  errorMessage: string;

  constructor(private importSuggestionService: ImportSuggestionService) {}

  ngOnInit() { this.getImportSuggestions(); }

  getImportSuggestions(){
    this.importSuggestionService.getImportSuggestions()
                                .subscribe(
                                  importSuggestions => this.importSuggestions = importSuggestions,
                                  error => this.errorMessage = <any>error);
  }
}
