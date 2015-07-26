var MyList = angular.module('MyList', []);

MyList.controller('todosController', function ($scope) 
	{
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
		// criação de array de tarefas no formato JSON
		// array, deve-se usar []
		// dentros das {} usa-se .

		$scope.add	= function() //é possível também passar um indice, como no delete
		{			
			//1º criamos o objeto
			/* código mais, mas pode ser passado em uma única linha como no exemplo abaixo
			var todo = {
				'nome'		:$scope.nome,
				'prioridade':$scope.prioridade
			}
			*/
			//$scope.todos.push($scope.todo); //adicionar novo registro ao final da fila (push, comando JS)
			//$scope.todos.splice(0, 0, $scope.todo) //adicionar novo registro ao início da fila (splice, comando JS)
			$scope.todos.splice(0, 1, $scope.todo) //substituir o primeiro item da fila (splice, comando JS)
			//após incluir, limpamos os campos
			/*
			$scope.nome 	  = '';
			$scope.prioridade = '';
			*/
			$scope.todo = '';
		}

		//função para remover o registro
		$scope.delete	= function(i)
		{			
			$scope.todos.splice(i, 1); //a função vai remover o próprio elemento após a ação (splice comando JS)
		}
	});