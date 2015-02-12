module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dev: {
        options: {
          style: 'expanded',
          compass: false
        },
        files: {
          'assets/css/style.css':'assets/sass/style.scss'
        }
      }
    },

    bower: {
      install: {
        options: {
          targetDir: 'assets/js/vendor',
          layout: 'byComponent'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-bower-task');
  //grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass']);

};
