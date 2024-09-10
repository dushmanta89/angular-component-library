import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'pds-button',
  templateUrl: './pds-button.component.html',
  styleUrls: ['./pds-button.component.scss']
})
export class PdsButtonComponent implements OnInit {

// Using ViewChild to access the button elements
  @ViewChild('openButton') openButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('closedButton') closedButton!: ElementRef<HTMLButtonElement>;

  constructor() { }

  ngOnInit(): void {
  }

  // Track the last focused button
    private lastFocused: 'open' | 'closed' | null = null;

  // Method to handle button focus
  focusButton(button: 'open' | 'closed') {
    if (button === 'open') {
      this.openButton.nativeElement.focus();
    } else {
      this.closedButton.nativeElement.focus();
    }

    // Update the last focused button
    this.lastFocused = button;

    console.log(this.lastFocused);
  }

}
