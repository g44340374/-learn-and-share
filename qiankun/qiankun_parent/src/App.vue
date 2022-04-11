<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/javascript">javascript</router-link> |
      <router-link to="/vue_child">vue_child</router-link>
    </nav>
    <router-view/>
    <div id="javascript"></div>
    <div id="vue_child"></div>
  </div>
</template>

<style>
</style>
