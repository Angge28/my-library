import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: "ng-template[anjButtonLoader]"
})
export class ButtonLoaderIconDirective {

  constructor(public tpl: TemplateRef<any>) {}
  
}