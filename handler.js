exports.logger = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Serverless CI/CD Demo",
      version: 'v6.0',
      timestamp: new Date()
    }),
  };
};
