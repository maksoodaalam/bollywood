class Pagination {
  constructor({
    currentPage, size, nextPage, prevPage, totalPage,
  }) {
    this.currentPage = currentPage;
    this.size = size;
    this.nextPage = nextPage;
    this.prevPage = prevPage;
    this.totalPage = totalPage;
  }
}

module.exports = Pagination;