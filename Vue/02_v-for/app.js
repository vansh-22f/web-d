const app=Vue.createApp({
    data() {
        return {
            showBooks: true,
            url:'www.google.com.com',
            books: [
                { title: 'abc', author: 'xyz' ,img:'./this1.JPG'},
                { title: 'physics', author: 'phy',img:'./this1.JPG' }
            ]
        };
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        }
    }
})
app.mount('#app');
