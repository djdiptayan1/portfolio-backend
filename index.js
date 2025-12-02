const dotenv = require('dotenv');
const app = require('./app');
const { connectDB } = require('./utils/db');
const { validateEnv } = require('./utils/validateEnv');

dotenv.config();

try {
  validateEnv();

} catch (error) {
  console.error('❌ Environment validation error:');
  console.error(error.message);
  process.exit(1);
}

const PORT = process.env.PORT || 3000;


connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to the database:', err);
    process.exit(1);
  });