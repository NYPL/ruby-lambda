var spawn = require('child_process').spawnSync;

function getRuby() {
    if (process.env.LAMBDA_TASK_ROOT) {
        return './ruby/bin/ruby';
    }

    return 'ruby';
}

exports.handler = function(event, context) {
  var addedEnvironment = {
    GEM_PATH: __dirname
  };

  var options = {
    input: JSON.stringify(event),
    env: Object.assign(
      process.env,
      addedEnvironment
    )
  };


  var spawnedProcess = spawn(
    getRuby(),
    ['-rbundler/setup', 'main.rb'],
    options
  );

  console.log('stdout: ' + spawnedProcess.stdout);
  console.log('stderr: ' + spawnedProcess.stderr);
};
