const server = require('./src/app');


// Syncing all the models at once.

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });

