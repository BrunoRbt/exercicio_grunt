module.exports = function(grunt) {
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // Compilação LESS
    less: {
      development: {
        files: {
          "css/style.css": "less/style.less" // Verifique se esses caminhos estão corretos
        }
      }
    },
    
    // Compressão de JavaScript
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'js/script.min.js': ['js/script.js'] // Verifique se esses caminhos estão corretos
        }
      }
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['less', 'uglify']);
};