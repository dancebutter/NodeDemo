define(
    [
        'angular',
        'angular-bootstrap',
        'angular-ui-router',
        './homePage/main',
        './imageProcessing/main',
        './ideaCollection/main',
        './d3Playground/main',
        './lol/main'
    ],
    function( angular, angularBootstrap ){

        return angular.module( 'nodeClient', [
                                                'ui.bootstrap',
                                                'ui.router',
                                                'homePageModule',
                                                'imageProcessingModule',
                                                'ideaCollectionModule',
                                                'd3PlaygroundModule',
                                                'lolModule'
                                            ] );

    }
);
