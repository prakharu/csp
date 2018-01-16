import { Directive,ElementRef,AfterViewInit } from '@angular/core';
import { TestService } from './test.service';
@Directive({ selector: '[test]' })
export class TestDirective implements AfterViewInit{
        constructor(private el:ElementRef,
               private empservice:TestService) {}
        ngAfterViewInit(){
               let content:string = this.el.nativeElement.innerHTML;
               if(!content){//if there is no content,show message getting from EmptyTextService
                         this.el.nativeElement.innerHTML =  this.empservice.get();
               }
         }
}