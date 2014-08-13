module.exports = function(grunt) {

	require('packer-module')(grunt);

	grunt.registerTask('default', [
		'module'
	]);
	
	grunt.registerTask('run', [
		'module:run'
	]);
};	