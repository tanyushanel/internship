import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isOpen = true;

  ngOnInit(): void {}

  handleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
