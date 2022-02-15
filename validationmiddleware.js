const Validate=require('./schema');
exports.validate = (schema) => (req, res, next) => {
    const {
      error
    } = schema.validate(req.body);
    if (error) {
      res.send(error.details[0].message);
    } else {
      next();
    }
  };