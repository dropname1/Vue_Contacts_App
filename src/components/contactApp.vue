<template>
 <div>
    <div class="wrapper">
        <h1 class="header">Contacts App</h1>
        <div class="formContact">
            <h1 class="title">Add new Contact</h1>
            <div class="inputTitle">Name</div>
            <input class="inputForm" type="text" placeholder="Enter name" v-model="nameForm">
            <div class="inputTitle">Phone</div>
            <input class="inputForm" type="text" placeholder="Enter phone" v-model="numberForm">
            <div class="inputTitle">Email</div>
            <input class="inputForm" type="text" placeholder="Enter email" v-model="emailForm">
            <button class="saveButton" @click="saveContact">Save contact</button>
        </div>
        <div class="listContact">
            <h1 class="title">Contact lising</h1>

            <div class="editContact">
                <div class="contactItemWrapper" v-for="item in contactList" :key="item.id">
                    <contact-item
                    v-on:deleteButton="deleteButton"
                    :contacts="item"
                    ></contact-item>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
    import contactItem from '@/components/contactItem.vue';

export default {
    data() {
        return {
            NextContactsCount: 6,
            numberForm: '',
            emailForm: '',
            nameForm: '',
            count: 1
        }
    },
    components: {
    contactItem
    },
    props: [
        'contactList'
    ],
    methods: {
        saveContact () {
            if(this.numberForm !== '') {
                this.contactList.push({
                id: this.NextContactsCount, 
                name: this.nameForm, 
                number: this.numberForm, 
                email: this.emailForm})
                this.NextContactsCount++

                this.numberForm = ''
                this.emailForm = ''
                this.nameForm = ''
            }
            
        },
        deleteButton (id) {
            let index = this.contactList.findIndex(element => element === id)
            this.contactList.splice(index,1)
            this.NextContactsCount--
        }
        
    }   
}
</script>

<style scoped> 
* {
    margin: 0;
}
.wrapper {
    display: flex;
    flex-wrap: wrap;
    background:linear-gradient(90deg,rgba(255, 217, 0, 0.644),rgba(255, 20, 145, 0.63));
    height: 100vh;

}
.header {
    width: 100%;
    height: 60px;
    /* background-color: #2d2d2def; */
    line-height: 60px;
    margin-bottom: 30px;
    font-size: 40px;
}
.formContact {
    margin-left: 100px;
    margin-right: 10px;
    text-align: left;
    width: calc(50% - 110px);
}
.listContact {
    margin-left: 50px;
    margin-right: 30px;
    text-align: left;
    width: calc(50% - 80px);
}
.inputTitle {
    font-size: 23px;
    color: #2d2d2d;
    margin-top: 12px;
    margin-bottom: 2px;
}
.inputForm {
    width: 100%;
    height: 44px;
    font-size: 17px;
    border-radius: 10px;
    padding-left: 10px;
    border: 1px solid black;
}
.saveButton {
    margin-top: 35px;
    border: 1px solid black;
    border-radius: 30px;
    padding: 15px 30px;
    font-size: 17px;
    cursor: pointer;
    width: fit-content;
}

.listContact, .formContact {
    display: flex;
    flex-direction: column;
}
.editContact{
    padding-top: 30px;
    height: 54.4vh;
    overflow-y: scroll;
}
</style>