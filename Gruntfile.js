
module.exports = function (grunt) {
	grunt.initConfig({
		css: {
			input: 'app/assets/styles/master.scss',
			output: 'public/styles/master.min.css'
		},

		js: {
			input: 'app/assets/scripts/*.js',
			output: 'public/scripts/master.min.js'
		},

		pkg: grunt.file.readJSON('package.json'),

		tag: {
			banner: '/*!\n' +
				' * <%= pkg.name %>\n' +
				' * @author <%= pkg.author.name %> <<%= pkg.author.email %>>\n' +
				' * @version <%= pkg.version %>\n' +
				' */\n'
		},

		sass: {
			options: {
				banner: '<%= tag.banner %>',
				noCache: true,
				require: 'sass-globbing'
			},
			dev: {
				files: {
					'<%= css.output %>': '<%= css.input %>'
				},
				options: {
					style: 'expanded'
				}
			},
			dist: {
				files: {
					'<%= css.output %>': '<%= css.input %>'
				},
				options: {
					style: 'compressed'
				}
			}
		},

		jshint: {
			files: 'app/**/*.js',
			options: {
				jshintrc: '.jshintrc'
			}
		},

		concat: {
			options: {
				seperator: ';',
				stripBanners: true,
				nonull: true,
				banner: '<%= tag.banner %>'
			},
			dev: {
				files: {
					'<%= js.output %>': '<%= js.input %>'
				}
			}
		},

		uglify: {
			options: {
				banner: "<%= tag.banner %>",
				mangle: true,
				wrap: true
			},
			dist: {
				files: {
					'<%= js.output %>': [
						'<%= js.output %>'
					]
				}
			}
		},

		watch: {
			css: {
				files: '<%= css.input %>',
				tasks: [
					'sass:dev'
				]
			},
			scripts: {
				files: 'app/**/*.js',
				tasks: [
					'jshint',
					'concat:dev'
				]
			}
		},

		nodemon: {
			dev: {
				options: {
					cwd: __dirname,
					env: {
						NODE_ENV: 'development',
						PORT: '3000'
					},
					file: 'app.js',
					ignoredFiles: [
						'app/assets/**',
						'public/**',
						'node_modules/**'
					],
					legacyWatch: true,
					watchedExtensions: [
						'hbs',
						'js'
					],
					watchedFolders: [
						'app'
					]
				}
			}
		},

		concurrent: {
			dev: {
				tasks: [
					'nodemon',
					'watch'
				],
				options: {
					logConcurrentOutput: true
				}
			}
		}
	});

	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.registerTask('default', [
		'sass:dev',
		'jshint',
		'concat:dev',
		'concurrent'
	]);

	grunt.registerTask('build', [
		'sass:dist',
		'jshint',
		'uglify'
	]);
};
