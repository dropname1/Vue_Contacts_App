<template>
    <div class="itemWrapper">
        <span>{{contacts.id}}</span> 
        <span>{{contacts.name}}</span>
        <span>{{contacts.number}}</span>
        <span>{{contacts.email}}</span>
        <span 
        v-on:click='deleteContact'> 
        &times;</span>
    </div>
</template>

<script>
export default {
    props: [
        'contacts'
    ],
    methods: {
        deleteContact () {
            this.$emit('deleteButton',this.contacts)
        }
    }
}
</script>

<style scoped>
.itemWrapper {
    display: flex;
    height: 45px;
    background-color: #fff;
    border: 1px solid black;
    margin-bottom: 2px;
    margin-right: 20px;
    align-items: center;
    border-radius: 8px;
    padding-left: 10px;
}
.itemWrapper span:nth-child(1) {
    width: 25px;
    height: 25px;
    background-color: #2d2d2d;
    border-radius: 50%;
    margin-right: 10px;
    text-align: center;
    color: white;
    line-height: 25px;
}.itemWrapper span:nth-child(2) {
    width: 70px;
    max-width: 180px;
    overflow: hidden;
    font-weight: bold;
}.itemWrapper span:nth-child(3) {
    width: 140px;
    overflow: hidden;
}.itemWrapper span:nth-child(4) {
    color: gray;
    width: 180px;
    max-width: 240px;
}
.itemWrapper span:nth-child(5) {
    width: 20px;
    font-size: 20px;
    position: relative;
    right: -107px;
    cursor: pointer;
    transition: 0.3s;
}
.itemWrapper span:nth-child(5):hover {
    transition: 0.3s;
    transform: translate(1px,1px);
    text-shadow: 1px 1px 5px black;
}

</style>