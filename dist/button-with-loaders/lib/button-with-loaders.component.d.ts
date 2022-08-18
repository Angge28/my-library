import { ButtonLoaderIconDirective } from './button.directive';
import * as i0 from "@angular/core";
export declare class ButtonWithLoadersComponent {
    private variant;
    loading: boolean;
    get classes(): string;
    icon: ButtonLoaderIconDirective;
    constructor(variant?: "primary" | "secondary" | "outline");
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonWithLoadersComponent, [{ attribute: "variant"; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonWithLoadersComponent, "button[anjButton]", never, { "loading": "loading"; }, {}, ["icon"], ["*"], false>;
}
