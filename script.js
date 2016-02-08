var MyList = angular.module('MyList', ['ui.bootstrap', 'ngAlertMsgModule']);

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

angular.module('ngAlertMsgModule', ['ui.bootstrap'])
  .directive('ngAlertClick', ['$modal',
    function ($modal) {

      var ModalCtrl = function($scope, $modalInstance) {

        $scope.ok = function() {
		    $modalInstance.close();
        };

        $scope.cancel = function() {
          $modalInstance.dismiss('cancel');
        };
      };

      return {
        restrict: 'A',
        scope:{
          ngAlertClick:"&",
          item:"="
        },
        link: function(scope, element, attrs) {
          element.bind('click', function () {
            var message = attrs.ngAlertMsg || "<h4>Confirmar Exclusão ?</h4>";

            var modalHtml = '<div class="modal-body">' + message + '</div>';
            modalHtml += '<div class="modal-footer"><button class="btn btn-default btn-lg" ng-click="cancel()">Cancelar</button><button class="btn btn-danger btn-lg" ng-click="ok()">Deletar</button></div>';

            var modalInstance = $modal.open({
              template: modalHtml,
              controller: ModalCtrl
            });

            modalInstance.result.then(function () {
              	scope.ngAlertClick({item:scope.item});
            }, function() {
              	//
            });
          });
        }
      }
    }
  ]);
