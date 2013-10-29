module.exports = function(grunt) {
  /**
   * Load node modules
   */
  var fs = require('fs');
  var path_global = require('path');

  /**
   * Load tasks
   */
  grunt.loadNpmTasks('lesshat-devstack');
  grunt.loadNpmTasks('grunt-prompt');

  /**
   * Grunt config
   */
  grunt.initConfig({
    generator: {
      settings: {
        mixin_name: null,
        default_value: null,
        vendors: null
      }
    },

    prompt: {
      shell: {
        options: {
          questions: [{
            config: 'generator.settings.mixin_name',
            type: 'input',
            message: 'What is the name of new mixin? (e.g. animationDelay)',
            filter: function(value) {
              grunt.config('generator.settings.mixin_css_name', value.replace(/([A-Z])/g, function(upperCase) {
                return '-' + upperCase.toLowerCase();
              }));
              grunt.config('generator.settings.mixin_name | firstLetter', value[0].toUpperCase() + value.slice(1));
              return value[0].toLowerCase() + value.slice(1);
            },
            validate: function(value) {
              if (/[a-z0-9]+/i.test(value)) {
                return true;
              } else {
                return 'Please fill only valid characters [a-zA-Z0-9].';
              }
            }
          }, {
            config: 'generator.settings.vendors',
            type: 'checkbox',
            message: 'For which browsers is this mixin?',
            choices: [{
              name: 'webkit'
            }, {
              name: 'moz'
            }, {
              name: 'opera'
            }, {
              name: 'ms',
            }]
          }, {
            config: 'generator.settings.default_value',
            type: 'input',
            default: 'none',
            filter: function(value) {
              return '\'' + value + '\'';
            },
            message: 'What is default value of the mixin? Optional – you can skip',
          }]
        }
      }
    }

  });

  /**
   * Register tasks
   */
  grunt.registerTask('prefix', function () {
    var path = path_global.join(__dirname, '/build/');
    // Check whether build folder exists
    if (!fs.existsSync(path)) {
      grunt.fail.fatal('Mixins folder does not exist.');
    }
    // Check whether lesshat.less exists
    if (!fs.existsSync(path + 'lesshat.less')) {
      grunt.fail.fatal('Mixin template does not exist.');
    }
    var mixins = fs.readFileSync(path + 'lesshat.less', 'utf8');
    mixins = mixins.replace(/^\.([a-z0-9-]+\([a-z@., 0-9-]+)/gm, function (match, sub_1) { return '.lh-' + sub_1; });
    fs.writeFileSync(path + 'lesshat-prefixed.less', mixins);

    grunt.log.ok('Prefixed version – DONE');
  });

  grunt.registerTask('generator', function() {

    grunt.task.requires('prompt');

    var config = grunt.config('generator.settings');
    var path = path_global.join(__dirname, '/mixins/');

    // Check whether mixins folder exists
    if (!fs.existsSync(path)) {
      grunt.fail.fatal('Mixins folder does not exist. Try to install the whole workflow again,\nor send issue on github.');
    }

    // Check whether concrete mixin folder exists
    if (fs.existsSync(path + config.mixin_css_name)) {
      grunt.fail.fatal(config.mixin_css_name + ' folder already exists. Choose another name.');
    }

    // Create folder
    var folder = fs.mkdirSync(path + config.mixin_css_name);
    grunt.log.ok('Folder created – DONE');

    // Create files inside folder
    var lesshatdev_path = path_global.resolve(__dirname, './node_modules/lesshat-dev/src/');

    // Check whether mixin template exists
    if (fs.existsSync(lesshatdev_path + 'mixin-template.js')) {
      grunt.fail.fatal('Mixin template does not exist. Try to install the whole workflow again,\nor send issue on github.');
    }

    function fileCreator(mixin_name, path, data, exported, done) {
      var mixin_template_path = path.global.join(path.template, mixin_name + '.js');
      var mixin_template = fs.readFileSync(mixin_template_path, 'utf8');

      mixin_template = mixin_template.replace(/{{\s*(\w+\s*\|?\s*\w+)\s*}}/g, function(match, variable) {
        return (!(config[variable] instanceof Array) && (config[variable])) || (JSON.stringify(data[variable]).replace(/"/g, '\''));
      });
      fs.writeFileSync(path.global.join(path.local, exported.path, exported.file + '.js'), mixin_template);

      if (done) done();
    }

    fileCreator('mixin-template', {
      global: path_global,
      local: path,
      template: lesshatdev_path
    }, config, {
      path: config.mixin_css_name,
      file: config.mixin_css_name
    }, function() {
      grunt.log.ok('Mixin file created – DONE');
    });

    fileCreator('test-template', {
      global: path_global,
      local: path,
      template: lesshatdev_path
    }, config, {
      path: config.mixin_css_name,
      file: 'test'
    }, function() {
      grunt.log.ok('Test file created – DONE');
    });

  });

  grunt.registerTask('default', ['build', 'test', 'prefix']);
  grunt.registerTask('generate', ['prompt', 'generator']);

};