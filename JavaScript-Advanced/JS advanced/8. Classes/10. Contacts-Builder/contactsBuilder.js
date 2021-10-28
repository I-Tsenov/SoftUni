function contactsBuilder() {

    class Contact {
        constructor(firstName, lastName, phone, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.phone = phone;
            this.email = email;
            this._online = false;
            this.titleID = `${firstName} ${lastName}`
        }

        get online() {
            return this._online
        }

        set online(value) {

            let title = document.getElementById(this.titleID);

            if (value === true) {
                if (title) {
                    title.classList.add('online');
                }
                this._online = true;
            } else {
                if (title) {
                    title.classList.remove('online');
                }
                this._online = false;
            }

            return this._online;
        }

        render(id) {

            let targetNode = document.getElementById(id)
            // let newContact = e('article', e('div', `${this.firstName + ' ' + this.lastName}`, e('button', '&#8505;')), e('div', e('span', `&phone; ${this.phone}`), e('span', `&#9993; ${this.email}`)))
            let article = document.createElement('article');
            let titleDiv = document.createElement('div');
            titleDiv.textContent = `${this.firstName + ' ' + this.lastName}`
            titleDiv.classList.add('title');
            titleDiv.setAttribute('id', this.titleID);
            let buttonInfo = document.createElement('button');
            buttonInfo.textContent = 'ℹ'
            titleDiv.appendChild(buttonInfo);
            let infoDiv = document.createElement('div');
            infoDiv.classList.add('info');
            let phoneSpan = document.createElement('span');
            phoneSpan.textContent = `${'☎'} ${this.phone}`
            let emailSpan = document.createElement('span');
            emailSpan.textContent = `${'✉'} ${this.email}`
            infoDiv.appendChild(phoneSpan);
            infoDiv.appendChild(emailSpan);
            article.appendChild(titleDiv);
            article.appendChild(infoDiv);

            if (this._online === true) {
                titleDiv.classList.add('online');
            }
            infoDiv.style.display = 'none';

            buttonInfo.addEventListener('click', () => {
                if (infoDiv.style.display === 'none') {
                    infoDiv.style.display = 'block'
                } else {
                    infoDiv.style.display = 'none';
                }
            })

            return targetNode.appendChild(article)
            //generates the HTML element and appends it to the element with ID equal to the argument
        }
    }


    let contacts = [
        new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
        new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
        new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
    ];
    contacts.forEach(c => c.render('main'));

    // After 1 second, change the online status to true
    setTimeout(() => contacts[1].online = true, 2000);
};



 // function e(type, ...content) {
    //     const result = document.createElement(type);
    //     content.forEach(e => {
    //         if (typeof e === 'string') {
    //             const node = document.createTextNode(e);
    //             result.appendChild(node);
    //         } else {
    //             result.appendChild(e)
    //         }
    //     });
    //     return result;
    // }