import { createRouter, createWebHistory } from 'vue-router';
import Posts from './views/PostList.vue';
import Post from './views/PostDetail.vue';
import New from './views/PostCreate.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [

    { name: 'post', path: '/post/:id', component: Post },
    { name: 'posts', path: '/', component: Posts },
    { name: 'new', path: '/new', component: New },

  ],

});
