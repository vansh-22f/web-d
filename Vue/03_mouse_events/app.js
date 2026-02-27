// import createApp from 'https://unpkg.com/vue@3/dist/vue.global.js'   

const app=Vue.createApp({
    //data, functions
    data() {
        return {
            showBooks:true,
            title: "Alchemist",
            count:0,
            x:0,
            y:0
        }
    },
    methods:{
        toggleBooks(){
            this.showBooks=!this.showBooks;
        },
        handleEvent(e,data){
            console.log(e,e.type);
            if(data){
                console.log(data)
            }
        },
        handlemousemove(e){
            this.x=e.offsetX
            this.y=e.offsetY

        }
    }

})

app.mount('#app')