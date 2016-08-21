var vogels = require('vogels'),
    Joi    = require('joi');

var Job = vogels.define('Job', {
  hashKey : 'job_id',
  timestamps : true,
  schema : {
    job_id : vogels.types.uuid(),
    job_description : Joi.string(),
    job_title: Joi.string()
  },
  tableName: 'work_remote_jobs'
});

module.exports = Job;
