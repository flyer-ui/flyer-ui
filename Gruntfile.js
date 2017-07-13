module.exports = function(grunt) {

    //项目配置
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: {
            build: {
                src: ['dist']
            }
        },
        concat: {
            options: {
                stripBanners: true,
                banner: '/*\nname:<%= pkg.name %> v <%= pkg.version %>类库\nAuthor: Ken (郑鹏飞)\nSite : http://www.flyerui.com\nLicense：MIT\n打包时间:<%= grunt.template.today("yyyy-mm-dd") %>\n*/\n'
            },
            dist: {
                src: [
                    'src/js/flyer.core.js',
                    'src/js/flyer.store.js',
                    'src/js/flyer.ui.comboBox.js',
                    'src/js/flyer.ui.page.js',
                    'src/js/flyer.ui.dialog.js',
                    'src/js/flyer.ui.edit.js',
                    'src/js/flyer.ui.date.js',
                    'src/js/flyer.ui.element.js',
                    'src/js/flyer.ui.form.js',
                    'src/js/flyer.ui.progoress.js',
                    'src/js/flyer.ui.searches.js',
                    'src/js/flyer.ui.tab.js',
                    'src/js/flyer.ui.table.js',
                    'src/js/flyer.ui.tree.js',
                    'src/js/flyer.ui.upload.js',
                    'src/js/flyer.ui.code.js',
                    'src/js/flyer.jquery.js'
                ],
                dest: 'dist/js/flyer.all.js'
            },
            css: {
                src: [
                    'src/css/flyer-base.css',
                    'src/css/flyer-alert.css',
                    'src/css/flyer-animate.css',
                    'src/css/flyer-button.css',
                    'src/css/flyer-code.css',
                    'src/css/flyer-collapse.css',
                    'src/css/flyer-color.css',
                    'src/css/flyer-comboBox.css',
                    'src/css/flyer-date.css',
                    'src/css/flyer-dialog.css',
                    'src/css/flyer-element.css',
                    'src/css/flyer-form.css',
                    'src/css/flyer-nav.css',
                    'src/css/flyer-page.css',
                    'src/css/flyer-reset.css',
                    'src/css/flyer-searches.css',
                    'src/css/flyer-tab.css',
                    'src/css/flyer-table.css',
                    'src/css/flyer-tree.css',
                    'src/css/flyer-upload.css',
                    'src/css/flyer-progressbar.css'
                ],
                dest: "dist/css/flyer.all.css"
            }
        },
        uglify: {
            options: {
                banner: '/*\nname:<%= pkg.name %> v <%= pkg.version %>类库\nAuthor: Ken (郑鹏飞)\nSite : http://www.flyerui.com\nLicense：MIT\n打包时间:<%= grunt.template.today("yyyy-mm-dd") %>\n*/\n'
            },
            build: {
                src: "dist/js/flyer.all.js",
                dest: "dist/js/flyer.all.min.js"
            },
            layout: {
                src: "src/js/flyer.layout.js",
                dest: "dist/js/flyer.layout.min.js"
            },
            jquery: {
                src: "src/plugins/js/jquery.js",
                dest: "src/plugins/js/jquery.min.js"
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/sass/',
                    src: ['*.scss'],
                    dest: 'src/css/',
                    ext: '.css'
                }]
            },
            aukey: {
                files: [{
                    expand: true,
                    cwd: 'src/sass/aukey/',
                    src: ['*.scss'],
                    dest: 'src/css/aukey/',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/css/flyer.all.min.css': [
                        'src/css/flyer-base.css',
                        'src/css/flyer-alert.css',
                        'src/css/flyer-animate.css',
                        'src/css/flyer-button.css',
                        'src/css/flyer-code.css',
                        'src/css/flyer-collapse.css',
                        'src/css/flyer-color.css',
                        'src/css/flyer-comboBox.css',
                        'src/css/flyer-date.css',
                        'src/css/flyer-dialog.css',
                        'src/css/flyer-element.css',
                        'src/css/flyer-form.css',
                        'src/css/flyer-nav.css',
                        'src/css/flyer-page.css',
                        'src/css/flyer-reset.css',
                        'src/css/flyer-searches.css',
                        'src/css/flyer-tab.css',
                        'src/css/flyer-table.css',
                        'src/css/flyer-tree.css',
                        'src/css/flyer-upload.css',
                        'src/css/flyer-progressbar.css'
                    ]
                }
            },
            layout: {
                files: {
                    "dist/css/flyer.layout.min.css": "src/css/flyer-layout.css"
                }
            },
            plugins: {
                files: [{
                    expand: true,
                    cwd: 'src/plugins/css',
                    src: ['**.css', '!*.min.css'],
                    dest: 'src/plugins/css',
                    ext: '.min.css'
                }]
            }
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3
                },
                files: {
                    expand: true,
                    cwd: "src/img",
                    src: "**.ico",
                    dest: "dist/img"
                }
            }
        },
        htmlmin: {
            doc: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: "src/doc",
                    src: ["**.html", "*.html"],
                    dest: "dist/doc/"
                }]
            },
            demo: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: "src/demo",
                    src: ["**.html", "*.html"],
                    dest: "dist/demo/"
                }]
            }
        },
        copy: {
            plugins: {
                expand: true,
                cwd: 'src/plugins',
                src: '**',
                dest: 'dist/plugins',
            },
            roots: {
                expand: true,
                cwd: "src",
                src: "*.html",
                dest: "dist"
            }
        },
        watch: {
            css: {
                files: "src/sass/*.scss",
                tasks: ['sass']
            }
            // scripts: {
            //     files: ['**/*.js', "**/*.css"],
            //     tasks: ['clean', 'concat', 'uglify', 'sass', 'cssmin'],
            //     options: {
            //         spawn: false,
            //     }
            // }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'sass', 'cssmin', 'htmlmin', 'copy', 'watch']);
    // grunt.registerTask("test", function() {
    //     console.log("path is :" + grunt.config.get('watch.css.files'));
    // });
}