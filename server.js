const express = require('express');
const multer = require('multer');
const cors = require('cors'); // 👈 Add this

const app = express();
app.use(cors()); // 👈 And this

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('resume'), (req, res) => {
  const role = req.body.role;

  res.json({
    message: 'Resume uploaded successfully!',
    matchScore: Math.floor(Math.random() * 100),
    role: role,
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});

