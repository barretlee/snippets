---
title: 响应式 meta 标签
---

```html
<meta name="viewport" content="width=device-width">
<meta name="viewport" content="width=device-width, initial-scale=1">
```
<table class="meta-tag-chart">
  <tbody>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>width</td>
      <td>The width of the virtual viewport of the device. </td>
    </tr>
    <tr>
      <td>device-width</td>
      <td>The physical width of the device's screen.</td>
    </tr>
    <tr>
      <td>height</td>
      <td>The  height of the "<em>virtual viewport</em>" of the device.</td>
    </tr>
    <tr>
      <td>device-height</td>
      <td>The  physical height of the device's screen.</td>
    </tr>
    <tr>
      <td>initial-scale</td>
      <td>The initial zoom when visiting the page. 1.0 does not zoom.</td>
    </tr>
    <tr>
      <td>minimum-scale</td>
      <td>The minimum amount the visitor can zoom on the page. 1.0 does not zoom.</td>
    </tr>
    <tr>
      <td>maximum-scale</td>
      <td>The maximum amount the visitor can zoom on the page. 1.0 does not zoom.</td>
    </tr>
    <tr>
      <td>user-scalable</td>
      <td>Allows the device to zoom in and out. Values are yes or no.</td>
    </tr>
  </tbody>
</table>
```css
@-ms-viewport{
width: device-width;
}
```