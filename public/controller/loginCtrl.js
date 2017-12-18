app.controller('loginCtrl', function($scope, $mdDialog,$rootScope) {


        $scope.login_form = function($data) {
          if(LoginService.login($data.email, $data.password)) {
            $rootScope.email = $scope.email;
            $scope.error = '';
            $scope.username = '';
            $scope.password = '';
            $state.transitionTo('home');
          } else {
            $scope.error = "Incorrect username/password !";
          }
        };
        $scope.signup_form = function($data) {
            console.log($data)
        };
});