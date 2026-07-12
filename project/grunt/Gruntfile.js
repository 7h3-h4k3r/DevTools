const { option } = require("grunt");

module.exports = function(grunt){
    
    grunt.initConfig({
        concat: {
            options: {
                separator: '\n',
                sourceMap : true,
                banner : "/*css by aura.pvt Developers \n*/"
            },
            css: {
                src: ["../css/**/*.css"],
                dest: 'dist/css/style.css',
            },
            js: {
                src: [
                    
                    "../js/**/*.js"
                ],
                dest: 'dist/js/script.js',
            },
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            cssmin_run: {
                files: {
                    '../../htdocs/css/app.min.css': ['dist/css/style.css']
                }
            }
        },
        uglify: {
            
            jsmin_run: {
                option: {
                    sourceMap: true,
                },
                files: {
                    '../../htdocs/js/app.min.js': ['dist/js/script.js']
                }
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'bower_components/jquery/dist/',
                src: ['jquery.min.js'],
                dest: '../../htdocs/js/',
            },
        },
        obfuscator: {
            options: {
                banner: '// obfuscated with grunt-contrib-obfuscator.\n',
                debugProtection: true,
                debugProtectionInterval: 4000
            },
            task1: {
                files: {
                    '../../htdocs/js/app.o.js': [
                        'dist/js/script.js'
                    ]
                }
            }
        },
        watch: {
            css: {
                files: [
                    '../css/**/*.css',
                    
                ],
                tasks: ['concat:css','cssmin'],
                options: {
                    spawn: false,
                },
            },
            jss: {
                files: [
                    
                    '../js/**/*.js'
                ],
                tasks: ['concat:js','uglify','obfuscator'],
                options: {
                    spawn: false,
                },
            },
        },
    })
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-obfuscator-4');
    grunt.registerTask('default',['concat','copy','cssmin','uglify','obfuscator','watch']);
    
    
}