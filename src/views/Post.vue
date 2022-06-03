<template>
  <div class="main__posts posts">
    <div class="posts__item post">
      <div class="posts__wrapper">
        <div class="posts__author">{{getPost.name}}</div>
        <div class="posts__author">{{getPost.email}}</div>
      </div>
      <div class="posts__title">{{getPost.title}}</div>
      <div class="posts__descr">{{getPost.subtitle}}</div>
      <div class="post__text">{{getPost.text}}
      </div>
    </div>
  </div>
  <div class="comments">
    <div class="container">
      <div class="comments__wrapper">
        <div class="comments__title">Комментарии:</div>
        <div class="comments__item" v-for="elem in comments" :key="elem.name">
          <div class="comments__name">{{elem.name}}</div>
          <div class="comments__text">{{elem.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  created() {
    this.$store.dispatch('loadPosts');
    this.$store.dispatch('loadComments');
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters([
      'posts', 'comments',
    ]),
    getPost() {
      return this.posts[+(this.$route.params.id) - 1];
    },
  },
  methods: {
  },
};
</script>
