export const handleError = (error) => {
    if (error instanceof Error) {
        return error; // safely return the error
    }
    return new Error('An unknown error occurred');
};
