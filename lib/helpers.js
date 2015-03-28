var exec = require('child_process').exec;

exports.checkSshPassExists = function(callback) {
  exec('sshpass -V', function(err, stdout, stderr) {
    if(err) {
      callback(false);
    } else {
      callback(true);
    }
  });
};

exports.printHelp = function() {
  console.error('\nValid Actions');
  console.error('-------------');
  console.error('init                          - Initialize a Meteor Up project');
  console.error('setup [<config-file>]         - Setup the server');
  console.error('');
  console.error('deploy [<config-file>]        - Deploy app to server');
  console.error('reconfig [<config-file>]      - Reconfigure the server and restart');
  console.error('');
  console.error('logs [-f -n] [<config-file>]  - Access logs');
  console.error('');
  console.error('start [<config-file>]         - Start your app instances');
  console.error('stop [<config-file>]          - Stop your app instances');
  console.error('restart [<config-file>]       - Restart your app instances');

};
