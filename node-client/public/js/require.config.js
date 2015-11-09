require.config({
    'paths' : {
        /* open source */

        /* Angular */
        'angular' : 'bower_components/angular/angular',
        'angular-bootstrap' : 'bower_components/angular-bootstrap/ui-bootstrap-tpls',
        'angular-ui-router' : 'bower_components/angular-ui-router/release/angular-ui-router',
        // 'angular-ui-grid'   : 'bower_components/angular-ui-grid/ui-grid',
        'ng-grid'   : 'bower_components/ng-grid/ng-grid-2.0.14.debug',

        /* Image */
        'caman' : 'bower_components/caman/dist/caman.full',

        /* other */
        'jquery' : 'bower_components/jQuery/dist/jquery.min',
        'bootstrap' : 'bower_components/bootstrap/dist/bootstrap',
        'd3' : 'bower_components/d3/d3'

    },
	priority: [
		'jquery',
		'angular',
		'bootstrap'
	],
    'shim' : {
        'angular' : {
            deps : [ 'jquery' ],
            exports : 'angular'
        },
        'angular-ui-router' : {
            deps : [ 'angular' ]
        },
        'angular-bootstrap' : {
            deps : [ 'angular' ]
        },
        'ng-grid' : {
            deps : [ 'angular', 'jquery' ],
            exports : 'ngGrid'
        },
        'bootstrap' : {
            deps : [ 'jquery' ],
			exports : '$.fn.modal'
        },
        'd3' : {
            exports: 'd3'
        }
    },
    packages : [
        {
            'name' : 'appPackage',
            'location' : 'app'
        }
    ]
});
require.config({
    baseUrl: 'js'
});
require(['appPackage', 'caman']);
