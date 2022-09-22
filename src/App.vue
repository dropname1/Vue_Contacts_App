<template>
  <router-view 
  tag="menu-contact"
  :contactList="contactList"
  ></router-view>
</template>

<script>
import contactItemVue from './components/contactItem.vue'
import menuContactVue from './components/menuContact.vue'
import ContactItem from './components/contactItem.vue';
  export default {
    data () {
      return {
        contactList: [
          {id: 1, name: 'Ander', number: '+1 224-799-9050',  email: 'example11@mail.com'},
          {id: 2, name: 'Jone', number: '+1 505-644-1213',  email: 'example22@mail.com'},
          {id: 3, name: 'Olden', number: '+1 218-631-0191',  email: 'example33@mail.com'},
          {id: 4, name: 'Filon', number: '+1 201-734-6864',  email: 'example44@mail.com'},
          {id: 5, name: 'Alter', number: '+1 206-751-1345',  email: 'example55@mail.com'},
        ]

      }
    },
    methods: {
      
    },
    components: {
    menuContact: menuContactVue,
    contactItem: contactItemVue,
    ContactItem
}
  }
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
}
</style>
