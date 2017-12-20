//alert("config controller loaded"); 
app.controller('configCtrl', function($scope, $mdDialog) {
    $scope.add_category = function(form,ev){
		var firstError = null;
			if (form.$invalid) 
			{
				var field = null, firstError = null;
				for (field in form) 
				{
					if (field[0] != '$')
					{
						if (firstError === null && !form[field].$valid) 
						{
							firstError = form[field].$name;
						}
						if (form[field].$pristine) 
						{
							form[field].$dirty = true;
						}
					}
				}
				angular.element('.ng-invalid[name=' + firstError + ']').focus();
				return;
			}else{
				
			    var confirm = $mdDialog.confirm()
			          .title('Add New Category')
			          .textContent('Would you like to add new categoty ?')
			          .ariaLabel('Add Category')
			          //.targetEvent(ev)
			          .ok('YES')
			          .cancel('NO');
			    $mdDialog.show(confirm).then(function() {
			    	console.log(form)
			    	$scope.$watch('files.length',function(newVal,oldVal){
				            console.log($scope.files);
				        });
			      //$scope.status = 'You decided to get rid of your debt.';
			      //console.log('add new categoty');
			    }, function() {
			      //$scope.status = 'You decided to keep your debt.';
			      //console.log('not add new categoty');
			    });
			}
    }
});