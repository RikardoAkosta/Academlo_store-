const { app } = require("./app");

const { initModels } = require("./models/initModels");

const { db } = require("./utils/database.util");

const startServer = async () => {
  try {
    await db.authenticate();

    initModels();

    await db.sync();

    const PORT = process.env.PORT || 4000;

    app.listen(PORT, () => {
      console.log(`Express app running on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
