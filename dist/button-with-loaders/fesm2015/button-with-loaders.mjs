import * as i0 from '@angular/core';
import { Injectable, Directive, Component, Attribute, HostBinding, Input, ContentChild, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
export * from 'projects/button-with-loaders/src/lib/button.directive';

class ButtonWithLoadersService {
    constructor() { }
}
ButtonWithLoadersService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: ButtonWithLoadersService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ButtonWithLoadersService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: ButtonWithLoadersService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: ButtonWithLoadersService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ButtonLoaderIconDirective {
    constructor(tpl) {
        this.tpl = tpl;
    }
}
ButtonLoaderIconDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: ButtonLoaderIconDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
ButtonLoaderIconDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.1.3", type: ButtonLoaderIconDirective, selector: "ng-template[anjButtonLoader]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: ButtonLoaderIconDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "ng-template[anjButtonLoader]"
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; } });

class ButtonWithLoadersComponent {
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
        }], ctorParameters: function () {
        return [{ type: undefined, decorators: [{
                        type: Attribute,
                        args: ["variant"]
                    }] }];
    }, propDecorators: { loading: [{
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

class ButtonWithLoadersModule {
}
ButtonWithLoadersModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: ButtonWithLoadersModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonWithLoadersModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.1.3", ngImport: i0, type: ButtonWithLoadersModule, declarations: [ButtonWithLoadersComponent,
        ButtonLoaderIconDirective], imports: [CommonModule], exports: [ButtonWithLoadersComponent,
        ButtonLoaderIconDirective] });
ButtonWithLoadersModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: ButtonWithLoadersModule, imports: [CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: ButtonWithLoadersModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ButtonWithLoadersComponent,
                        ButtonLoaderIconDirective
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        ButtonWithLoadersComponent,
                        ButtonLoaderIconDirective
                    ]
                }]
        }] });

class CircleLineLoaderComponent {
}
CircleLineLoaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: CircleLineLoaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CircleLineLoaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.1.3", type: CircleLineLoaderComponent, selector: "anj-circle-lines-loader", ngImport: i0, template: ` <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    width="35px"
    height="35px"
  >
    <g transform="rotate(0 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.9090909090909091s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(32.72727272727273 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.8181818181818182s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(65.45454545454545 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.7272727272727273s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(98.18181818181819 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.6363636363636364s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(130.9090909090909 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.5454545454545454s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(163.63636363636363 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.45454545454545453s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(196.36363636363637 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.36363636363636365s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(229.0909090909091 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.2727272727272727s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(261.8181818181818 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.18181818181818182s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(294.54545454545456 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.09090909090909091s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(327.27272727272725 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
  </svg>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: CircleLineLoaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "anj-circle-lines-loader",
                    template: ` <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    width="35px"
    height="35px"
  >
    <g transform="rotate(0 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.9090909090909091s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(32.72727272727273 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.8181818181818182s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(65.45454545454545 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.7272727272727273s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(98.18181818181819 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.6363636363636364s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(130.9090909090909 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.5454545454545454s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(163.63636363636363 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.45454545454545453s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(196.36363636363637 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.36363636363636365s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(229.0909090909091 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.2727272727272727s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(261.8181818181818 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.18181818181818182s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(294.54545454545456 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.09090909090909091s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(327.27272727272725 50 50)">
      <rect
        x="48.5"
        y="22"
        rx="1.5"
        ry="2.52"
        width="6"
        height="12"
        fill="hsl(229, 76%, 66%)"
      >
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
  </svg>`
                }]
        }] });

