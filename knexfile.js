module.exports = {
  client: "sqlite3",
  connection: {
    filename: "./src/db/db.sqlite3",
  },
  migrations: {
    directory: "./src/db/migrations",
  },
  useNullAsDefault: true,
};
