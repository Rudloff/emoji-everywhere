/*jslint node: true */
module.exports = function (grunt) {
    'use strict';
    grunt.initConfig(
        {
            jslint: {
                scripts: {
                    src: ['index.js', 'data/js/*.js']
                },
                Gruntfile: {
                    src: ['Gruntfile.js']
                }
            },
            csslint: {
                styles: {
                    src: ['data/css/*.css'],
                    options: {
                        'overqualified-elements': false
                    }
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-csslint');

    grunt.registerTask('lint', ['jslint', 'csslint']);
};
