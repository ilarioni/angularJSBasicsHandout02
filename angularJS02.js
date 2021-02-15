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
