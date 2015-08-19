define(
    [
        'angular',
        'angular-bootstrap',
        'angular-ui-router'
    ],
    function( angular, angularBootstrap ){

        return angular.module( 'nodeClient', [ 'ui.bootstrap', 'ui.router' ] );

    }
);
