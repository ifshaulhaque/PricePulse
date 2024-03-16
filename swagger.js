import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'PricePulse',
            version: '1.0.0',
            description: 'API documentation for PricePulse application',
        },
        servers: [
            {
                url: "http://localhost:8080"
            },
            {
                url: "https://lively-pink-coati.cyclic.app"
            }
        ]
    },
    apis: [
        './api/*/*.js',
        './api/*.js'
    ],
};
const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;