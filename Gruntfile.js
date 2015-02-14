module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dev: {
        options: {
          style: 'expanded',
          compass: false
        },
        files: {
          'app/assets/css/style.css':'app/assets/sass/style.scss'
        }
      }
    },

    bower: {
      install: {
        options: {
          targetDir: 'app/assets/js/vendor',
          layout: 'byComponent'
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: './app',
          keepalive: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-bower-task');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['sass:dev']);

};
