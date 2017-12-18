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
        $scope.forget_form = function($data) {
            
            var confirm = $mdDialog.confirm()
                        .title('Send OTP')
                        .textContent('We will send an OPT on this mobile No. Make sure this is a working mobile No.')
                        .ariaLabel('Lucky day')
                        //.targetEvent(ev)
                        .ok('Send')
                        .cancel('Cancle');

                        $mdDialog.show(confirm).then(function() {
                            $scope.status = 'You decided to get rid of your debt.';
                            console.log($data)
                        }, function() {
                            $scope.status = 'You decided to keep your debt.';
                        });
        };
});