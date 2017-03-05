var seneca = require('seneca')();
var Redmine = require('node-redmine');

var hostname = process.env.REDMINE_HOST || 'redmine.me';
var config = {
    apiKey: process.env.REDMINE_APIKEY || 'bed1ba0544b681e530c2447341607f423c9c8781'
};

var redmine = new Redmine(hostname, config);

seneca.add('role:redmine,cmd:issues', function(msg, reply) {
    redmine.issues(msg, reply);
});

seneca
  .listen();
