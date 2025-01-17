const validate = (schema) =>async(req,res,next)=>{

    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();

    } catch (err) {
        const status = 422;
        const message = err.issues[0].message

        const error = {
            status,
            message
        }
        next(error);
    }

};

export default validate