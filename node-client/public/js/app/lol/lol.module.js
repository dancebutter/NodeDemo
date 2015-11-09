define(
    [
        'angular',
        'ng-grid'
    ],
    function(
        angular,
        ngGrid
    ) {
        return angular.module( 'lolModule', [ 'ui.bootstrap', 'ngGrid' ] );
    }
);
