const path = require('path')
const fs = require('fs')
const { env } = require('process')
const {npm_lifecycle_script} = env
const envs = /--mode(.*) &&\s/.exec(npm_lifecycle_script)
const envNode = envs[1].trim()
console.log('envNode:',envNode)

function copyFile(source,dest){
  try{
    fs.copyFileSync(source,dest)
    console.log('复制成功：',`from ${source} to ${dest}`)
  }catch(e){
    console.log(e,'拷贝文件失败：',`from ${source} to ${dest}`)
  }
}
const sourceFile = path.join(__dirname, `static/config.${envNode}.js`)
const destFile = path.join(__dirname,'build/js/config.js')

copyFile(sourceFile,destFile)

