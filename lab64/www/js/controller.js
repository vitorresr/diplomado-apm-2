'use strict';

angular.module('lab64.controller', [])

.controller('ListController', function($scope, $state) {

        $scope.changePage = function(){

            $state.go( 'view', { id: 4 } );

        }
})

.controller('ViewController', function($scope, $stateParams, $ionicHistory) {

        console.log( $stateParams.id );

        if ( parseInt( $stateParams.id )  === 1 ) {

            console.log( 'on id = 1' );

            $scope.elements_ionic = '<div class="list">' +
									  '<label class="item item-input">' +
									    '<span class="input-label">Username</span>' +
									    '<input type="text">' +
									  '</label>' +
									  '<label class="item item-input">' +
									    '<span class="input-label">Password</span>' +
									    '<input type="password">' +
									  '</label>' +
									'</div>';

            var list_element = angular.element( document.querySelector( '#elements' ) );

            list_element.append( $scope.elements_ionic );

        } else if ( parseInt( $stateParams.id )  === 2 ) {

            $scope.elements_ionic = '<div class="list">' +
										  '<a class="item item-icon-left" href="#">' +
										    '<i class="icon ion-email"></i>' +
										    'Check mail' +
										  '</a>' +

										  '<a class="item item-icon-left item-icon-right" href="#">' +
										    '<i class="icon ion-chatbubble-working"></i>' +
										    'Call Ma' +
										    '<i class="icon ion-ios-telephone-outline"></i>' +
										  '</a>' +

										  '<a class="item item-icon-left" href="#">' +
										    '<i class="icon ion-mic-a"></i>' +
										    'Record album' +
										    '<span class="item-note">' +
										      'Grammy' +
										    '</span>' +
										  '</a>' +

										  '<a class="item item-icon-left" href="#">' +
										    '<i class="icon ion-person-stalker"></i>' +
										    'Friends' +
										    '<span class="badge badge-assertive">0</span>' +
										  '</a>' +

										'</div>';

            var list_element = angular.element( document.querySelector( '#elements' ) );

            list_element.append( $scope.elements_ionic );

        } else if ( parseInt( $stateParams.id )  === 3 ) {

            $scope.elements_ionic = '<button class="button">' +
									  'Default' +
									'</button>' +
									'<br/>' +
									'<button class="button button-light">' +
									  'button-light' +
									'</button>' +
									'<br/>' +
									'<button class="button button-stable">' + 
									  'button-stable' +
									'</button>' +
									'<br/>' +
									'<button class="button button-positive">' +
									  'button-positive' +
									'</button>' +
									'<br/>' +
									'<button class="button button-calm">' +
									  'button-calm' +
									'</button>' +
									'<br/>' +
									'<button class="button button-balanced">' +
									  'button-balanced' +
									'</button>' +
									'<br/>' +
									'<button class="button button-energized">' +
									  'button-energized' +
									'</button>' +
									'<br/>' +
									'<button class="button button-assertive">' +
									  'button-assertive' +
									'</button>' +
									'<br/>' +
									'<button class="button button-royal">' +
									  'button-royal' +
									'</button>' +
									'<br/>' +
									'<button class="button button-dark">' +
									  'button-dark' +
									'</button>';

            var list_element = angular.element( document.querySelector( '#elements' ) );

            list_element.append( $scope.elements_ionic );

        } 


        $scope.goBack = function(){

            $ionicHistory.goBack();

        }
});