define(
    [
        'angular',
        './app.module',
        './app.config',
        './app.controller'
    ],
    function( angular, app ) {
        angular.element(document).ready( function() {
            angular.bootstrap( document, ['nodeClient'] );
        });
    }
);
