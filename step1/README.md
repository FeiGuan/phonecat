#phonecat-step1
---
###-1. Add controller<br />
In <b>/js/controllers.js</b>, add
```javascript
var phonecatApp = angular.module('phonecatApp', []);
```
where <code>phonecatApp</code> is the app module name, it should be the same with <code>ng-app</code> attribute.
```javascript
phonecatApp.controller('PhoneListCtrl', function($scope) {

});
```
PhoneListCtrl is the name of controller, it should be the same with <code>ng-controller</code> attribute. In the controller, you can define the models binded with templates.

###-2. Tests<br />
