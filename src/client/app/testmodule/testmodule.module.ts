import { NgModule, } from '@angular/core';
import { TestDirective } from './test.directive';
import { TestService } from './test.service';
import { TestComponent } from './testmodule.index';
@NgModule({
    imports: [],
    exports: [TestDirective, TestComponent],
    declarations: [TestDirective, TestComponent],
    providers: [TestService],
})
export class TestModule { }