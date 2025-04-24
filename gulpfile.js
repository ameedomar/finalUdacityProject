import gulp from 'gulp';
import shell from 'gulp-shell';

export const defaultTask = gulp.task('default', shell.task([
    'npx parcel nd0011-c4-starter/starter/index.html'
  ]));
  
  export const test = gulp.task('test', shell.task([
    'npx mocha'
  ]));
  
  export const e2e = gulp.task('e2e', shell.task([
    'npx cypress run'
  ]));