module.exports = function(grunt) {

    
    // Project configuration.
    grunt.initConfig({
        qunit: {
            files: ['test/index.html']
        },
		jasmine: {
			tennis: {
			  src: 'test/tennis_kata/src/*.js',
			  options: {
				specs: 'test/tennis_kata/spec/*Spec.js',
				helpers: 'test/tennis_kata/spec/*Helper.js'
			  }
			}
		}
    });
    
    grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
    
    grunt.registerTask('build', function(){console.log ('Running a stub function for build tasks!');});
    
    // Travis CI task.
    grunt.registerTask('travis', ['qunit', 'jasmine']);

};
