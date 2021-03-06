var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', "../../utils/ui-event"], function (require, exports, aurelia_framework_1, ui_event_1) {
    "use strict";
    var UIOptionGroup = (function () {
        function UIOptionGroup(element) {
            this.element = element;
            this.value = '';
            this.name = '';
            this.cols = 'auto';
            if (element.hasAttribute('vertical'))
                element.classList.add('ui-vertical');
            this.name = "ui-optgroup-" + (UIOptionGroup.seed++);
        }
        UIOptionGroup.prototype.created = function (owningView, myView) { };
        UIOptionGroup.prototype.bind = function (bindingContext, overrideContext) {
            this.valueChanged(this.value);
        };
        UIOptionGroup.prototype.attached = function () {
            var els = this.element.querySelectorAll('input[type="radio"]');
            for (var i = 0; i < els.length; i++)
                els[i]['name'] = this.name;
        };
        UIOptionGroup.prototype.detached = function () { };
        UIOptionGroup.prototype.unbind = function () { };
        UIOptionGroup.prototype.valueChanged = function (newValue) {
            var _this = this;
            ui_event_1.UIEvent.queueTask(function () {
                var opt = _this.element.querySelector("input[value=\"" + newValue + "\"]");
                if (opt != null)
                    opt['checked'] = true;
            });
        };
        UIOptionGroup.prototype.changed = function ($event) {
            this.value = $event.detail;
        };
        UIOptionGroup.seed = 1;
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', Object)
        ], UIOptionGroup.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UIOptionGroup.prototype, "name", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UIOptionGroup.prototype, "cols", void 0);
        UIOptionGroup = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.inlineView('<template class="ui-input-group ui-option-group cols-\${cols}"><slot name="inputLabel"></slot><div class="ui-group-wrapper" change.trigger="changed($event)"><slot></slot></div></template>'),
            aurelia_framework_1.customElement('ui-option-group'), 
            __metadata('design:paramtypes', [Element])
        ], UIOptionGroup);
        return UIOptionGroup;
    }());
    exports.UIOptionGroup = UIOptionGroup;
    var UICheckbox = (function () {
        function UICheckbox(element) {
            this.element = element;
            this.checked = false;
            this.disabled = false;
            this.for = '';
            this.isDisabled = false;
            this.for = 'ui-checkbox-' + (UICheckbox.seed++);
        }
        UICheckbox.prototype.created = function (owningView, myView) { };
        UICheckbox.prototype.bind = function (bindingContext, overrideContext) {
            this.checked = isTrue(this.checked);
            this.disabledChanged(this.disabled);
        };
        UICheckbox.prototype.attached = function () { };
        UICheckbox.prototype.detached = function () { };
        UICheckbox.prototype.unbind = function () { };
        UICheckbox.prototype.disabledChanged = function (newValue) {
            this.element.classList[(this.disabled = isTrue(newValue)) ? 'add' : 'remove']('ui-disabled');
        };
        UICheckbox.prototype.disable = function (b) {
            this.element.classList[(this.isDisabled = (b || this.disabled)) ? 'add' : 'remove']('ui-disabled');
        };
        UICheckbox.seed = 1;
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', Object)
        ], UICheckbox.prototype, "checked", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UICheckbox.prototype, "disabled", void 0);
        UICheckbox = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.inlineView("<template class=\"ui-option ui-checkbox\"><input type=\"checkbox\" id.bind=\"for\" disabled.bind=\"disabled\" checked.bind=\"checked\"/>\n  <ui-glyph glyph.bind=\"checked?'ui-check-on':'ui-check-off'\"></ui-glyph>\n  <label for.bind=\"for\" class=\"ui-option-label\"><slot></slot></label></template>"),
            aurelia_framework_1.customElement('ui-checkbox'), 
            __metadata('design:paramtypes', [Element])
        ], UICheckbox);
        return UICheckbox;
    }());
    exports.UICheckbox = UICheckbox;
    var UIRadio = (function () {
        function UIRadio(element) {
            this.element = element;
            this.checked = false;
            this.name = '';
            this.value = '';
            this.disabled = false;
            this.for = '';
            this.isDisabled = false;
            this.for = 'ui-radio-' + (UIRadio.seed++);
        }
        UIRadio.prototype.created = function (owningView, myView) { };
        UIRadio.prototype.bind = function (bindingContext, overrideContext) {
            this.disabledChanged(this.disabled);
        };
        UIRadio.prototype.attached = function () { };
        UIRadio.prototype.detached = function () { };
        UIRadio.prototype.unbind = function () { };
        UIRadio.prototype.disabledChanged = function (newValue) {
            this.element.classList[(this.disabled = isTrue(newValue)) ? 'add' : 'remove']('ui-disabled');
        };
        UIRadio.prototype.disable = function (b) {
            this.element.classList[(this.isDisabled = (b || this.disabled)) ? 'add' : 'remove']('ui-disabled');
        };
        UIRadio.prototype.changed = function ($event) {
            $event.cancelBubble = true;
            $event.stopPropagation();
            return ui_event_1.UIEvent.fireEvent('change', this.element, this.value);
        };
        UIRadio.seed = 1;
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', Object)
        ], UIRadio.prototype, "checked", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UIRadio.prototype, "name", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UIRadio.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UIRadio.prototype, "disabled", void 0);
        UIRadio = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.inlineView("<template class=\"ui-option ui-radio\"><input type=\"radio\" name=\"${name}\" id.bind=\"for\" value.bind=\"value\" \n  disabled.bind=\"disabled\" checked.bind=\"checked\" change.trigger=\"changed($event)\"/>\n  <ui-glyph class=\"off\" glyph=\"ui-radio-off\"></ui-glyph><ui-glyph class=\"on\" glyph=\"ui-radio-on\"></ui-glyph>\n  <label for.bind=\"for\" class=\"ui-option-label\"><slot></slot></label></template>"),
            aurelia_framework_1.customElement('ui-radio'), 
            __metadata('design:paramtypes', [Element])
        ], UIRadio);
        return UIRadio;
    }());
    exports.UIRadio = UIRadio;
    var UISwitch = (function () {
        function UISwitch(element) {
            this.element = element;
            this.checked = false;
            this.value = '';
            this.size = 'auto';
            this.class = '';
            this.onLabel = 'on';
            this.offLabel = 'off';
            this.onValue = true;
            this.offValue = false;
            this.disabled = false;
            this.theme = 'default';
            this.for = '';
            this.isDisabled = false;
            this.for = 'ui-switch-' + (UISwitch.seed++);
            if (this.element.hasAttribute('primary'))
                this.theme = 'primary';
            else if (this.element.hasAttribute('secondary'))
                this.theme = 'secondary';
            else if (this.element.hasAttribute('dark'))
                this.theme = 'dark';
            else if (this.element.hasAttribute('info'))
                this.theme = 'info';
            else if (this.element.hasAttribute('danger'))
                this.theme = 'danger';
            else if (this.element.hasAttribute('success'))
                this.theme = 'success';
            else if (this.element.hasAttribute('warning'))
                this.theme = 'warning';
        }
        UISwitch.prototype.created = function (owningView, myView) { };
        UISwitch.prototype.bind = function (bindingContext, overrideContext) {
            this.checked = isTrue(this.checked) || (this.value == this.onValue);
            this.value = isTrue(this.checked) ? this.onValue : this.offValue;
            this.disabled = isTrue(this.disabled);
        };
        UISwitch.prototype.attached = function () { };
        UISwitch.prototype.detached = function () { };
        UISwitch.prototype.unbind = function () { };
        UISwitch.prototype.checkedChanged = function (newValue) {
            this.value = newValue ? this.onValue : this.offValue;
        };
        UISwitch.prototype.valueChanged = function (newValue) {
            this.checked = newValue == this.onValue;
        };
        UISwitch.prototype.disable = function (b) {
            this.element.classList[(this.isDisabled = (b || this.disabled)) ? 'add' : 'remove']('ui-disabled');
        };
        UISwitch.prototype.fireChange = function ($event) {
            $event.cancelBubble = true;
            $event.stopPropagation();
            this.value = this.checked ? this.onValue : this.offValue;
            return ui_event_1.UIEvent.fireEvent('change', this.element, this.value);
        };
        UISwitch.seed = 1;
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', Boolean)
        ], UISwitch.prototype, "checked", void 0);
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }), 
            __metadata('design:type', Object)
        ], UISwitch.prototype, "value", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UISwitch.prototype, "size", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UISwitch.prototype, "class", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UISwitch.prototype, "onLabel", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UISwitch.prototype, "offLabel", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UISwitch.prototype, "onValue", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UISwitch.prototype, "offValue", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UISwitch.prototype, "disabled", void 0);
        __decorate([
            aurelia_framework_1.bindable(), 
            __metadata('design:type', Object)
        ], UISwitch.prototype, "theme", void 0);
        UISwitch = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.inlineView("<template class=\"ui-option ui-switch-control\">\n<div class=\"ui-switch ${disabled?'ui-disabled':''} ${theme}\" css.bind=\"{width: size}\">\n  <input class=\"ui-switch-input\" type=\"checkbox\" id.bind=\"for\" disabled.bind=\"disabled\" checked.bind=\"checked\" change.trigger=\"fireChange($event)\"/>\n  <label class=\"ui-switch-inner\" for.bind=\"for\" data-on=\"${onLabel}\" data-off=\"${offLabel}\"></label>\n  <div class=\"ui-switch-handle\"></div>\n</div><label class=\"ui-switch-label\" for.bind=\"for\"><slot></slot></label>\n</template>"),
            aurelia_framework_1.customElement('ui-switch'), 
            __metadata('design:paramtypes', [Element])
        ], UISwitch);
        return UISwitch;
    }());
    exports.UISwitch = UISwitch;
});
