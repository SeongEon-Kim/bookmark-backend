const pgClient = require("../connections/postgresql");

class LastPageRepository {
  constructor() {
    this._repositoryName = "LastPageRepository";
  }
  get name() {
    return this._repositoryName;
  }

  async updateLastPageList(bookId, currentPage, totalPage) {
    const query = pgClient
      .update("tbl_mybook")
      .set("cuurent_page", currentPage, "total_page", totalPage)
      .where("id", bookId);

    return await query;
  }
}

module.exports = {
  LastPageRepository,
};
