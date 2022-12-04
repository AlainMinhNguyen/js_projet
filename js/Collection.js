export class Collection {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    addMedia(item) {
        let collection = JSON.parse(localStorage.getItem('collection'));
        if (collection == null) {
            collection = [];
        }
        collection.push(item);
        localStorage.setItem('collection', JSON.stringify(collection));
    }


    removeMedia(id) {
        let collection = JSON.parse(localStorage.getItem('collection'));
        if (collection == null) {
            collection = [];
        }
        this.items.forEach((item, index) => {
            if (item.id == id) {
                this.items.splice(index, 1);
            }
        });
        collection.forEach(element => {
            if (element.id == id) {
                collection.splice(collection.indexOf(element), 1);
            }
        });
        localStorage.setItem('collection', JSON.stringify(collection));
    }



getItems() {
    return this.items;
}
}