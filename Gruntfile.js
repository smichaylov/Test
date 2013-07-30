module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        qunit: {
            files: ['test/index.html']
        }
    });
    
    grunt.registerTask('qunit', function(){console.log ('HEllo WorLD!!');})
    // Task to run tests
    grunt.registerTask('test', 'qunit');
    
    grunt.registerTask('build',['test']);
};
