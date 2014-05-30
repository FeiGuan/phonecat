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
Under <b>/test/unit</b> add Jasmine unit test cases<br />
Under <b>/test</b> add <b>karma.conf.js</b>.
run
```javascript
npm test
```
to display unit test results.

###-3. Add search text field for table with a filter <br />
```html
<input ng-model="query">
```
```html
<ul>
	<li ng-repeat="phone in phones | filter: query">{{phone.name}}</li>
</ul>
```

###-4. E2E Tests<br />
To test DOM manipulation, E2E tests work.<br />
In <b>test/e2e/scenarios.js</b><br />
for the setup,
```javascript
browser.get('app/index.html');
```
to get elements of model from ng-repeat
```javascript
var phoneList = element.all(by.repeater('phone in phones'));
```
to get element from ng-model
```javascript
var query = element(by.model('query'));
```
to get title of html
```javascript
browser.getTitle()
```
to send values to ng-model
```javascript
query.sendKeys('nexus');
```
to clear value of ng-model
```javascript
query.clear();
```
<br /><br />
Add protractor API to <b>/test/</b><br />
Add e2e test to <b>/test/e2e/</b><br />
to run e2e test: <br />
start the server first
```javascript
npm start
```
```javascript
npm run protractor
```