'use strict';

angular.module('agricoleApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