class SearchLoaderComponent {
}
SearchLoaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: SearchLoaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SearchLoaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.1.3", type: SearchLoaderComponent, selector: "anj-search-loader", ngImport: i0, template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="20px"
    height="20px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <g transform="translate(50 50)">
      <g transform="scale(0.8)">
        <g transform="translate(-50 -50)">
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              repeatCount="indefinite"
              dur="1s"
              values="-20 -20;20 -20;0 20;-20 -20"
              keyTimes="0;0.33;0.66;1"
            ></animateTransform>
            <path
              fill="#ffffff"
              d="M44.19 26.158c-4.817 0-9.345 1.876-12.751 5.282c-3.406 3.406-5.282 7.934-5.282 12.751 c0 4.817 1.876 9.345 5.282 12.751c3.406 3.406 7.934 5.282 12.751 5.282s9.345-1.876 12.751-5.282 c3.406-3.406 5.282-7.934 5.282-12.751c0-4.817-1.876-9.345-5.282-12.751C53.536 28.033 49.007 26.158 44.19 26.158z"
            ></path>
            <path
              fill="#ffffff"
              d="M78.712 72.492L67.593 61.373l-3.475-3.475c1.621-2.352 2.779-4.926 3.475-7.596c1.044-4.008 1.044-8.23 0-12.238 c-1.048-4.022-3.146-7.827-6.297-10.979C56.572 22.362 50.381 20 44.19 20C38 20 31.809 22.362 27.085 27.085 c-9.447 9.447-9.447 24.763 0 34.21C31.809 66.019 38 68.381 44.19 68.381c4.798 0 9.593-1.425 13.708-4.262l9.695 9.695 l4.899 4.899C73.351 79.571 74.476 80 75.602 80s2.251-0.429 3.11-1.288C80.429 76.994 80.429 74.209 78.712 72.492z M56.942 56.942 c-3.406 3.406-7.934 5.282-12.751 5.282s-9.345-1.876-12.751-5.282c-3.406-3.406-5.282-7.934-5.282-12.751 c0-4.817 1.876-9.345 5.282-12.751c3.406-3.406 7.934-5.282 12.751-5.282c4.817 0 9.345 1.876 12.751 5.282 c3.406 3.406 5.282 7.934 5.282 12.751C62.223 49.007 60.347 53.536 56.942 56.942z"
            ></path>
          </g>
        </g>
      </g>
    </g>
  </svg>`, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: SearchLoaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "anj-search-loader",
                    template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="20px"
    height="20px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <g transform="translate(50 50)">
      <g transform="scale(0.8)">
        <g transform="translate(-50 -50)">
          <g>
            <animateTransform
              attributeName="transform"
              type="translate"
              repeatCount="indefinite"
              dur="1s"
              values="-20 -20;20 -20;0 20;-20 -20"
              keyTimes="0;0.33;0.66;1"
            ></animateTransform>
            <path
              fill="#ffffff"
              d="M44.19 26.158c-4.817 0-9.345 1.876-12.751 5.282c-3.406 3.406-5.282 7.934-5.282 12.751 c0 4.817 1.876 9.345 5.282 12.751c3.406 3.406 7.934 5.282 12.751 5.282s9.345-1.876 12.751-5.282 c3.406-3.406 5.282-7.934 5.282-12.751c0-4.817-1.876-9.345-5.282-12.751C53.536 28.033 49.007 26.158 44.19 26.158z"
            ></path>
            <path
              fill="#ffffff"
              d="M78.712 72.492L67.593 61.373l-3.475-3.475c1.621-2.352 2.779-4.926 3.475-7.596c1.044-4.008 1.044-8.23 0-12.238 c-1.048-4.022-3.146-7.827-6.297-10.979C56.572 22.362 50.381 20 44.19 20C38 20 31.809 22.362 27.085 27.085 c-9.447 9.447-9.447 24.763 0 34.21C31.809 66.019 38 68.381 44.19 68.381c4.798 0 9.593-1.425 13.708-4.262l9.695 9.695 l4.899 4.899C73.351 79.571 74.476 80 75.602 80s2.251-0.429 3.11-1.288C80.429 76.994 80.429 74.209 78.712 72.492z M56.942 56.942 c-3.406 3.406-7.934 5.282-12.751 5.282s-9.345-1.876-12.751-5.282c-3.406-3.406-5.282-7.934-5.282-12.751 c0-4.817 1.876-9.345 5.282-12.751c3.406-3.406 7.934-5.282 12.751-5.282c4.817 0 9.345 1.876 12.751 5.282 c3.406 3.406 5.282 7.934 5.282 12.751C62.223 49.007 60.347 53.536 56.942 56.942z"
            ></path>
          </g>
        </g>
      </g>
    </g>
  </svg>`
                }]
        }] });

class LoadersModule {
}
LoadersModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: LoadersModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LoadersModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.1.3", ngImport: i0, type: LoadersModule, declarations: [SearchLoaderComponent,
        CircleLineLoaderComponent], exports: [SearchLoaderComponent,
        CircleLineLoaderComponent] });
LoadersModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: LoadersModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.3", ngImport: i0, type: LoadersModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SearchLoaderComponent,
                        CircleLineLoaderComponent
                    ],
                    exports: [
                        SearchLoaderComponent,
                        CircleLineLoaderComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of button-with-loaders
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonWithLoadersComponent, ButtonWithLoadersModule, ButtonWithLoadersService, CircleLineLoaderComponent, LoadersModule, SearchLoaderComponent };
//# sourceMappingURL=button-with-loaders.mjs.map
