require("dotenv").config();

const PORT = process.env.PORT || 8800;
const CONNECTION_STRING = process.env.CONNECTION_STRING;

module.exports = {
    PORT,
    CONNECTION_STRING,
};
