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
