module.exports = {
  apps: [{
    name: 'server',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-35-180-100-112.eu-west-3.compute.amazonaws.com',
      key: '~/.ssh/swilfart-keypair.pem',
      ref: 'origin/master',
      repo: 'git@github.com:swilfart/test_server.git',
      path: '/home/ubuntu/test_server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
