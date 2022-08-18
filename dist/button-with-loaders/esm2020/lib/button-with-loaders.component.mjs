import { Attribute, Component, ContentChild, HostBinding, Input } from '@angular/core';
import { ButtonLoaderIconDirective } from './button.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ButtonWithLoadersComponent {
    constructor(variant = "primary") {
        this.variant = variant;
        this.loading = false;
    }
    get classes() {
        return this.variant || "primary";
    }
}
ButtonWithLoadersComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: ButtonWithLoadersComponent, deps: [{ token: "variant", attribute: true }], target: i0.ɵɵFactoryTarget.Component });
ButtonWithLoadersComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.1.3", type: ButtonWithLoadersComponent, selector: "button[anjButton]", inputs: { loading: "loading" }, host: { properties: { "class.loading": "this.loading", "attr.aria-disabled": "this.loading", "class": "this.classes" } }, queries: [{ propertyName: "icon", first: true, predicate: ButtonLoaderIconDirective, descendants: true }], ngImport: i0, template: `
   <div class="label"><ng-content></ng-content></div>
    <div class="loader">
      <ng-container
        *ngTemplateOutlet="icon?.tpl || defaultLoader"
      ></ng-container>
    </div>
    <ng-template #defaultLoader>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="margin: auto; background: none; display: block; shape-rendering: auto;"
        width="25px"
        height="25px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#fff"
          stroke-width="7"
          r="37"
          stroke-dasharray="174.35839227423352 60.119464091411174"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
    </ng-template>
  `, isInline: true, styles: [":host{--primary: hsl(229, 76%, 66%);--primary-dark: hsl(229, 76%, 62%);--primary-disabled: hsl(229, 56%, 80%);--secondary: hsl(0, 0%, 88%);--secondary-dark: hsl(0, 0%, 82%);--secondary-disabled: hsl(0, 0%, 90%);position:relative;padding:.5rem 2rem;font-size:14px;border:1px solid transparent;background:none;border-radius:8px;cursor:pointer;outline:none;font-family:Poppins,sans-serif;font-weight:500}.label{opacity:1;transform:translateY(0);transition:transform .2s cubic-bezier(.17,.67,.79,1.03)}.loader{position:absolute;top:0;left:0;width:100%;height:100%;display:grid;place-items:center;opacity:0;transform:translateY(5px);transition:transform .2s ease-in-out}:host(.primary){background:var(--primary);color:#fff}:host(.primary:hover){background:var(--primary-dark)}:host(.primary:not(.loading):focus){background:var(--primary-dark);box-shadow:inset 0 0 0 1.5px #fff,0 0 0 2px #667fea}:host(.primary.loading){pointer-events:none;background:var(--primary-disabled)}:host(.secondary){background:var(--secondary);color:#444}:host(.secondary:hover){background:var(--secondary-dark)}:host(.secondary:not(.loading):focus){box-shadow:inset 0 0 0 1.5px var(--primary-dark),0 0 0 2px var(--secondary)}:host(.secondary.loading){pointer-events:none;background:var(--secondary-disabled);color:#999}:host(.outline){border-color:#ccc;color:#444}:host(.outline:hover){border-color:#b3b3b3;background:hsl(0,0%,95%)}:host(.outline:not(.loading):focus){border-color:var(--primary-dark);box-shadow:inset 0 0 0 1px var(--primary-dark)}:host(.loading) .loader{opacity:1;transform:translateY(0) scale(1)}:host(.loading) .label{opacity:0;transform:translateY(-10px)}\n"], dependencies: [{ kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: ButtonWithLoadersComponent, decorators: [{
            type: Component,
            args: [{ selector: "button[anjButton]", template: `
   <div class="label"><ng-content></ng-content></div>
    <div class="loader">
      <ng-container
        *ngTemplateOutlet="icon?.tpl || defaultLoader"
      ></ng-container>
    </div>
    <ng-template #defaultLoader>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="margin: auto; background: none; display: block; shape-rendering: auto;"
        width="25px"
        height="25px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#fff"
          stroke-width="7"
          r="37"
          stroke-dasharray="174.35839227423352 60.119464091411174"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
    </ng-template>
  `, styles: [":host{--primary: hsl(229, 76%, 66%);--primary-dark: hsl(229, 76%, 62%);--primary-disabled: hsl(229, 56%, 80%);--secondary: hsl(0, 0%, 88%);--secondary-dark: hsl(0, 0%, 82%);--secondary-disabled: hsl(0, 0%, 90%);position:relative;padding:.5rem 2rem;font-size:14px;border:1px solid transparent;background:none;border-radius:8px;cursor:pointer;outline:none;font-family:Poppins,sans-serif;font-weight:500}.label{opacity:1;transform:translateY(0);transition:transform .2s cubic-bezier(.17,.67,.79,1.03)}.loader{position:absolute;top:0;left:0;width:100%;height:100%;display:grid;place-items:center;opacity:0;transform:translateY(5px);transition:transform .2s ease-in-out}:host(.primary){background:var(--primary);color:#fff}:host(.primary:hover){background:var(--primary-dark)}:host(.primary:not(.loading):focus){background:var(--primary-dark);box-shadow:inset 0 0 0 1.5px #fff,0 0 0 2px #667fea}:host(.primary.loading){pointer-events:none;background:var(--primary-disabled)}:host(.secondary){background:var(--secondary);color:#444}:host(.secondary:hover){background:var(--secondary-dark)}:host(.secondary:not(.loading):focus){box-shadow:inset 0 0 0 1.5px var(--primary-dark),0 0 0 2px var(--secondary)}:host(.secondary.loading){pointer-events:none;background:var(--secondary-disabled);color:#999}:host(.outline){border-color:#ccc;color:#444}:host(.outline:hover){border-color:#b3b3b3;background:hsl(0,0%,95%)}:host(.outline:not(.loading):focus){border-color:var(--primary-dark);box-shadow:inset 0 0 0 1px var(--primary-dark)}:host(.loading) .loader{opacity:1;transform:translateY(0) scale(1)}:host(.loading) .label{opacity:0;transform:translateY(-10px)}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Attribute,
                    args: ["variant"]
                }] }]; }, propDecorators: { loading: [{
                type: HostBinding,
                args: ["class.loading"]
            }, {
                type: HostBinding,
                args: ["attr.aria-disabled"]
            }, {
                type: Input
            }], classes: [{
                type: HostBinding,
                args: ["class"]
            }], icon: [{
                type: ContentChild,
                args: [ButtonLoaderIconDirective]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXdpdGgtbG9hZGVycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9idXR0b24td2l0aC1sb2FkZXJzL3NyYy9saWIvYnV0dG9uLXdpdGgtbG9hZGVycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQTZDL0QsTUFBTSxPQUFPLDBCQUEwQjtJQWNyQyxZQUVVLFVBQStDLFNBQVM7UUFBeEQsWUFBTyxHQUFQLE9BQU8sQ0FBaUQ7UUFabEUsWUFBTyxHQUFHLEtBQUssQ0FBQztJQWFiLENBQUM7SUFYSixJQUNJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLElBQUksU0FBUyxDQUFDO0lBQ25DLENBQUM7O3VIQVRVLDBCQUEwQixrQkFleEIsU0FBUzsyR0FmWCwwQkFBMEIscVBBV3ZCLHlCQUF5QixnREFuRDdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUNUOzJGQUdVLDBCQUEwQjtrQkEzQ3RDLFNBQVM7K0JBRUUsbUJBQW1CLFlBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUNUOzswQkFrQkUsU0FBUzsyQkFBQyxTQUFTOzRDQVh0QixPQUFPO3NCQUhOLFdBQVc7dUJBQUMsZUFBZTs7c0JBQzNCLFdBQVc7dUJBQUMsb0JBQW9COztzQkFDaEMsS0FBSztnQkFJRixPQUFPO3NCQURWLFdBQVc7dUJBQUMsT0FBTztnQkFNcEIsSUFBSTtzQkFESCxZQUFZO3VCQUFDLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF0dHJpYnV0ZSwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnV0dG9uTG9hZGVySWNvbkRpcmVjdGl2ZSB9IGZyb20gJy4vYnV0dG9uLmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICAvL3NlbGVjdG9yOiAnbGliLWJ1dHRvbi13aXRoLWxvYWRlcnMnLFxuICBzZWxlY3RvcjogXCJidXR0b25bYW5qQnV0dG9uXVwiLFxuICB0ZW1wbGF0ZTogYFxuICAgPGRpdiBjbGFzcz1cImxhYmVsXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJsb2FkZXJcIj5cbiAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJpY29uPy50cGwgfHwgZGVmYXVsdExvYWRlclwiXG4gICAgICA+PC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0TG9hZGVyPlxuICAgICAgPHN2Z1xuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgc3R5bGU9XCJtYXJnaW46IGF1dG87IGJhY2tncm91bmQ6IG5vbmU7IGRpc3BsYXk6IGJsb2NrOyBzaGFwZS1yZW5kZXJpbmc6IGF1dG87XCJcbiAgICAgICAgd2lkdGg9XCIyNXB4XCJcbiAgICAgICAgaGVpZ2h0PVwiMjVweFwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiXG4gICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZFwiXG4gICAgICA+XG4gICAgICAgIDxjaXJjbGVcbiAgICAgICAgICBjeD1cIjUwXCJcbiAgICAgICAgICBjeT1cIjUwXCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgc3Ryb2tlPVwiI2ZmZlwiXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiN1wiXG4gICAgICAgICAgcj1cIjM3XCJcbiAgICAgICAgICBzdHJva2UtZGFzaGFycmF5PVwiMTc0LjM1ODM5MjI3NDIzMzUyIDYwLjExOTQ2NDA5MTQxMTE3NFwiXG4gICAgICAgID5cbiAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybVxuICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiXG4gICAgICAgICAgICB0eXBlPVwicm90YXRlXCJcbiAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXG4gICAgICAgICAgICBkdXI9XCIxc1wiXG4gICAgICAgICAgICB2YWx1ZXM9XCIwIDUwIDUwOzM2MCA1MCA1MFwiXG4gICAgICAgICAgICBrZXlUaW1lcz1cIjA7MVwiXG4gICAgICAgICAgPjwvYW5pbWF0ZVRyYW5zZm9ybT5cbiAgICAgICAgPC9jaXJjbGU+XG4gICAgICA8L3N2Zz5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxuICAgc3R5bGVVcmxzOiBbXCIuL2J1dHRvbi5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbldpdGhMb2FkZXJzQ29tcG9uZW50IHtcbiAgQEhvc3RCaW5kaW5nKFwiY2xhc3MubG9hZGluZ1wiKVxuICBASG9zdEJpbmRpbmcoXCJhdHRyLmFyaWEtZGlzYWJsZWRcIilcbiAgQElucHV0KClcbiAgbG9hZGluZyA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZyhcImNsYXNzXCIpXG4gIGdldCBjbGFzc2VzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFudCB8fCBcInByaW1hcnlcIjtcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGQoQnV0dG9uTG9hZGVySWNvbkRpcmVjdGl2ZSlcbiAgaWNvbiE6IEJ1dHRvbkxvYWRlckljb25EaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEF0dHJpYnV0ZShcInZhcmlhbnRcIilcbiAgICBwcml2YXRlIHZhcmlhbnQ6IFwicHJpbWFyeVwiIHwgXCJzZWNvbmRhcnlcIiB8IFwib3V0bGluZVwiID0gXCJwcmltYXJ5XCJcbiAgKSB7fVxufVxuXG4iXX0=