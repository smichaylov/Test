module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        qunit: {
            files: ['test/index.html']
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
    //grunt.registerTask('qunit', function(){console.log ('HEllo WorLD!!');})
    
    grunt.registerTask('build',function(){console.log ('HEllo WorLD!!');});
    
    // Testing tasks
    grunt.registerTask('test', ['build', 'qunit']);

    // Travis CI task.
    grunt.registerTask('travis', 'test');

    grunt.registerTask('default', ['build', 'qunit']);
};
