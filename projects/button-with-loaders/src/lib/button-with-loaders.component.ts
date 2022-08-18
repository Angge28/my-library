import { Attribute, Component, ContentChild, HostBinding, Input } from '@angular/core';
import { ButtonLoaderIconDirective } from './button.directive';

@Component({
  //selector: 'lib-button-with-loaders',
  selector: "button[anjButton]",
  template: `
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
  `,
   styleUrls: ["./button.component.css"]
})
export class ButtonWithLoadersComponent {
  @HostBinding("class.loading")
  @HostBinding("attr.aria-disabled")
  @Input()
  loading = false;

  @HostBinding("class")
  get classes(): string {
    return this.variant || "primary";
  }

  @ContentChild(ButtonLoaderIconDirective)
  icon!: ButtonLoaderIconDirective;

  constructor(
    @Attribute("variant")
    private variant: "primary" | "secondary" | "outline" = "primary"
  ) {}
}

