export const validate = (schema) => {

    // it retrns a validating middleware
    return async (req, res, next) => {
        try {
            console.log(req.body);
            schema.parse(req.body);
            next();
        } catch(error) {
            return res.status(400).json({
                error: error.errors,
                success: false,
                message: "Validationfailed"

            });
        }

    }
}