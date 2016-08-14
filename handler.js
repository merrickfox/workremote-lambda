'use strict';
var AWS = require('aws-sdk');
// Your first function handler
module.exports.jobs = (event, context, cb) => {
  var dynamodb = new AWS.DynamoDB();
  var params = {
    "Item": {
      "job_id": {"S": "random"},
      "job_title": {"S": event.body.job_title},
      "job_description": {"S": event.body.description}

    },
    "TableName": 'work_remote_jobs'
  };

  dynamodb.putItem(params, function(err, data) {
    cb(null, {
      context: context,
      event: event,
      error: err,
      data: data
    });
  });
}

// You can add more handlers here, and reference them in serverless.yml
