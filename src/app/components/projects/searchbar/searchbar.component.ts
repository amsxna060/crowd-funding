import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css',
})
export class SearchbarComponent {
  searchText: string = '';

  @Output()
  searchEvent: EventEmitter<string> = new EventEmitter<string>();

  search() {
    this.searchEvent.emit(this.searchText);
  }
}
