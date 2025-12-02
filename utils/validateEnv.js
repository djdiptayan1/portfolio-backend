const Joi = require('joi');

const envSchema = Joi.object({
    NODE_ENV: Joi.string()
        .valid('development', 'production', 'test')
        .default('development'),
    PORT: Joi.number()
        .port()
        .default(3000),
    MONGODB_URI: Joi.string()
        .uri()
        .required()
        .description('MongoDB connection URI is required'),
    DB_NAME: Joi.string()
        .required()
        .description('Database name is required'),
}).unknown();

const validateEnv = () => {
    const { error, value } = envSchema.validate(process.env, {
        abortEarly: false,
        allowUnknown: true,
    });

    if (error) {
        const errorMessages = error.details.map(detail => detail.message).join('\n');
        throw new Error(`Environment validation failed:\n${errorMessages}`);
    }

    if (value.NODE_ENV === 'development') {
        console.log('✓ Environment variables validated successfully');
    }

    return value;
};

module.exports = { validateEnv };
