module.exports = function( grunt ) {

  grunt.initConfig({

    // ## ## ## ## JAVASCRIPT - MINIFY ## ## ## ## //
    uglify : {
      options : {
        mangle : false
      },
      my_target : {
        files : {
          'assets/js/min/framework.min.js' : [ 'assets/js/framework.js' ]
        }
      }
    }, // uglify

    // ## ## ## ## CSS - SASS ## ## ## ## //
    sass: {
        options: {
            sourceMap: false
        },
        dist: {
            files: [{
              cwd: "assets/sass/",
              src: "*.{scss,sass}",
              dest: "assets/css/",
              expand: true,
              ext: ".css"
            }]
        }
    }, // sass

    // cssmin: {
    //     target: {
    //       files: {
    //         'assets/css/style.min.css': 'assets/css/style.css'
    //       }
    //     }
    // }, // css min

    // ## ## ## ## SERV ## ## ## ## //
    watch: {
      options: {
        livereload: true
      },
      
      // JS
      js: {
        files: ['assets/js/*.js'],
        tasks: ["uglify"]
      },

      // CSS
      css: {
        files: ['assets/sass/*.{scss,sass}'],
        tasks: ['sass'/*, 'cssmin'*/]
      },

      html: {
          files: ['index.html','assets/**/*.css'],
          options: {
              livereload: true
          }
      }
    }, // watch

    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'assets/css/*.css',
            'assets/js/min/*.min.js',
            '*.html'
          ]
        },
        options: {
          watchTask: true,
          server: './'
        }
      }
    }

  }); // grunt.initConfig

  // JS
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // CSS
  grunt.loadNpmTasks('grunt-sass');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  // SERV
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Task Defult
  grunt.registerTask( 'default', [ 'uglify', 'sass'/*, 'cssmin'*/] );

  // Task Custom
  grunt.registerTask( 'w', [ 'browserSync', 'watch' ] );

};