<template>
    <div>
        <p class="score">
        Your reaction time is {{score}} ms
    </p>
    <p class="rank">
        Ranks is {{rank}}
    </p>
    </div>
</template>

<script>
export default {
    props:['score'],
    data(){
        return {
            rank:null
        }
    },
    mounted(){
        if(this.score<200){
            this.rank='Very good'
        }else if(this.score<300){
            this.rank='Good'
        }else if(this.score<400){
            this.rank='Average'
        }else{
            this.rank='Poor'
        }
    }
}
</script>
<style>
.rank{
    font-size:20px;
    color:rgb(54, 165, 154);
}
.score{
    font-size:20px;
    color:rgb(136, 190, 61);
}
</style>