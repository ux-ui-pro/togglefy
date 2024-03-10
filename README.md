<br>
<div align="center">

# togglefy
Togglefy is designed to add interactivity to web pages by toggling the classes of specified elements.

[![npm](https://img.shields.io/npm/v/togglefy.svg?colorB=brightgreen)](https://www.npmjs.com/package/togglefy)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/togglefy.svg)](https://github.com/ux-ui-pro/togglefy)
[![NPM Downloads](https://img.shields.io/npm/dm/togglefy.svg?style=flat)](https://www.npmjs.org/package/togglefy)

<sup>400B gzipped</sup>

### <a href="https://codepen.io/ux-ui/pen/QWPNwNo">Demo</a>

</div>

<br>

&#10148; **Install**
```
yarn add togglefy
```
<br>

&#10148; **Import**
```javascript
import Togglefy from 'togglefy';
```
<br>

&#10148; **Usage**
```javascript
const togglefy = new Togglefy({
  targetSelector: '.target',
  triggerSelector: '.trigger',
  toggleClassName: 'toggle',
  exclusive: false,
});

togglefy.init();
```
<br>

&#10148; **Options**

| Option            |           Type            |  Default   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|:------------------|:-------------------------:|:----------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `targetSelector`  | String &vert; HTMLElement | `.target`  | Selector of target elements, whose classes will be switched when the trigger is fired. It can be any valid CSS selector. If HTMLElement is passed, it is used, otherwise the elements are searched by the passed selector.                                                                                                                                                                                                                        |
| `triggerSelector` | String &vert; HTMLElement | `.trigger` | Selector of elements-triggers, when clicking on which will switch the class of the target elements. Just like targetSelector, it can be any valid CSS selector.                                                                                                                                                                                                                                                                                   |
| `toggleClassName` |          String           |  `toggle`  | The name of the class that will be added and removed from the target elements when the trigger is fired. This allows you to control the styling of element state via CSS.                                                                                                                                                                                                                                                                         |
| `exclusive`       |          Boolean          |  `false`   | A logical value indicating the exclusivity of class switching. If set to true, when a class is switched on one element, that class will be removed from all other target elements, ensuring that the class is only applied to one element at the time. This is useful when you only want one element on the page to have an active state. The default value is false, which allows the class to be applied to multiple elements at the same time. |
<br>

&#10148; **License**

togglefy is released under MIT license.
