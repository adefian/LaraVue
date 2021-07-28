<template>
    <!-- <h1>Hello {{$route.params.name}} </h1> -->
    <div>
        <section v-if="name">
            <h1>Hello {{name}} </h1>
            <router-link :to="{name: 'User'}">Kembali</router-link>
        </section>

        <section v-else>
            <h1>Daftar User</h1>
            <ul>
                <li v-for="user in users">
                    <!-- <router-link :to="profile_uri(user.name)">{{user.name}}</router-link> -->
                    <a href="" @click.prevent="lihatUser(user.name)">{{user.name}}</a>
                </li>
            </ul>
        </section>
    </div>
    
</template>

<script>
export default {
    props: ['name'],
    data() {
        return {
            users: [
                {id:1, name:'Ade Fian'},
                {id:2, name:'Ade Fani'},
                {id:3, name:'Rasya Ramadani'},
            ]
        }
    },
    methods: {
        profile_uri(name){
            return '/user/' + name.toLowerCase()
        },
        lihatUser(name){
            // this.$router.push('/user/' + name.toLowerCase())
            this.$router.push({
                name: 'User',
                params: {name: name.toLowerCase()}
            })
        }
    }
}
</script>