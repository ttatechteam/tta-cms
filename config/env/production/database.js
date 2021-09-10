const parse = require("pg-connection-string").parse;
//const config = parse(process.env.DATABASE_URL);
const config = parse("postgres://ygtbdkhctuvzog:c19bf9a5ea8a2a0aa1e3bc9a4b6d640dffd0baa5bb5ceb77a28d71bcfb266ce1@ec2-23-20-70-32.compute-1.amazonaws.com:5432/dfo54hfd3odho");

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
      },
      options: {
        ssl: false,
      },
    },
  },
});
