export const success = (status, data) => {
    return {
        status: status,
        data: data
    }
}

export const fail = (status, data) => {
    return {
        status: status,
        error: data
    }
}