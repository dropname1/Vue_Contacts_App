<template>
  <div class="wrapper" >
    <h1 @click.prevent="gotoContact" class="title"><a class="textDecorationNone" href="">My Contacts</a></h1>
  </div>
</template>

<script>
    import contactItemVue from '@/components/contactItem.vue';
export default {
    component: {
        contactItem: contactItemVue
    },
    methods: {
        gotoContact() {
            this.$router.push('/cont')
        }
    },
    props: [
        'contactList'
    ]
}
</script>

<style scoped>
    .wrapper {
        background-color: #2d2d2d;
        display: flex;
        width: 100%;
        height: 100vh;
    }
.title {
    background-color: #2ecb71;
    border-bottom: 4px solid #15b358;
    padding: 10px 20px;
    border-radius: 10px;
    margin: auto;
    transition: 0.3s;
    cursor: pointer;
}
.title:hover {
    transition: 0.3s;
    transform: translate(2px,2px);
    box-shadow: 1px 1px 10px black;
}
.textDecorationNone {
    text-decoration: none;
    color: white;
    font-size: 30px
}
</style>