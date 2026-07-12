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
                dest: 'dist/style.css',
            },
            js: {
                src: [
                    "bower_components/jquery/dist/jquery.js",
                    "../js/**/*.js"
                ],
                dest: '../../htdocs/js/script.js',
            },
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    '../../htdocs/css/style.css': ['dist/style.css']
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
                tasks: ['concat:js'],
                options: {
                    spawn: false,
                },
            },
        },
    })
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default',['concat','cssmin','watch']);
    
    
}