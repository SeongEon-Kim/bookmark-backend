const accountDao = require("./accountDao");
const postingDao = require("./postingDao");
const readingHistoryDao = require("./bookTimerDao");
const lastPageDao = require("./lastPageDao");
const bookShelfDao = require("./bookShelfDao");

module.exports = {
  ...accountDao,
  ...postingDao,
  ...readingHistoryDao,
  ...lastPageDao,
  ...bookShelfDao,
};
