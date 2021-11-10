(function artStort() {

    class Story {
        constructor(title, creator) {
            this.title = title;
            this.creator = creator;
            this._comments = [];
            this._likes = [];
            this._counter = 0;
        }

        get likes() {
            if (this._likes.length === 0) {
                return `${this.title} has 0 likes`
            } else if (this._likes.length === 1) {
                return `${this._likes[0]} likes this story!`;
            }

            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }


        like(username) {
            if (this._likes.includes(username)) {
                throw new Error("You can't like the same story twice!");
            } else if (username === this.creator) {
                throw new Error("You can't like your own story!");
            }

            this._likes.push(username)
            return `${username} liked ${this.title}!`;
        }

        dislike(username) {
            if (!this._likes.includes(username)) {
                throw new Error("You can't dislike this story!");
            }

            let index = this._likes.indexOf(username);
            this._likes.splice(index, 1);
            return `${username} disliked ${this.title}`;
        }

        _hasCommentWithId = (id) => id === undefined || this._comments.filter(e => e.id == id).length === 0;

        comment(username, content, id) {

            if (this._hasCommentWithId(id)) {
                this._counter++

                const newComment = {
                    'id': this._counter,
                    'username': username,
                    'content': content,
                    'replies': []
                }

                this._comments.push(newComment)
                return `${username} commented on ${this.title}`
            }

            let currentComment = this._comments.findIndex(e => e.id == id)

            if (currentComment !== -1) {

                const newReply = {
                    'id': id + '.' + (this._comments[currentComment].replies.length + 1),
                    'username': username,
                    'content': content,
                }

                this._comments[currentComment].replies.push(newReply);
                return `You replied successfully`;
            }
        }

        toString(sortingType) {

            let firstOutput = `Title: ${this.title}\n` +
                `Creator: ${this.creator}\n` +
                `Likes: ${this._likes.length}\n` +
                `Comments:\n`

            let secondOutput = [];

            if (this._comments.length > 0) {

                let sortedArrObj = [];
                let commentSortFunc = null;

                switch (sortingType) {

                    case 'asc':
                        commentSortFunc = (a, b) => Number(a.id) - Number(b.id);
                        break;
                    case 'desc':
                        commentSortFunc = (a, b) => Number(b.id) - Number(a.id);
                        break;
                    case 'username':
                        commentSortFunc = (a, b) => a.username.localeCompare(b.username);
                        break;
                }

                sortedArrObj = this._comments.sort(commentSortFunc);
                sortedArrObj.forEach((currentObj) => {
                    if (currentObj.replies.length > 1) {
                        currentObj.replies.sort(commentSortFunc)
                    }
                });

                sortedArrObj.forEach(({ id, username, content, replies }) => {
                    secondOutput.push(`-- ${id}. ${username}: ${content}`)
                    replies.forEach(({ id, username, content }) => secondOutput.push(`--- ${id}. ${username}: ${content}`))
                })
            }

            let finalOutput = firstOutput + secondOutput.join('\n')
            return finalOutput.trim()
        }
    }

    let art = new Story("My Story", "Anny");
    art.like("John");
    console.log(art.likes);
    art.dislike("John");
    console.log(art.likes);
    art.comment("Sammy", "Some Content");
    console.log(art.comment("Ammy", "New Content"));
    art.comment("Zane", "Reply", 1);
    art.comment("Jessy", "Nice :)");
    console.log(art.comment("SAmmy", "Reply@", 1));
    console.log()
    console.log(art.toString('username'));
    art.like('Zane')
    console.log()
    console.log(art.toString('desc'));
    console.log()
    console.log(art.toString('asc'));

})()