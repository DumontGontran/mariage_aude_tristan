module.exports = (schema) => async (req, res, next) => {
    try{
        await schema.validate(req.body || req.body && req.file);
        next();
    }
    catch(error) {
        return res.status(400).json({ error });
    }
};