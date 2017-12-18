//alert("config controller loaded"); 
app.controller('configCtrl', function($scope, $mdDialog) {
    $scope.submitFrom = function() {
        console.log($scope.user);
        $error = false;
        if ($scope.user.firstName == "") {
            $error = true;
        } else if ($scope.user.lastName == "") {
            $error = true;
        } else if ($scope.user.address == "") {
            $error = true;
        } else if ($scope.user.address2 == "") {
            $error = true;
        } else if ($scope.user.city == "") {
            $error = true;
        } else if ($scope.user.state == "") {
            $error = true;
        } else if ($scope.user.postalCode == "") {
            $error = true;
        } else if ($scope.user.image == "") {
            $error = true;
        } else if ($scope.user.biography == "") {
            $error = true;
        }
        if ($error == true) {
            console.log($scope.user);
            /*
                  // Appending dialog to document.body to cover sidenav in docs app
                  var confirm = $mdDialog.confirm()
                        .title('Would you like to Submit Form?')
                        .textContent('By submitting the form you are agree the term and condiations ...')
                        .ariaLabel('Lucky day')
                        .targetEvent(ev)
                        .ok('Yes !')
                        .cancel('No !');

                  $mdDialog.show(confirm).then(function() {
                    $scope.status = 'You decided to get rid of your debt.';
                  }, function() {
                    $scope.status = 'You decided to keep your debt.';
                  });
            */
        }
    }
    /*

        $scope.showConfirm = function(ev) {
          // Appending dialog to document.body to cover sidenav in docs app
          var confirm = $mdDialog.confirm()
                .title('Would you like to Submit Form?')
                .textContent('By submitting the form you are agree the term and condiations ...')
                .ariaLabel('Lucky day')
                .targetEvent(ev)
                .ok('Yes !')
                .cancel('No !');

          $mdDialog.show(confirm).then(function() {
            $scope.status = 'You decided to get rid of your debt.';
          }, function() {
            $scope.status = 'You decided to keep your debt.';
          });
        };
    */
    //file
    $scope.$watch('files.length', function(newVal, oldVal) {
        console.log($scope.files);
    });
});