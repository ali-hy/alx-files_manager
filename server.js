import express from 'express';
import router from './routes';

const PORT = process.env.PORT || 5000;
const app = express();

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
