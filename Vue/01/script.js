// import createApp from 'https://unpkg.com/vue@3/dist/vue.global.js'   

const app=Vue.createApp({
    //data, functions
    data() {
        return {
            objectsdemo:{
                
            }
            showBooks:true,
            title: "Alchemist",
            count:0
        }
    },
    methods:{
        // changeTitle(title){
        //     // this.title="Vansh Mittal"
        //         this.title=title
        //     console.log("Title changed");
        // },
        toggleBooks(){
            this.showBooks=!this.showBooks;
        }
    }

})

app.mount('#app')