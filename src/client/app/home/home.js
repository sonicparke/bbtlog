(function() {
    'use strict';

    angular.module('app.home')
        .controller('Home', Home);

    Home.$inject = ['DataService','$firebaseArray'];
    /* @ngInject */
    function Home (DataService, $firebaseArray) {
        var vm = this;
        vm.AddPushpUps = AddPushpUps;
        GetData();
        
        function GetData() {
            DataService.GetPushUpItems().then(function(res) {
                vm.pushUps = res;
            });
        }

        function AddPushpUps(data) {
            DataService.AddPushpUpsItem(data).then(function(res) {
                console.log('res :', res);
                GetData();
            })
        }
    }
})();
