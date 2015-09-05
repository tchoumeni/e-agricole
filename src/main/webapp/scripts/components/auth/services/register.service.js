'use strict';

angular.module('agricoleApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


