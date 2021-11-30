const path = require('path')
const chalk = require('chalk');
const markdownMagic = require('markdown-magic')



const callback = function(updatedContent, outputConfig) {
  console.log(chalk.green('Finished compiling documentation.'));
}

const configReadme = {
  matchWord: 'AURO-GENERATED-CONTENT',
  outputDir: './'
}

const markdownPathReadme = path.join(__dirname, '../docTemplates/README.md')

markdownMagic(markdownPathReadme, configReadme, callback)


const configDemo = {
  matchWord: 'AURO-GENERATED-CONTENT',
  outputDir: './demo'
}

const markdownPathDemo = path.join(__dirname, '../docTemplates/demo.md')

markdownMagic(markdownPathDemo, configDemo, callback)
