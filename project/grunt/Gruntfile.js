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
                dest: '../../htdocs/css/style.css',
            },
            js: {
                src: [
                    "bower_components/jquery/dist/jquery.js",
                    "../js/**/*.js"
                ],
                dest: '../../htdocs/js/script.js',
            },
        },
        
        watch: {
            css: {
                files: [
                    '../css/**/*.css',
                    
                ],
                tasks: ['concat:css'],
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
    grunt.registerTask('default',['concat','watch']);
    
    
}