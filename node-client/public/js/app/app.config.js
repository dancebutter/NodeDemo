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
                    templateUrl : './js/app/homePage/views/homePage.container.tmpl.html'
                })
                .state( 'page1', {
                    url : '/page1',
                    templateUrl : './js/app/imageProcessing/views/imageProcessing.container.tmpl.html'
                })
                .state( 'ideas', {
                    url : '/ideas',
                    templateUrl : './js/app/ideaCollection/views/ideaCollection.container.tmpl.html'
                })
                .state( 'd3Playground', {
                    url : '/d3Playground',
                    templateUrl : './js/app/d3Playground/views/d3Playground.container.tmpl.html'
                })
                .state( 'lol', {
                    url : '/lol',
                    templateUrl : './js/app/lol/views/lol.container.tmpl.html'
                });
        }

        return nodeClient.config( NodeClientConfig );
    }
);
