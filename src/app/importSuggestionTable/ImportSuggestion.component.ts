import { Component } from '@angular/core';
import { ImportSuggestionService } from './ImportSuggestion.service';

@Component({
  selector: 'importSuggestion',
  templateUrl: './importsuggestion.component.html',
  providers: [ImportSuggestionService]
})
export class ImportSuggestionComponent {
  importSuggestions;

  constructor(importSuggestionService: ImportSuggestionService) {
    this.importSuggestions = importSuggestionService.getImportSuggestions();
  }
}
