'use strict';
var AWS = require('aws-sdk');
var uuid = require('node-uuid');

module.exports.jobs = (event, context, cb) => {
  var dynamodb = new AWS.DynamoDB();
  var tableName = 'work_remote_jobs';

  switch (event.method) {
    case "POST":
      var params = {
        "Item": {
          "job_id": {"S": uuid.v1()},
          "job_title": {"S": event.body.job_title},
          "job_description": {"S": event.body.description}

        },
        "TableName": tableName
      };

      dynamodb.putItem(params, function(err, data) {
        cb(null, {
          error: err,
          data: data
        });
      });
      break;

    case "GET":
      // var params = {
      //   "Item": {
      //     "job_id": {"S": "random"},
      //     "job_title": {"S": event.body.job_title},
      //     "job_description": {"S": event.body.description}

      //   },
      //   "TableName": 'work_remote_jobs'
      // };

      // dynamodb.putItem(params, function(err, data) {
      //   cb(null, {
      //     context: context,
      //     event: event,
      //     error: err,
      //     data: data
      //   });
      // });
      cb(null, {
          context: context,
          event: event
        });
      break;
  }
}
