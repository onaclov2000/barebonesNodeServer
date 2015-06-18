angular.module('myapp', ['message'])
.controller('myController', ['$scope', '$message', function($scope, $message) {
$scope.doThing = function(){
$message.create({"name" : "tyson", "status" : "alive"});
};
}]); 
