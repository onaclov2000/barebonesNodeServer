// Angularjs service
/*
message.js v0.0.1
message angular service
Written by Tyson Bailey
*/
angular.module('message', []).factory('$message', ['$http',
function($http) {
return {
create: function(params) {
var method = 'POST';
var url = "http://localhost:3000/ReceiveJSON";
console.log($.param(params));
return $http({
method: method,
url : url,
data: $.param(params),
headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});
}
};
}
]); 
