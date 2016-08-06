import gulp from 'gulp';
import eslint from 'gulp-eslint';
import path from 'path';
import yargs    from 'yargs';
import rename   from 'gulp-rename';
import template from 'gulp-template';
// import del from 'del';
// import gutil    from 'gulp-util';

let root = 'src';

// helper method for resolving paths
let resolveToApp = (glob = '') => {
    return path.join(root, 'app', glob);
};

let resolveToComponents = (glob = '') => {
    return path.join(root, 'app/components', glob);
};

// map of all paths
let paths = {
    js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
    scss: resolveToApp('**/*.scss'),
    html: [
        resolveToApp('**/*.html'),
        path.join(root, 'index.html')
    ],
    entry: [
        'babel-polyfill',
        path.join(__dirname, root, 'app/app.module.js')
    ],
    output: root,
    dest: path.join(__dirname, 'tmp'),
    lint: [
        'gulpfile.babel.js',
        resolveToApp('**/*.js')
    ]
};

// will run coding style checks
gulp.task('lint', () => {
  return gulp
    .src(paths.lint)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});


gulp.task('component', () => {
  const cap = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  const name = yargs.argv.name;
  const parentPath = yargs.argv.parent || '';
  const destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(paths.blankTemplates)
    .pipe(template({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('watch', ['lint']);//serve

gulp.task('default', ['watch']);