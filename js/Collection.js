export class Collection {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    addInLocalStorage(item) {
        let collection = JSON.parse(localStorage.getItem('collection'));
        if (collection == null) {
            collection = [];
        }
        collection.push(item);
        localStorage.setItem('collection', JSON.stringify(collection));
    }

    removeMedia(item) {
        let index = this.items.indexOf(item);
        this.items.splice(index, 1);

    }


    deleteFromLocalStorage(item) {
        let collection = JSON.parse(localStorage.getItem('collection'));
        let index = collection.indexOf(item);
        collection.splice(index, 1);
        localStorage.setItem('collection', JSON.stringify(collection));
    }

    getItems() {
        return this.items;
    }
}