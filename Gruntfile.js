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
            },
            jsonlint: {
                manifests: {
                    src: ['*.json'],
                    options: {
                        format: true
                    }
                }
            },
            fixpack: {
                package: {
                    src: 'package.json'
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-fixpack');

    grunt.registerTask('lint', ['jslint', 'csslint', 'jsonlint', 'fixpack']);
};
