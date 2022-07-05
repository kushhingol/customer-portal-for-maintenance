export const getBaseURL = () => {
  return process.env.REACT_APP_API_URL ?? 'http://localhost:4000'
};


export const getTitleCase = (value: string) => {
    const result = value.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
}