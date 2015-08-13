angular.module('TestApp', []);
angular.module('TestApp').controller('BaseCtrl', ['$scope', function ($scope){

io.socket.get('/pilot', function (data){
	$scope.things = data;
	$scope.$apply();
})

io.socket.on('pilot', function (event){
	switch(event.verb){
	case 'created':
	$scope.things.push(event.data);
	$scope.apply()
	break;
	}


}]);

/*  $scope.things = [{

    id: 1,
    name: 'foo'
	},

	{
	id: 2,
    name: 'book'
	},
	{
	id: 3,
    name: 'notepad'
	},
	{
	id: 4,
	name: 'shampoo'
  }];*/
