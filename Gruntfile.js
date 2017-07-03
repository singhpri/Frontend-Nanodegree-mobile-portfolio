module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 800,
            suffix: '_large_1x',
            quality: 30
          },{
            width: 100,
            suffix: 'small',
            quality: 30
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'src/img_src/',
          dest: 'dist/img/'
        }]
      }
    },

    uglify: {
      build: {
        files: [{
            expand: true,
            src: '*.js',
            dest: 'dist/js',
            cwd: 'src/js/'
        }]
      }
    },
    cssmin: {
      minify: {
        files: [{
          expand: true,
          src: '*.css',
          dest: 'dist/css',
          cwd: 'src/css/'
        }]
      }
    },
    htmlmin: {
      minify: {
        files: [{
          expand: true,
          src: '*.html',
          dest: 'dist/',
          cwd: 'src/'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images','uglify', 'cssmin']);
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

};
