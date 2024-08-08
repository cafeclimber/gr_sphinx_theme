const path = require('path');
const sass = require('node-sass');

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  var PROJECT_DIR = "docs/";

  /**
   * Grunt task to remove source map comment
   */
  grunt.registerMultiTask('removesourcemap', 'Grunt task to remove sourcemp comment from files', function () {
    var done = this.async(),
      files = this.filesSrc.filter(function (file) {
        return grunt.file.isFile(file);
      }),
      counter = 0;
    this.files.forEach(function (file) {
      file.src.filter(function (filepath) {
        var content = grunt.file.read(filepath).replace(/\/\/# sourceMappingURL=\S+/, '');
        grunt.file.write(file.dest, content);
        grunt.log.success('Source file "' + filepath + '" was processed.');
        counter++;
        if (counter >= files.length) done(true);
      });
    });
  });


  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    copy: {
      fonts: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['fonts/AtkinsonHyperlegible/*'],
            dest: 'gr_sphinx_theme/static/fonts/AtkinsonHyperlegible',
            filter: 'isFile'
          },

          {
            expand: true,
            flatten: true,
            src: ['fonts/IBMPlexMono/*'],
            dest: 'gr_sphinx_theme/static/fonts/IBMPlexMono',
            filter: 'isFile'
          }
        ]
      },

      images: {
        files: [
          {
            expand: true,
            flatten: true,
            src: ['images/*'],
            dest: 'gr_sphinx_theme/static/images',
            filter: 'isFile'
          }
        ]
      },

      vendor: {
        files: [
          {
            expand: true,
            flatten: true,
            src: [
              'node_modules/popper.js/dist/umd/popper.min.js',
              'node_modules/bootstrap/dist/js/bootstrap.min.js',
              'node_modules/anchor-js/anchor.min.js'
            ],
            dest: 'gr_sphinx_theme/static/js/vendor',
            filter: 'isFile'
          }
        ]
      }
    },

    // sass :: compact, compressed, expanded, nested
    sass: {
      options: {
        implementation: sass,
        outputStyle: 'compressed',
        sourceMap: true
      },
      build: {
        files: {
          'gr_sphinx_theme/static/css/theme.css': 'sass/theme.scss',
        }
      }
    },

    browserify: {
      dev: {
        options: {
          alias: {
            'gr-sphinx-theme': './js/theme.js'
          }
        },
        src: ['js/*.js'],
        dest: 'gr_sphinx_theme/static/js/theme.js'
      },
      build: {
        options: {
          alias: {
            'gr-sphinx-theme': './js/theme.js'
          }
        },
        src: ['js/*.js'],
        dest: 'gr_sphinx_theme/static/js/theme.js'
      }
    },
    uglify: {
      dist: {
        options: {
          sourceMap: false,
          ie8: true // compliance with IE 6-8 quirks
        },
        files: [{
          expand: true,
          src: ['gr_sphinx_theme/static/js/*.js', '!gr_sphinx_theme/static/js/*.min.js'],
          dest: 'gr_sphinx_theme/static/js/',
          rename: function (dst, src) {
            // Use unminified file name for minified file
            return src;
          }
        }]
      }
    },
    exec: {
      build_sphinx: {
        cmd: 'sphinx-build ' + PROJECT_DIR + ' docs/build'
      }
    },
    clean: {
      build: ['docs/build/*', '!build/.gitignore'],
      fonts: ["gr_sphinx_theme/static/fonts"],
      images: ["gr_sphinx_theme/static/images"],
      js: ["gr_sphinx_theme/static/js/*", "!gr_sphinx_theme/static/js/modernizr.min.js"]
    },

    watch: {
      /* Changes in theme dir rebuild sphinx */
      sphinx: {
        files: ['gr_sphinx_theme/**/*', 'README.rst', 'docs/**/*.rst', 'docs/**/*.py'],
        tasks: ['clean:build', 'exec:build_sphinx']
      },
      /* JavaScript */
      browserify: {
        files: ['js/*.js'],
        tasks: ['browserify:dev']
      },
      /* Sass files */
      sass: {
        files: ['sass/*.scss'],
        tasks: ['sass:build']
      },
      /* live-reload the docs if sphinx re-builds */
      livereload: {
        files: ['docs/build/**/*'],
        options: { livereload: true }
      }
    }

  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['clean', 'copy:fonts', 'copy:images', 'copy:vendor', 'browserify:dev', 'exec:build_sphinx', 'connect', 'open', 'watch']);
  grunt.registerTask('build', ['clean', 'copy:fonts', 'copy:images', 'copy:vendor', 'browserify:build', 'uglify']);
}