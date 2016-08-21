var vogels = require('vogels'),
    Joi    = require('joi');

var Job = vogels.define('Job', {
  hashKey : 'job_id',
  timestamps : true,
  schema : {
    job_id : vogels.types.uuid(),
    job_description : Joi.string().required(),
    job_title: Joi.string().required(),
    hq_location: Joi.string().required(),
    salary: Joi.number().integer().greater(0),
    salary_range_high: Joi.number().integer().greater(0),
    salary_range_low: Joi.number().integer().greater(0),
    currency_code: Joi.string().required(),
    website_url: Joi.string().uri(),
    email: Joi.string().email(),
    full_time: Joi.boolean(),
    required_online_from: Joi.string(),
    required_online_to: Joi.string(),
    timezone: Joi.string(),
  },
  tableName: 'work_remote_jobs'
});

module.exports = Job;

/*ideas:
hq coords, some kind of map
office photos
team photos
tech stack

*/
