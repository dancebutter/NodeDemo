define(
    [
        'angular',
        'angular-bootstrap',
        'angular-ui-router',
        './homePage/main'
    ],
    function( angular, angularBootstrap ){

        return angular.module( 'nodeClient', [
                                                'ui.bootstrap',
                                                'ui.router',
                                                'homePageModule'
                                            ] );

    }
);
