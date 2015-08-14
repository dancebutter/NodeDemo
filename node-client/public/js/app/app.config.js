define(
    [
        'angular',
        './app.module'
    ],
    function( angular, nodeClient ) {
        NodeClientConfig.$inject = [ '$stateProvider', '$urlRouterProvider' ];
        function NodeClientConfig( $stateProvider, $urlRouterProvider ) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state( 'home', {
                    url : '/home',
                    template : 'Home'
                })
                .state( 'page1', {
                    url : '/page1',
                    template : 'Page1'
                });
        }

        return nodeClient.config( NodeClientConfig );
    }
);
