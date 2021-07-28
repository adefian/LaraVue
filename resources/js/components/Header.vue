<template>
    <nav>
        <!-- <router-link to="/home">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/user/AdeFian">User</router-link> -->
        
        <router-link :to="{name: 'Home'}">Home</router-link>
        <router-link v-bind:to="{name: 'About'}">About</router-link>
        <router-link :to="{name: 'User'}">User</router-link>

    </nav>
</template>