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
        },
        watch: {
            scripts: {
                files: ['../css/**/*.css'],
                tasks: ['concat'],
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