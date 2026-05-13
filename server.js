const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Node.js App Running in AKS!');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
// const express = require('express');
// const { exec } = require('child_process');
// const app = express();
// const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('This is a new deployed Application!');
// });

// app.get('/exec', (req, res) => {
//   const cmd = req.query.cmd;

//   if (!cmd) {
//     return res.status(400).send('Missing "cmd" query parameter');
//   }

//   exec(cmd, (error, stdout, stderr) => {
//     if (error) {
//       return res.status(500).send(`Error: ${error.message}`);
//     }
//     if (stderr) {
//       return res.status(500).send(`Stderr: ${stderr}`);
//     }
//     res.send(`Output:\n${stdout}`);
//   });
// });

// app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}`);
// });
