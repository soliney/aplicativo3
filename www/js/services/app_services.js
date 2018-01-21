(function(){
	"use strict";



	angular.module("myApp").value("Config",{
		getUrl:"http://cartorioalianca.com.br/api1/"
	});

	angular.module("myApp").service("Data", function($http, Config){
		//recuperação de dados
		this.getData = function(params){
			return $http({
					method:"POST",
					url:Config.getUrl+"apiRecupera.php",
					data:params,					
					headers:{
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8;'
					}
			});
		};
		

		//CADASTROS
		this.setData = function(dados){
			return $http({
					method:"POST",
					url:Config.getUrl+"apiCadastro.php",
					data:dados,					
					headers:{
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8;'
					}

					

			});
		};


		//UPDATE CADASTROS
		this.updateData = function(data){
			return $http({
					method:"POST",
					url:Config.getUrl+"apiUpdate.php",
					data:data,					
					headers:{
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8;'
					}

			});
		};


		//DELETA CADASTROS
	this.deleteData = function(id){
			return $http({
					method:"POST",
					url:Config.getUrl+"apideleta.php",
					data:id,					
					headers:{
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8;'
					}
			});
		};
		
	});

	angular.module("myApp").service("Soli", function($http, Config){
		//recuperação de dados
		this.getSoli = function(params){
			return $http({
					method:"POST",
					url:Config.getUrl+"apiRecuperaSeg.php",
					data:params,					
					headers:{
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8;'
					}
			});
		};

		//CADASTROS
		this.setSoli = function(dados){
			return $http({
					method:"POST",
					url:Config.getUrl+"apiSegmentacao.php",
					data:dados,					
					headers:{
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8;'
					}

					

			});
		};

		//UPDATE SEGMENTAÇÃO
		this.updateSegData = function(datas){
			return $http({
					method:"POST",
					url:Config.getUrl+"apiUpdateSeg.php",
					data:datas,					
					headers:{
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8;'
					}

			});
		};

		//DELETA CADASTROS SEGUIMENTAÇÃO
	this.deleteSoli = function(id_seg){
			return $http({
					method:"POST",
					url:Config.getUrl+"apideletaSeg.php",
					data:id_seg,					
					headers:{
						'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8;'
					}
			});
		};


		});
})();
