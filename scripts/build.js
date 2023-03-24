const prompts = require('prompts');
const execa = require('execa')

const templateChoices = [
  {
    title: 'x86_64-pc-windows-msvc',
    value: 'x86_64-pc-windows-msvc',
  },
  {
    title: 'x86_64-apple-darwin',
    value: 'x86_64-apple-darwin',
  },
  {
    title: 'x86_64-unknown-linux-gnu',
    value: 'x86_64-unknown-linux-gnu',
  },
]
const questions = [
  {
    type: 'multiselect',
    name: 'platforms',
    message: 'select build target template',
    choices: templateChoices
  }
]


const run = async () => {
  const args = ['napi', 'build', '--platform']

  // --target
  const { platforms } = await prompts(questions)
  // --release
  const { release } = await prompts({
    type: 'confirm',
    name: 'release',
    message: 'Is release build.',
    initial: true
  })
  // --dts 
  const { dts } = await prompts({
    type: 'text',
    name: 'dts',
    message: 'input dts file name',
    initial: 'index.d.ts'
  })
  if(release) {
    args.push('--release')
  }
  if(dts) {
    args.push(`--dts=${dts}`)
  }
  Promise.all(platforms.map(platform => {
    return execa('npx', [...args, `--target=${platform}`])
  })).then(() => {
    return execa('npm', ['run', 'move'])
  }).catch(e => {
    console.log(e)
  })
}

run()