var MyList = angular.module('MyList', []);

MyList.controller('todosController', function ($scope) {
	$scope.todos = [
		{
			'nome'		:'English',
			'prioridade': 1,
		},
		{
			'nome'		:'IC',
			'prioridade': 2
		},
		{
			'nome'		:'AngularJS',
			'prioridade': 1
		},
		{
			'nome'		:'Freelas',
			'prioridade': 2
		}
	];
	$scope.add	= function() {
		$scope.todos.splice(0, 0, $scope.todo)
		$scope.todo = '';
	}

	$scope.delete	= function(i) {
		$scope.todos.splice(i, 1);
	}
});
