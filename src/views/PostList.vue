<template>
  <div class="main__filters">
    <input type="text" class="main__input" v-model="author" placeholder="Автор:">
    <select class="main__select" v-model="sort">
      <option disabled selected value="0">Сортировка:</option>
      <option value="1">По заголовку</option>
    </select>
  </div>
  <div class="main__posts posts">
    <div class="posts__item" v-for="post in filteredList" :key='post.id'>
      <div class="posts__author">{{ post.name }}</div>
      <router-link class="posts__link" :to="`/post/${post.id}`">
        <div class="posts__title">{{ post.title }}</div>
      </router-link>
      <div class="posts__descr">{{ post.subtitle }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  created() {
    this.loadPosts();
  },
  data() {
    return {
      author: '',
      sort: 0,
    };
  },
  computed: {
    ...mapGetters([
      'posts',
    ]),
    filteredList() {
      const { author, sort } = this;
      return this.posts.filter((elem) => {
        if (author === '') return true;
        return elem.name.toLowerCase().includes(author.toLowerCase());
      }).sort((item1, item2) => {
        if (sort === 0) return true;
        return (item1.title.toLowerCase() > item2.title.toLowerCase()) ? 1 : -1;
      });
    },
  },
  methods: {
    ...mapActions(['loadPosts']),
  },
};
</script>
