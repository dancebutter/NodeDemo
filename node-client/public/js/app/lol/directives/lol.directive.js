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
                $scope.lolVersion = null;
                $scope.championListTableShow = true;
                $scope.championDetailTableShow = true;
                $scope.activedChampion = null;
                var lolTypeEnum = {
                    CHAMPION : "champion"
                };

                function init() {
                    lolDataService.getChampionListWithImage()
                    .then(function(data) {
                        $scope.lolVersion = data.version;
                        if( data.type === lolTypeEnum.CHAMPION ) {
                            $scope.championList = [];
                            angular.forEach(data.data, function( champ ) {
                                $scope.championList.push( champ );
                            });
                            $scope.championListTableShow = true;
                            $scope.championDetailTableShow = false;
                        } else {
                            $log.error('[ERROR] Get Champion List error. Invalid data type : ' + data.type );
                        }
                    },function( error ) {

                    });

                    //===================
                    $scope.gridOptions = {
                        enableHighlighting : true,
                        enableRowSelection : true,
                        multiSelect : false,
                        afterSelectionChange : rowSelection,
                        enableColumnResize : true,
                        data: 'championList'
                    };
                }

                function rowSelection( rowItem, event ) {
                    if( rowItem && rowItem.entity ) {
                        $scope.championListTableShow = false;
                        $scope.championDetailTableShow = true;
                        lolDataService.getSingleChampionDetail( rowItem.entity.id )
                        .then(function( data ) {
                            $scope.activedChampion = data;
                        }, function( error ) {

                        });
                    }

                }

                $scope.backToList = function() {
                    $scope.championDetailTableShow = false;
                    $scope.championListTableShow = true;
                };

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
