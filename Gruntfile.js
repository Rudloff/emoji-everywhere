/*jslint node: true */
module.exports = function (grunt) {
    'use strict';
    grunt.initConfig(
        {
            jslint: {
                scripts: {
                    src: ['data/js/*.js']
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
            },
            jsonlint: {
                manifests: {
                    src: ['*.json'],
                    options: {
                        format: true
                    }
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-jsonlint');

    grunt.registerTask('lint', ['jslint', 'csslint', 'jsonlint']);
};
