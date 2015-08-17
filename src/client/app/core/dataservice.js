(function() {
    'use strict';

    angular.module('app.core')
        .factory('DataService', DataService);

    DataService.$inject = ['$q', '$firebaseArray', '$firebaseObject'];
    /* @ngInject */
    function DataService($q, $firebaseArray, $firebaseObject) {

        // Create a new Firebas ref
        var _firebaseRef = new Firebase("https://shining-heat-7466.firebaseio.com/" + "pushups");
        var firebaseData = $firebaseObject(_firebaseRef);
        
        var service = {
            GetPushUpItems: GetPushUpItems,
            AddPushpUpsItem: AddPushpUpsItem
        };

        return service;

        function GetPushUpItems() {
            var deferred = $q.defer();
            firebaseData.$loaded().then(function(result) {
                deferred.resolve(result.pushups);
                console.log('result :', result);
            });
            return deferred.promise;
        }
        
        function AddPushpUpsItem(data) {
            var deferred = $q.defer();
            var schema = {
                pushups: data
            }
            firebaseData.$add(schema).then(function(ref) {
                var id = ref.key();
                console.log("added record with id " + id);
                firebaseData.$indexFor(id); // returns location in the array
                deferred.resolve(ref);
            });

            return deferred.promise;
        }


    }

})();
