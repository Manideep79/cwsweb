// const express = require('express');
// const bodyParser = require('body-parser');
// const authRoutes = require('./routes/authRoutes');
// const app = express();
// const port = 5000;

// app.use(bodyParser.json());
// app.use('/auth', authRoutes);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });




const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import the cors module
const authRoutes = require('./routes/authRoutes');
const app = express();
const port = 3000;

app.use(cors());  // Enable CORS for all routes
app.use(bodyParser.json());
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
