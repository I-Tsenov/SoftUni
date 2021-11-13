class ArtGallery {
    constructor(creator) {
        this.creator = creator,
            this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 },
            this.listOfArticles = [],  // [{},{},{}]
            this.guests = []  // [{},{},{}]
    }

    addArticle(articleModel, articleName, quantity) {

        articleModel = articleModel.toLowerCase();

        if (this.possibleArticles.hasOwnProperty(articleModel) === false) {
            throw new Error("This article model is not included in this gallery!")
        } else {

            const isOnTheList = this.listOfArticles.some(a => a.articleModel === articleModel && a.articleName === articleName)

            if (isOnTheList === false) {
                this.listOfArticles.push({ articleModel, articleName, quantity })
            } else {
                const index = this.listOfArticles.findIndex(a => a.articleModel === articleModel && a.articleName === articleName)
                this.listOfArticles[index].quantity += quantity;
            }

            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        }
    }

    inviteGuest(guestName, personality) {

        let points = 0;

        switch (personality) {
            case 'Vip': points = 500;
                break;
            case 'Middle': points = 250;
                break;
            default: points = 50;
                break;
        }

        if (this.guests.some(g => g.guestName === guestName)) {
            throw new Error(`${guestName} has already been invited.`)
        } else {
            this.guests.push({ guestName, points, purchaseArticle: 0 })
        }

        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {

        const isFound = this.listOfArticles.find(a => a.articleModel === articleModel && a.articleName === articleName);

        if (isFound === undefined) {
            throw new Error("This article is not found.");
        }
        if (isFound.quantity === 0) {
            return `The ${articleName} is not available.`;
        }
        if (this.guests.some(g => g.guestName === guestName) === false) {
            return "This guest is not invited.";
        } else {
            const currentGuest = this.guests.find(g => g.guestName === guestName)
            const guestPoints = currentGuest.points;
            const neededPoints = this.possibleArticles[articleModel];

            if (neededPoints > guestPoints) {
                return "You need to more points to purchase the article."
            } else {
                currentGuest.points -= neededPoints;
                currentGuest.purchaseArticle += 1;
                isFound.quantity -= 1;
            }

            return `${guestName} successfully purchased the article worth ${neededPoints} points.`
        }
    }

    showGalleryInfo(criteria) {

        const result = [];
        
        if (criteria === 'article') {

            result.push("Articles information:")
            this.listOfArticles.forEach(a => result.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`))

        } else if (criteria === 'guest') {

            result.push("Guests information:");
            this.guests.forEach(g => result.push(`${g.guestName} - ${g.purchaseArticle}`))
        }

        return result.join('\n')
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
