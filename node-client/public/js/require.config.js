require.config({
    'paths' : {
        /* open source */

        /* Angular */
        'angular' : 'bower_components/angular/angular',
        'angular-bootstrap' : 'bower_components/angular-bootstrap/ui-bootstrap-tpls',
        'angular-ui-router' : 'bower_components/angular-ui-router/release/angular-ui-router',

        /* Image */
        'caman' : 'bower_components/caman/dist/caman',

        /* other */
        'jquery' : 'bower_components/jQuery/dist/jquery',
        'bootstrap' : 'bower_components/bootstrap/dist/bootstrap'

    },
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
        'bootstrap' : {
            deps : [ 'jquery' ]
        }
    },
    packages : [
        {
            'name' : 'appPackage',
            'location' : 'app'
        }
    ]
});
