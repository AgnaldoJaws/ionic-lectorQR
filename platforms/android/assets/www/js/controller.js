angular.module('lectorQR.controllers', ['ionic', 'ngCordova'])
	.controller("lectorController", function($scope, $cordovaBarcodeScanner){
	$scope.leerCodigo = function(){


		$cordovaBarcodeScanner.scan().then (function (imagemEscaneada){

			   var url = imagemEscaneada.text;
			   target = '_blank';
	  	               options = 'location=yes';

			   var ref = cordova.InAppBrowser.open(url, target, options);

			}, function (error){
			   alert("Erro na palicação" + error);
			});
		}
	});
