const webpack = require('webpack');
const ora = require('ora');
const rm = require('rimraf');
const chalk = require('chalk');
const webpackConfig = require('./webpack.config.main.js');

const spinner = ora('building for production...')
spinner.start();

rm('./dist/main.js', (removeErr) => {
  if (removeErr) throw removeErr;
  webpackConfig.mode='production'
  webpack(webpackConfig, (err, stats) => {
    if (err) throw err;
    spinner.stop();
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n');

    if (stats.hasErrors()) {
      console.log(chalk.red('Build failed with errors.\n'));
      process.exit(1);
    }

    console.log(chalk.cyan(`Build complete production in ${stats.endTime-stats.startTime}ms.\n`));
    process.exit();
  });
});