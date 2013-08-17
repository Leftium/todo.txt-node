module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['lib'],
    copy: {
      main: { expand:true, cwd:'src', src:'*.js', dest:'lib/' }
    },
    coffee: {
      main: { expand:true, cwd:'src', src:'*.coffee', dest:'lib', ext:'.js' }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'copy', 'coffee']);

};

