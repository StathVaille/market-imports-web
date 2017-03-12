import { Component } from '@angular/core';

@Component({
  selector: 'itemSearch',
  styleUrls: ['./itemSearch.component.css'],
  template: `
    <div class="row">
      <div class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" id="autocomplete" materialize="autocomplete" [materializeParams]="[{'data': locations}]">
            <label for="autocomplete">Autocomplete</label>
          </div>
        </div>
      </div>
    </div>
      `
})
export class ItemSearchComponent {
  locations: any;
  ngOnInit(){
      this.locations = {'apple': null, 'google': null};
  }
}
