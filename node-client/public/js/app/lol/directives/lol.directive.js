define(
    [
        'angular',
        '../lol.module'
    ],
    function(
        angular,
        lolModule
    ) {
        LolDirective.$inject = [ '$filter' ];
        function LolDirective( $filter ) {

            LolLink.$inject = [ 'scope', 'element', 'attr' ];
            function LolLink( scope, element, attr ) {

            }

            LolController.$inject = [
                                        '$scope',
                                        '$http',
                                        '$log',
                                        'lolDataService'
                                    ];
            function LolController(
                                    $scope,
                                    $http,
                                    $log,
                                    lolDataService
            ) {
                $scope.championList = {};
                $scope.lolVersion = null;
                var lolTypeEnum = {
                    CHAMPION : "champion"
                };

                function init() {
                    lolDataService.getChampionList()
                    .then(function(data) {
                        if( data.type === lolTypeEnum.CHAMPION ) {
                            $scope.championList = data.data;
                        } else {
                            $log.error('[ERROR] Get Champion List error. Invalid data type : ' + data.type );
                        }
                    },function( error ) {

                    });
                }

                init();
            }

            return {
                restrict : 'E',
                link : LolLink,
                controller : LolController,
                templateUrl: './js/app/lol/views/lol.tmpl.html'
            };
        }

        return lolModule.directive( 'lolDirective', LolDirective );
    }
);
