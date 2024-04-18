export const envConfiguration = () => {
  const values = {
    NODE_ENV: process.env.NODE_ENV || 'develop',
    PRODUCT_MONGODB_URL: process.env.PRODUCT_MONGODB_URL,
    API_PORT: process.env.API_PORT || 5001,
  };
  if (!values.PRODUCT_MONGODB_URL) throw new Error('mongodburl');
  return values;
};
