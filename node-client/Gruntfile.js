module.exports = function(grunt) {
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        jshint : {
            files: ['Gruntfile.js', 'public/js/app/**/*.js'],
			options: {
				globals: {
					//jQuery: true
					console: true,
					define: true
				}
			}
        },
		ngdocs : {
			options: {
				dest: 'public/js/docs'
			},
			all: ['public/js/app/**/*.js']
		},
        serve : {
            options : {
                port : 9010,
                serve : {
                    path : './public'
                }
            }
        },
        clean : ['public/js/docs']
    });

    // load plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-serve');

    // Tasks
    grunt.registerTask( 'launch', [ 'jshint', 'serve' ] );
    grunt.registerTask( 'docs', [ 'jshint', 'clean', 'ngdocs' ]);
    grunt.registerTask( 'default', [ 'jshint', 'clean', 'ngdocs', 'serve' ]);
};
