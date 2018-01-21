(function(){
	"use strict";
	angular.module("myApp").config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/menu/home");

		$stateProvider

		.state("menu", {
			url:"/menu",
			templateUrl:"views/menu.html",
			abstract: true,
			controller: "initCtrl"
		})


		.state("menu.home", {
			url:"/home",
			views:{
				'menuContent':{
					templateUrl:"views/home.html"
				}
			}
		})

		.state("menu.respostas", {
			url:"/respostas",
			views:{
				'menuContent':{
					templateUrl:"views/respostas.html",
				}
			}
		})

		.state("menu.perguntas", {
			url:"/perguntas",
			views:{
				'menuContent':{
					templateUrl:"views/perguntas.html",
				}
			}
		})	

		.state("menu.perguntas_seq", {
			url:"/perguntas_seq",
			views:{
				'menuContent':{
					templateUrl:"views/perguntas_seq.html",
				}
			}
		})	

		.state("menu.respostas_seg", {
			url:"/respostas_seg",
			views:{
				'menuContent':{
					templateUrl:"views/respostas_seg.html",
				}
			}
		})

		.state("menu.cadastro_2", {
			url:"/cadastro_2",
			views:{
				'menuContent':{
					templateUrl:"views/cadastro_2.html",
				}
			}
		})

		.state("menu.perfil", {
			url:"/perfil",
			views:{
				'menuContent':{
					templateUrl:"views/perfil.html",
				}
			}
		})


				.state("menu.perfil_seg", {
			url:"/perfil_seg",
			views:{
				'menuContent':{
					templateUrl:"views/perfil_seg.html",
				}
			}
		})

		

		.state("menu.cadastro", {
			url:"/cadastro",
			views:{
				'menuContent':{
					templateUrl:"views/cadastro.html",
				}
			}
		})

		.state("menu.editar", {
			url:"/editar",
			views:{
				'menuContent':{
					templateUrl:"views/editar.html",
				}
			}
		})
		

		.state("menu.home.cadastro", {
			url:"/cadastro",
			templateUrl:"views/cadastro.html"

		});				


	});
})();
