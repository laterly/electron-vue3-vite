
const webpack = require('webpack');
const { resolve } =require('path')
const ora = require('ora');
const { spawn } = require('child_process')
const rm = require('rimraf');
const chalk = require('chalk');
const webpackConfig = require('./webpack.config.main.js');
const electron = require('electron')
const spinner = ora('building development electron...')
spinner.start();
let electronProcess = null
let manualRestart = false

const startMain=()=> {
  return new Promise((resolve) => {

    rm('./dist/main.js', (removeErr) => {
      if (removeErr) {throw removeErr};
      webpackConfig.mode = 'development'
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
        if (electronProcess && electronProcess.kill) {
          manualRestart = true
          process.kill(electronProcess.pid)
          electronProcess = null
          startElectron()

          setTimeout(() => {
            manualRestart = false
          }, 5000)
        }
        resolve();
        console.log(chalk.cyan('Build complete development.\n'));
      })
    });
  })
}


const startElectron=()=> {
  var args = [
    '--inspect=5858',
    resolve(__dirname, '../dist/main.js')
  ]
  electronProcess = spawn(electron, args)
 
  electronProcess.stdout.on('data', data => {
    // console.log(chalk.blue(data.toString()));
  })
  electronProcess.stderr.on('data', data => {
    // console.log(chalk.blue(data.toString()));
  })

  electronProcess.on('close', () => {
    if (!manualRestart) process.exit()
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