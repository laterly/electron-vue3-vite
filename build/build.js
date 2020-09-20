
const webpack = require('webpack');
const { resolve } =require('path')
const ora = require('ora');
const { spawn } = require('child_process')
const rm = require('rimraf');
const chalk = require('chalk');
const webpackConfig = require('./webpack.config.main.js');
const electron = require('electron')
const spinner = ora('building production electron...')
spinner.start();
let electronProcess = null

const startMain=()=> {
  return new Promise((resolve) => {

    rm('./dist/main.js', (removeErr) => {
      if (removeErr) {throw removeErr};
      webpackConfig.mode = 'production'
      const compiler = webpack(webpackConfig);
      compiler.watch({}, (err, stats) => {
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
        resolve();
        console.log(chalk.cyan(`Build complete production in ${stats.endTime-stats.startTime}ms.\n`));
        
        if(process.env.IS_BUILDER === 'builder') process.exit()
      })
    });
  })
}


const startElectron=()=> {
  if(process.env.IS_BUILDER === 'builder') return
  var args = [
    '--inspect=5858',
    resolve(__dirname, '../dist/main.js')
  ]
  electronProcess = spawn(electron, args)
 
  electronProcess.on('close', () => {
    process.exit()
  })
}
async function init() {
  try {
    await startMain()
    await startElectron()
  } catch (error) {
    console.error(error)
  }

}
init();