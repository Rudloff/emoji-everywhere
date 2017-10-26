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
            },
            fixpack: {
                package: {
                    src: 'package.json'
                }
            },
            copy: {
                twemoji: {
                    expand: true,
                    cwd: 'node_modules/twemoji/2/',
                    dest: 'data/components/twemoji/',
                    src: '**'
                }
            }
        }
    );

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-fixpack');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('lint', ['jslint', 'csslint', 'jsonlint', 'fixpack']);
    grunt.registerTask('default', ['copy']);
};
