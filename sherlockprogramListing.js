  var app = angular.module('programListing',[]);
app.directive('programListing', function(){
return {
  restrict: 'E',
  scope: {
  name:'listing' },
  templateUrl:'js/directives/programListing.html'
};  
});


