require("dotenv").congig();

const server = require("/api/server.js");
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
