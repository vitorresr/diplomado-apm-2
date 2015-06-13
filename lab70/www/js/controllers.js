angular.module('lab62.Controllers',
    [
        'ionic',
        'lab62.Services'
    ]
)

.controller('lab62.ListController', function($scope,  $state, users) {

        $scope.decorator = {

            'text-decoration': 'none'
        };

        $scope.data_information = users;

        $scope.getList = function() {

            $state.transitionTo('userList');

        };

        $scope.getListProduct = function() {

            $state.transitionTo('productList');

        };
})

.controller('lab62.ViewController', function($scope, users) {

    console.log(users);

    $scope.data_information = users;
})

.controller('lab62.ListUserController', function($scope,listsUser) {

        $scope.listsUser = listsUser.user_list.query(function(data){

            console.log(data);
        });

})


.controller('lab62.ListProductController', function($scope,listsProduct) {

        $scope.listsProduct = listsProduct.product_list.query(function(data){

            console.log(data);
        });

});
