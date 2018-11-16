(function() {
	var app = angular.module('universidadApp',[]);
	app.controller('listadoCtrl',['$scope',function($scope) {
		$scope.listado = ["Miguel Negrillo", "Osete Plastidécor", "Shane McMahon","Fernando Hierro"];

		$scope.listadoLuchadores = {
			luchadores: [{
				nombre: "Daniel Bryan",
				titulo: "WWE Championship",
				equipo: "Team Hell No"
			},
			{nombre: "Seth Rollins",
				titulo: "Intercontinental Championship",
				equipo: "The Shield"
			},
			{nombre: "Brock Lesnar",
				titulo: "Universal Championship",
				equipo: "-"
			}]
		}



	}])

})();
