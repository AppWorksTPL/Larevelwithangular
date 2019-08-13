app.controller('catalogCtrl', function ($scope, $timeout, $mdSidenav) {


    $scope.add_product = function($data) {
    if (!productForm.$valid) {
      angular.element("[name='" + productForm.$name + "']").find('.ng-invalid:visible:first').focus();
      return false;
    }
  };


});
