import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwitchLanguageComponent } from '../switch-language/switch-language.component';
import { SidebarComponent } from './sidebar.component';

import { AngularMaterialCommonModule } from '../../models/angular-material-common.module';

@NgModule({
  declarations: [SidebarComponent, SwitchLanguageComponent],
  imports: [CommonModule, RouterModule, AngularMaterialCommonModule],
  exports: [SidebarComponent, SwitchLanguageComponent],
})
export class SidebarModule {}
