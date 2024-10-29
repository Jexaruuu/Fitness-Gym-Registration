const express = require('express');
const cors = require('cors');
const nameRoutes = require('./routes/fitnessRoutes'); 

const app = express();
app.use(cors());
app.use(express.json()); 

app.use('/api', nameRoutes); 


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
