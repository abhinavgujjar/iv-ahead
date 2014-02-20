myApp.controller('complexCtrl', function($scope) {
	$scope.state = '';

	$scope.canInputData = true;

	$scope.selectedCountry = 2;

	$scope.$watch('state', function(){
		switch($scope.state){
			case 'loading':{
				$scope.canInputData = false;
			}
			break;
			case 'reset':{
				$scope.canInputData = true;	
			}
			break;
		}
	});

	$scope.changeState = function(newState){
		$scope.selectedCountry++;
		$scope.state = newState;
	}
});