/**
 * @swagger
 * components:
 *  schemas:
 *      SuccessResponse: 
 *          type: object
 *          properties:
 *              status:
 *                  type: integer
 *                  example: 200
 *              data:
 *                  type: Any
 */

export const success = (status, data) => {
    return {
        status: status,
        data: data
    }
}

/**
 * @swagger
 * components:
 *  schemas:
 *      FailResponse: 
 *          type: object
 *          properties:
 *              status:
 *                  type: integer
 *                  example: 400
 *              data:
 *                  type: Any
 */

export const fail = (status, data) => {
    return {
        status: status,
        error: data
    }
}