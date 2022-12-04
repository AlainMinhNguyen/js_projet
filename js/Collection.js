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

    getNbMedias() {
        return this.items.length;
    }

    filter(media, index){
        let filtered = [];
        this.items.forEach(item => {
            if (item.type == media) {
                filtered.push(item);
            }
        });
        return filtered[index];
    }

    sortByTitle() {
        this.items.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });
    }

    sortByDate() {
        this.items.sort((a, b) => {
            if (a.releaseDate > b.releaseDate) {
                return -1;
            }
            if (a.releaseDate < b.releaseDate) {
                return 1;
            }
            return 0;
        });
    }

    sortByRating() {
        this.items.sort((a, b) => {
            if (a.rating > b.rating) {
                return -1;
            }
            if (a.rating < b.rating) {
                return 1;
            }
            return 0;
        });
    }





getItems() {
    return this.items;
}
}