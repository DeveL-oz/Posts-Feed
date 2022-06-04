<template>
  <header class="header">
    <div class="container">
      <router-link :to="{ name: 'posts' }">
        <div class="header__title">Posts</div>
      </router-link>
    </div>
  </header>
  <nav class="nav">
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
  </nav>
  <main class="main">
    <div class="container">
      <router-view></router-view>
    </div>
  </main>
  <footer class="footer"></footer>
</template>
