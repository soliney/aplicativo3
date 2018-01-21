(function() {
	"use strict";

	angular.module("myApp").controller("initCtrl", function($scope, Soli, Data, $filter, $ionicPopup, $ionicModal, $location, DBLocal){
		$scope.home = "Cartório Aliança";
		$scope.home1 = "Acesso Rápido às Pesquisas";
		$scope.respostas = "Resultados";
		$scope.pesquisa1 = "Pesquisa de Satisfação";
		$scope.pesquisa2 = "A sua opnião é importante para nós!";
		$scope.pesquisa3 = "Escolha uma opção de cada pergunta e depois aperte em enviar para avalia nosso atendimento e serviços.";
		$scope.pergunta1 = "1- A pessoa que atendeu você foi rápida e clara?";
		$scope.pergunta2 = "2- A pessoa que atendeu você foi educada?";
		$scope.pergunta3 = "3- Como você avalia o jeito que o cartório pede, recebe e emite documentos? (Segurança Jurídica)";
		$scope.pergunta4 = "4- Como você avalia a organização do cartório?";
		$scope.pergunta5 = "5- Como você avalia a limpeza do cartório?";
		$scope.pergunta6 = "6- Como você avalia as campanhas e ações sociais do cartório? (Natal, Plantio de Árvores, Campanhas de Saúde)";
		$scope.identidade = "DIGITE SEU NOME NO CAMPO ABAIXO CASO QUEIRA SE IDENTIFICAR, OU APENAS DEIXE EM BRANCO"
		$scope.identidade1 = "DIGITE SEU NOME, TELEFONE E EMAIL NOS CAMPOS ABAIXO CASO QUEIRA SE IDENTIFICAR, OU APENAS DEIXE-OS EM BRANCO"
				$scope.pesquisa_seq1 = "Pesquisa de Segmentação";
		$scope.pesquisa_seq2 = "Queremos saber quem você é, para ainda melhor servi-lo!";
		$scope.pesquisa_seq3 = "Escolha uma opção na pergunta que mais nos conte sobre você!.";
		$scope.pergunta_seq1 = "1- Qual sua escolaridade?";
		$scope.pergunta_seq2 = "2- Você tem renda familiar de:";
		$scope.pergunta_seq3 = "3- Como você acessa a internet?";
		$scope.pergunta_seq4 = "4- Onde você trabalha?";
		$scope.pergunta_seq5 = "5- Com que frequência você precisa do cartório?";
		$scope.pergunta_seq6 = "6- Como você mora?";	

		$scope.resposta_pesq = "Resultado da Pesquisa de Satisfação";
		$scope.resposta_seg = "Resultado da Pesquisa de Segmentação";
		$scope.perfil = "Perfil do Pesquisado em Satisfação";
		$scope.perfil2 = "Perfil do Pesquisado em Segmentação";		
		$scope.today = new Date();
		$scope.contatos = [];
		$scope.segment = [];	
		
	
		//login -->
		DBLocal.localdb();

		var nome = "soliney";
		var senha = "123456";

		//INSERINDO DADOS LOCALMENTE
		//DBLocal.db.transaction(function(res){
		//res.executeSql("INSERT INTO USER(nome,senha) VALUES(?,?);", [nome, senha]);
		//});
		
		//RECUPERANDO DADO LOCAL

		//DBLocal.db.transaction(function(res){
				//var q = "SELECT*FROM USER";
			//res.executeSql(q, null, function(i, data){
			//	$scope.nome = "Olá " + data.rows.item(0).nome;				
			//});
	//	});

		// LOGOFF 
		//DBLocal.db.transaction(function(res){
			//res.executeSql("DELETE FROM USER WHERE nome = ?;",[nome]);

		//});


		// IMPRIMIR DADOS -->
		var getData = function(){
			var params = {
						counter:$scope.contatos.length,
						token:"1f3d2gs3f2fg3as2fdg3re2t1we46er45"
			};

			Data.getData(params).success(function(data){
				$scope.contatos = data;

			}).error(function(data){
				console.log(data? data : "Não foi possivel acessar o servidor");
			});
		};


		// ABRIR MODAL-->

		$ionicModal.fromTemplateUrl('views/cadastro.html',{
			scope: $scope,
			    animation: 'slide-in-up'
			  		}).then(function(modal) {
					    $scope.modal = modal;
					 });

			  		$scope.abreModal = function(){
			  			$scope.modal.show();
			  		};

			  		$scope.fechaModal = function(){
			  			$scope.modal.hide();
			  			location.reload();
			  		};
			  

			  		// ABRIR MODAL 2-->

		$ionicModal.fromTemplateUrl('views/cadastro_2.html',{
			scope: $scope,
			    animation: 'slide-in-up'
			  		}).then(function(modal1) {
					    $scope.modal1 = modal1;
					 });

			  		$scope.abreModal1 = function(){
			  			$scope.modal1.show();
			  		};

			  		$scope.fechaModal1 = function(){
			  			$scope.modal1.hide();
			  			location.reload();
			  		};

			
		getData();

		// IMPRIMIR DADOS -->
		var getSoli = function(){
			var params = {
						counter:$scope.segment.length,
						token:"1f3d2gs3f2fg3as2fdg3re2t1we46ss45"
			};

			Soli.getSoli(params).success(function(data){
				$scope.segment = data;

			}).error(function(data){
				console.log(data? data : "Não foi possivel acessar o servidor");
			});
		};

			
		getSoli();

			//CADASTRO

		$scope.cadastroRespostas = function(cadastro){
			Data.setData(cadastro).success(function(data){
									
			}).error(function(data){
				alert(data);
			});
			console.log(cadastro);

		};


		//PERFIL PESQUISA
		$scope.perfilUsuario = function(id){
			$scope.usuarioPerfil = $scope.contatos.filter(function(element){
				return element.id == id;
			});
			console.log($scope.usuarioPerfil);
			$location.path("/menu/perfil");
		};



      //DELETA CADASTRO PESQUISA
$scope.deletarPerfil = function(contato){
	$scope.deletedTodo = contato;

  var myPopup = $ionicPopup.show({

    title: 'Tem certeza que deseja deletar a pesquisa?',
    subTitle: 'Atenção: Depois de deletado não poderá ser recuperado',
    scope: $scope,
    buttons: [
      { text: 'Cancelar' },
      {
        text: '<b>OK</b>',
        type: 'button-balanced',
        onTap: function(e) {
          if (!$scope.deletedTodo.contatos) {
          		Data.deleteData(contato.id).success(function(data){									
			}).error(function(data){
				alert(data);
			});
			console.log(contato);
			location.reload();

		};
        }
      }
    ]
  });
}

     //EDITA CADASTRO PESQUISA
$scope.editTodo = function(usuario){
	$scope.editedTodo = usuario;
	var toDoTemplate = '<input type="text" ng-model="editedTodo.nome" value="req.nome"></br><input type="tel" ng-model="editedTodo.tel" value="req.tel"></br><input type="emal" ng-model="editedTodo.email" value="req.email"></br>'

  var myPopup = $ionicPopup.show({
    template: toDoTemplate,
    title: 'Edite o contato',
    subTitle: 'modificando o contato',
    scope: $scope,
    buttons: [
      { text: 'Cancelar' },
      {
        text: '<b>Salvar</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.editedTodo.usuari1) {
          			Data.updateData(usuario).success(function(data){
									
			}).error(function(data){
				alert(data);
			});
			console.log(usuario);

		};
        }
      }
    ]
  });
}

		//CADASTRO SEGMENTAÇÃO
		$scope.cadastroSegmentacao = function(cadastro){
			Soli.setSoli(cadastro).success(function(data){
								
			}).error(function(data){
				alert(data);
			});
			console.log(cadastro);

		};


		//PERFIL SEGMENTAÇÃO
		$scope.perfilsegm = function(id){
			$scope.segmPerfil = $scope.segment.filter(function(element){
				return element.id_seg == id;
			});
			console.log($scope.segmPerfil);
			$location.path("/menu/perfil_seg");
		};

     //EDITA CADASTRO SEGMENTAÇÃO
$scope.editSeg = function(segm){
	$scope.editedSeg = segm;
	var toDosTemplate = '<input type="text" ng-model="editedSeg.nome" value="req.nome">'

  var myPopup = $ionicPopup.show({
    template: toDosTemplate,
    title: 'Edite o contato de Segmentação',
    subTitle: 'modificando o contato',
    scope: $scope,
    buttons: [
      { text: 'Cancelar' },
      {
        text: '<b>Salvar</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.editedSeg.segms) {
			Soli.updateSegData(segm).success(function(datas){
								
			}).error(function(datas){
				alert(datas);
			});
			console.log(segm);

		};
        }
      }
    ]
  });
}




     //DELETA CADASTRO SEGMENTAÇÃO
 $scope.deletarSeg = function(contato){
	$scope.deletedSeg = contato;

  var myPopup = $ionicPopup.show({

    title: 'Tem certeza que deseja deletar a pesquisa?',
    subTitle: 'Atenção: Depois de deletado não poderá ser recuperado',
    scope: $scope,
    buttons: [
      { text: 'Cancelar' },
      {
        text: '<b>OK</b>',
        type: 'button-balanced',
        onTap: function(e) {
          if (!$scope.deletedSeg.segment) {
			Soli.deleteSoli(contato.id_seg).success(function(data){
								
			}).error(function(data){
				alert(data);
			});
			console.log(contato);
			location.reload();

		};
        }
      }
    ]
  });
}


		
$scope.fechar = function() {
		ionic.Platform.exitApp();
	};

	});

})();
