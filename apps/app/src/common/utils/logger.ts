export const logger = {
    error: (err: Error) => {
        console.error(err);
    },
    warn: (message: any, ...optionalParams: any[]) => {
        console.warn(message, ...optionalParams);
    },
    info: (message?: any, ...optionalParams: any[]) => {
        console.info(message, ...optionalParams);
    },
    log: (message?: any, ...optionalParams: any[]) => {
        console.log(message, ...optionalParams);
    }
}