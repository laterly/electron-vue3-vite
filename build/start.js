const concurrently = require('concurrently')
concurrently(
  [
    { command: 'npm run dev:vite', prefixColor: 'green', name: 'renderer'},
    { command: 'npm run dev:main', prefixColor: 'magenta', name: 'main' },
  ],
  {
    killOthers: ['failure', 'success'],
  }
).then(
  () => {
    console.log('exit!')
  },
  () => {
    console.log('exit!')
  }
)
