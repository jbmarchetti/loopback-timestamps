module.exports = function(object){
  object.observe('before save', function updateTimestamp(ctx, next) {
    if (ctx.instance)
      ctx.instance.created_at = new Date();
     else
      ctx.data.updated_at = new Date();
    next();
  });
};
