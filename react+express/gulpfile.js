var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var source = require('vinyl-source-stream')

// npm install --save-dev gulp-util browserify watchify babelify vinyl-source-stream


gulp.task('compile', function() {
    var bundler = watchify(browserify({
        entries: ['./src/App.jsx'],
        // transform: [reactify],
        transform: [["babelify", {presets: ["es2015", "react"]}]],
        extensions: ['.js'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));
    function build(file) {
        if (file) gutil.log('Recompiling ' + file);
        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('main.js'))
            .pipe(gulp.dest('./build'));
    };
    build();
    bundler.on('update', build);

})