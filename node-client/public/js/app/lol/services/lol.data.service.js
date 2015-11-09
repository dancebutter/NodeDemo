define(
    [
        'angular',
        '../lol.module'
    ],
    function(
        angular,
        lolModule
    ) {
        LolDataService.$inject = [
            '$http',
            '$q'
        ];
        function LolDataService(
            $http,
            $q
        ) {
            var MY_KEY = 'b5372e49-1de2-49cd-bc63-98a7e6564ad9';
            var staticDataBaseUrl = 'https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion?' + 'api_key=' + MY_KEY;

            var service = {
                getChampionList : getChampionList,
                getSingleChampionDetail : getSingleChampionDetail,
                getChampionListWithImage : getChampionListWithImage
            };

            return service;

            function getChampionList() {
                var deferred = $q.defer();
                var httpConfig = {
                    method : 'GET',
                    url : staticDataBaseUrl
                    // contentType : 'application/json; charset=UTF-8'
                };
                $http(httpConfig)
                .success(function( data ) {
                    deferred.resolve(data);
                }).error(function( error ) {
                    deferred.reject( error );
                });

                return deferred.promise;
            }

            function getSingleChampionDetail( id ) {
                var deferred = $q.defer();
                if( angular.isNumber(id) && !isNaN( id ) ) {
                    var championDetailUrl = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/' + id + '?champData=all&api_key=' + MY_KEY;
                    var httpConfig = {
                        method : 'GET',
                        url : championDetailUrl
                        // contentType : 'application/json; charset=UTF-8'
                    };
                    $http(httpConfig)
                    .success(function( data ) {
                        deferred.resolve( data );
                    })
                    .error(function( error ) {
                        deferred.reject(error);
                    });
                } else {
                    deferred.reject();
                }

                return deferred.promise;
            }

            function getChampionListWithImage() {
                var deferred = $q.defer();
                var url = staticDataBaseUrl + '&champData=altimages';
                var httpConfig = {
                    method : 'GET',
                    url : url
                    // contentType : 'application/json; charset=UTF-8'
                };
                $http(httpConfig)
                .success(function( data ) {
                    deferred.resolve(data);
                }).error(function( error ) {
                    deferred.reject( error );
                });

                return deferred.promise;
            }

        }

        return lolModule.factory( 'lolDataService', LolDataService);
    }
);
