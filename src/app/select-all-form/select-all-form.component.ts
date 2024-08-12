import { Component, Input, OnInit } from '@angular/core';

/**
 * 
 Assignment requirements
  Using Template-driven OR Reactive form to build an app in Angular. There are a select all checkbox, movie checkboxes and a "clear all"  button. Also, you can have a selected items section.
  
  If all the movies are checked, the select all checkboxes will be automatically be checked.
  
  If any of the movie is unchecked, the select all is unchecked.
  
  If selectall checkbox is changed from check to uncheck, all the movie checkboxes are unchecked.
  
  Click "Clear all" button, all the checkboxes are unchecked.
  
  (Optional) If one movie is checked, the name of the movie will be shown in the view (in selected values). If the movie is unchecked, the name will be disappeared.

  https://www.evernote.com/shard/s546/client/snv?isnewsnv=true&noteGuid=f25429a5-11d9-87b6-6e4f-bdf4faee7451&noteKey=LAlVtfA7TM6C_hFS6yDGNEF9yoxK18iItuBdaJaZyNHgteTVwHFdgFRpfA&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs546%2Fsh%2Ff25429a5-11d9-87b6-6e4f-bdf4faee7451%2FLAlVtfA7TM6C_hFS6yDGNEF9yoxK18iItuBdaJaZyNHgteTVwHFdgFRpfA&title=Select%2Ball%2Bform
 * 
 */

@Component({
  selector: 'app-select-all-form',
  templateUrl: './select-all-form.component.html',
  styleUrls: ['./select-all-form.component.css'],
})
export class SelectAllFormComponent implements OnInit {
  checkedAll: boolean = false;
  optionsChecked: string[] = [];
  dataList: string[] = [
    'Changjinhu (2021)',
    'Dune (2021)',
    'Shang-Chi and the Legend of the Ten Rings (2021)',
    'Free Guy (2021)',
    'The Many Saints of Newark (2021)',
    'Finch (2021)',
    'Candyman (2021)',
    'No Time to Die (2021)',
    'Halloween Kills (2021)',
  ];
  constructor() {}

  ngOnInit() {}

  checkAll() {
    this.checkedAll = !this.checkedAll;
    if (this.checkedAll) {
      this.optionsChecked = this.dataList;
    } else {
      this.optionsChecked = [];
    }
  }

  checkOption(id: string) {
    if (this.optionsChecked.includes(id)) {
      this.optionsChecked = this.optionsChecked.filter(
        (element: string) => element !== id
      );
    } else {
      this.optionsChecked.push(id);
    }
  }

  uncheckAll() {
    this.checkedAll = false;
    this.optionsChecked = [];
  }
}
