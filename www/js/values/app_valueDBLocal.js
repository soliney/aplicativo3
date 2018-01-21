(function(){
	"use strict";
	angular.module("myApp").value("DBLocal",{
		db:null,
		localdb: function(){
			this.db = window.openDatabase("dbLocal", "1.0", "Banco Local", 3000);
			this.db.transaction(function(res){
				res.executeSql("CREATE TAB IF NOT EXISTS USER(nome TEXT, senha TEXT);, []");
			}); 
		}
	});
})();