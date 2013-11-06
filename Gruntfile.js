module.exports = function (grunt) {

    var pkg = grunt.file.readJSON('package.json');

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.initConfig({
        pkg: pkg,
        src: {
            js: ['src/**/*.js', 'dist/tmp/**/*.js'],
            libs: ['libs/*.js'],
            html: ['src/index.html'],
            less: ['libs/*.less', 'src/less/*.less', 'src/less/*.css'],
        },
        clean: {
            dist: {
                src: ['dist']
            },
        },
        concat: {
            options: {
                separator: '\n',
            },
            less: {
                src: ['<%= src.less %>'],
                dest: 'dist/style.less',
            },
        },
        less: {
            styles: {
                options: {
                    cleancss: true
                },
                files: {
                    'dist/style.css': 'src/less/style.less',
                },
            },
        },
        watch: {
            files: ['<%= src.js %>', '<%= src.less %>', '<%= src.html %>'],
            tasks: ['default', 'injectLivereload', 'timestamp'],
            options: {
                livereload: true,
            },
        },
        uglify: {
            libs: {
                beautify: true,
                files: {
                    'dist/libs.js': ['<%= src.libs %>'],
                },
            },
            app: {
                options: {
                    preserveComments: false,
                    mangle: false,
                    compress: {
                        unused: false,
                    },
                },
                files: {
                    'dist/app.js': ['<%= src.js %>'],
                }
            },
        },
        htmlmin: {
            index: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeAttributeQuotes: true,
                },
                files: {
                    'index.html': 'index.html',
                },
            },
        },
    });

    grunt.config.set('uglify.app.options.banner', '/*!\n * ' + grunt.config.get('pkg.banner').join('\n * ') + '\n */\n\n'),

    grunt.registerTask('indexBanner', function () {
        var contents = grunt.template.process(grunt.file.read('index.html').replace('<head>', '<head>\n\n<!--\n ' + grunt.config.get('pkg.banner').join('\n ') + '\n-->\n\n'));
        grunt.file.write('index.html', contents);
    });

    grunt.registerTask('cssBanner', function () {
        grunt.file.write('dist/style.css', '/*!\n * ' + grunt.template.process(grunt.config.get('pkg.banner').join('\n * ')) + '\n */\n\n' + grunt.file.read('dist/style.css'));
    });

    grunt.registerTask('timestamp', function () {
        grunt.log.subhead(Date());
    });

    grunt.registerTask('injectLivereload', function () {
        grunt.file.write('index.html', grunt.file.read('index.html') + '<script src="http://localhost:35729/livereload.js"></script>');
    });

    grunt.registerTask('index', 'Process index.html', function (){
        grunt.file.copy('src/index.html', 'index.html');
        grunt.log.writeln('Index copied.');
    });

    grunt.registerTask('default', ['clean', 'html', 'css', 'js']);

    grunt.registerTask('html', ['index', 'htmlmin:index', 'indexBanner']);
    grunt.registerTask('css', ['less', 'cssBanner']);
    grunt.registerTask('js', ['uglify:app']);
};
