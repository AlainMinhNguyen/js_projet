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


    removeMedia(title) {
        let collection = JSON.parse(localStorage.getItem('collection'));
        if (collection == null) {
            collection = [];
        }
        for (let i = 0; i < collection.length; i++) {
            if (collection[i].title == title) {
                collection.splice(i, 1);
            }
        }
        localStorage.setItem('collection', JSON.stringify(collection));
    }



    getItems() {
        return this.items;
    }
}