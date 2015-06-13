angular.module('lab62.Services', [
    'ngResource'
])

.service('users', function() {

    this.data = {};

    this.data.first_name = '';

    this.data.last_name = '';

    this.data.email = '';

})

.service('listsUser', function($resource){

        this.user_list = $resource('http://127.0.0.1:7070/api/v1/user/list');
})


.service('products', function() {

    this.data = {};

    this.data.name = '';

    this.data.type = '';

    this.data.quantity = '';

})


.service('listsProduct', function($resource){

        this.product_list = $resource('http://127.0.0.1:7070/api/v1/product/list');
});