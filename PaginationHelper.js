class PaginationHelper {
	constructor(collection, itemsPerPage) {
	    this.collection = collection; // все элементы
        this.itemsPerPage = itemsPerPage; // кол-во элементов на странице
	}
	itemCount() {
	    return this.collection.length;
	}
	pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
	}
	pageItemCount(pageIndex = 0) {
	    if (pageIndex > this.pageCount() - 1 || pageIndex < 0) {
            return -1;
        }
        return pageIndex === this.pageCount() - 1 ? this.itemCount() % this.itemsPerPage : this.itemsPerPage;
	}
	pageIndex(itemIndex) {
        if (itemIndex > this.itemCount() || itemIndex < 0) {
            return -1;
        }
        return Math.floor(itemIndex / this.itemsPerPage);
	}
}

const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const helper = new PaginationHelper(collection, 10);
