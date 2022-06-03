<template>
  <div class="header">
    <div class="container">
      <router-link :to="{ name: 'posts' }">
        <div class="header__title">Posts</div>
      </router-link>
    </div>
  </div>
  <div class="nav">
    <div class="container">
      <div class="nav__wrapper">
        <router-link :to="{ name: 'posts' }">
          <div class="nav__item">Все посты</div>
        </router-link>
        <router-link :to="{ name: 'new' }">
          <div class="nav__item">Новый пост</div>
        </router-link>
      </div>
    </div>
  </div>
  <div class="main">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
  <div class="footer"></div>
</template>

<style lang="scss">
@import "./css/styles.scss";
</style>
