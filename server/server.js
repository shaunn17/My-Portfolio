const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contact');
const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use('/api/contact', contactRoutes);

mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
