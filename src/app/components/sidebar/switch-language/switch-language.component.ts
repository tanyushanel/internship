import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-switch-language',
  templateUrl: './switch-language.component.html',
  styleUrls: ['./switch-language.component.scss'],
})
export class SwitchLanguageComponent implements OnInit {
  @Input() selectedLang = '';

  @Output() changeSelectedLang = new EventEmitter<string>();

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.selectedLang = this.translate.currentLang;
  }

  change(event: string) {
    this.changeSelectedLang.emit(event);
  }
}
