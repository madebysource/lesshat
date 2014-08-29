#!/usr/bin/env node

var error = function (err) {
  console.error(err)
  process.exit(1)
}

var fs = require('fs')
var path = require('path')
var less = require('less-minimal')
var lesshat = fs.readFileSync(require.resolve('../build/lesshat.less'))

var filepath = process.argv[2] || ''

if (!filepath) {
  error('Usage: lesshat file.less')
}

fs.readFile(filepath, 'utf-8', function (err, file) {
  if (err) {
    error('Cannot open file ' + filepath)
  } else {
    var file = file + lesshat

    var parser = new less.Parser({
      paths: [path.dirname(filepath)],
      filename: path.basename(filepath),
    })

    parser.parse(file, function (err, tree) {
      if (err) {
        error(err)
      }

      try {
        css = tree && tree.toCSS && tree.toCSS()
        console.log(css)
      } catch (err) {
        error(err)
      }
    })
  }
})
