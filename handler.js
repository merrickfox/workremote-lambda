'use strict';
var AWS = require('aws-sdk');
var vogels = require('vogels');
var Job = require('./job');

vogels.AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "eu-west-1"
});

module.exports.jobs = (event, context, cb) => {
  var dynamodb = new AWS.DynamoDB();
  var tableName = 'work_remote_jobs';

  console.log('Received event:', JSON.stringify(event, null, 2));

  switch (event.method) {
    case "POST":
      Job.create({
        job_description : event.body.description,
        job_title : event.body.job_title,
      }, function (err, tweet) {
        if (err)  {
          return context.fail(err);
        }

        return context.succeed(event;
      });
      break;
  }

  // switch (event.method) {
  //   case "POST":
  //     var params = {
  //       "Item": {
  //         "job_id": {"S": uuid.v1()},
  //         "job_title": {"S": event.body.job_title},
  //         "job_description": {"S": event.body.description}

  //       },
  //       "TableName": tableName
  //     };

  //     dynamodb.putItem(params, function(err, data) {
  //       cb(null, {
  //         error: err,
  //         data: data
  //       });
  //     });
  //     break;

  //   case "GET":
  //     if (event.path.jobId) {
  //       var params = {
  //         "TableName": tableName,
  //         "Key": {
  //             "job_id": {
  //                 "S": event.path.jobId
  //             }
  //         }
  //       }

  //       dynamodb.getItem(params, function (err, data) {
  //         cb(null, {
  //           err: err,
  //           data, data
  //         });
  //       })

  //     } else {
  //       var params = {
  //         "TableName": tableName
  //       };

  //       dynamodb.scan(params, function (err, data) {
  //         cb(null, {
  //           err: err,
  //           data, data
  //         });
  //       });
  //     }
  //     break;

  //   case "DELETE":
  //     var params = {
  //         "TableName": tableName,
  //         "Key": {
  //             "job_id": {
  //                 "S": event.path.jobId
  //             }
  //         }
  //       }

  //     dynamodb.deleteItem(params, function(err, data) {
  //       cb(null, {
  //         error: err,
  //         data: data
  //       });
  //     });
  //     break;

  //   case "PUT":
  //     var params = {
  //       "TableName": tableName,
  //       "Key": {
  //           "job_id": {
  //               "S": event.path.jobId
  //           }
  //       },
  //       "AttributeUpdates": {
  //         images: { Action: "ADD", Value: item }
  //       }
  //     }

  //     dynamodb.updateItem(params, function(err, data) {
  //       cb(null, {
  //         error: err,
  //         data: data
  //       });
  //     });
  //     break;
  // }
}
