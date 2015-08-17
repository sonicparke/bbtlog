(function() {
    'use strict';

    angular.module('app.feature')
        .controller('Feature', Feature);

    Feature.$inject = ['Service'];
    /* @ngInject */
    function Feature (Service) {
        var vm = this;
        
    }
})();
