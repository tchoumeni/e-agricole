 'use strict';

angular.module('agricoleApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-agricoleApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-agricoleApp-params')});
                }
                return response;
            },
        };
    });