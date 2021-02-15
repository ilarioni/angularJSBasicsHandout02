// AngularJS Modules

// Angular JS module defines an application. module is a container for the application controllers. controllers always belong to a module.

// <div ng-app="myApp">...</div>
// <script>"belows text here"</script>
var app = angular.module("myApp", []);
// adding controller to application and refer to the controller with the ng-controller
/*
<div ng-app="myApp" ng-controller="myCtrl">
{{ firstName + " " + lastName }}
</div>

<script>
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});
</script>
*/

/*
<div ng-app="myApp" w3-test-directive></div>

<script>
var ap
p = angular.module("myApp", []);
app.directive("w3TestDirective", function() {
    return {
        template : "I was made in a directive constructor!"
    };
});
</script>
*/ 

// In this example, "myApp.js" contains an application module definition, while "myCtrl.js" contains the controller:

/*
<div ng-app="myApp" ng-controller="myCtrl">
{{ firstName + " " + lastName }}
</div>

<script src="myApp.js"></script>
<script src="myCtrl.js"></script>
*/

// While it is common in HTML applications to place scripts at the end of the <body> element, it is recommended that you load the AngularJS library either in the <head> or at the start of the <body>.

// This is because calls to angular.module can only be compiled after the library has been loaded.

/*
<!DOCTYPE html>
<html>
<body>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>

<div ng-app="myApp" ng-controller="myCtrl">
{{ firstName + " " + lastName }}
</div>

<script>
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
  $scope.firstName = "John";
  $scope.lastName = "Doe";
});
</script>

</body>
</html>
*/

// Angular JS Directives

// AngularJS directives are extended HTML attributes with the prefix ng-.
// The ng-app directive initializes an AngularJS application.
// The ng-init directive initializes application data.
// The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.

// The ng-app directive also tells AngularJS that the <div> element is the "owner" of the AngularJS application.
/*
<div ng-app="" ng-init="firstName='John'">

<p>Input something in the input box:</p>
<p>Name: <input type="text" ng-model="first"></p>
<p>You wrote: {{ first }}</p>

</div>
*/

// Cost Calculator
/*
<div data-ng-app="" data-ng-init="quantity=2;price=5">

<h2>Cost Calculator</h2>

Quantity: <input type="number" ng-model="quantity">
<br>
Price: <input type="number" ng-model="price">

<p><b>Total in dollar:</b> {{quantity * price}}</p>

</div>
*/

// looping with ng-repeat:
/*
<div ng-app="" ng-init="names=['Jani','Hege','Kai']">
  <p>Looping with ng-repeat:</p>
  <ul>
    <li ng-repeat="x in names">
      {{ x }}
    </li>
  </ul>
</div>
*/

// The ng-repeat directive used on an array of objects:
/*
<div ng-app="" ng-init="names=[
{name:'Jani',country:'Norway'},
{name:'Hege',country:'Sweden'},
{name:'Kai',country:'Denmark'}]">

<p>Looping with objects:</p>
<ul>
  <li ng-repeat="x in names">
  {{ x.name + ', ' + x.country }}</li>
</ul>

</div>
*/
