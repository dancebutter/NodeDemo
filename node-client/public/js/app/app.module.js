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
    function(
        angular,
        angularBootstrap,
        angularUiRouter,
        homePageModule,
        imageProcessingModule,
        ideaCollectionModule,
        d3PlaygroundModule,
        lolModule
    ){

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
