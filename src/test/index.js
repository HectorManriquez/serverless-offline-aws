'use strict';

const test = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: 'Hello World! This is a test!',
  };

  callback(null, response);
};

export default test;