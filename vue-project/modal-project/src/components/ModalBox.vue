<template>
    <div class="backdrop" @click="closeModal">
        <div class="modal" :class="{sale:theme===sale}">
            <!-- <p>{{header}}</p>
            <h3>{{ text }}</h3>
            <h4>Model Content</h4> -->
            <slot>
                
            </slot>
        </div>
    </div>

</template>

<script>
export default{
    props:['header','text','theme'],
    methods:{
        closeModal(){
            this.$emit('close')
        }
    }

   
}

</script>

<style>
    .modal{
       width:400px;
       padding:200px;
       margin:100px auto;
       background:white;
       border-radius:10px;
    }
    .backdrop{
        top:0;
        position:fixed;
        background:rgba(0,0,0,0.5);
        width:100%;
        height:100%;
    }
    .modal h1{
        color:pink;
    }
    .modal.sale{
        color:beige;
        background:rgb(91, 206, 91);
    }


</style>