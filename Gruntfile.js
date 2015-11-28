'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-clean');
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
      options: {
          sourceMap: true,
          presets: ['es2015']
      },
      dist: {
        files: [{
          "expand": true,
          "src": ["src/**/*.js","test/**/*.js"],
          "dest": "dist/",
          "ext": ".js"
        }]
      },
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          quiet: false,
          clearRequireCache: false
        },
        src: ['dist/test/**/*.js']
      }
    },
    clean: ["dist"]
  });

  grunt.registerTask('default', ['clean','babel']);
  grunt.registerTask('test', ['clean','babel','mochaTest']);
};