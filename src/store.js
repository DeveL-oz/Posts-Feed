import { createStore } from 'vuex';
import { loadData } from './api';

export default createStore({
  state: {
    posts: [],
    comments: [],
  },
  getters: {
    posts: (state) => state.posts,
    comments: (state) => state.comments,

  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setComments(state, comments) {
      state.comments = comments;
    },
  },
  actions: {
    async loadPosts(store) {
      let posts = await loadData('posts');
      posts = await Object.keys(posts).map((key) => ({
        ...posts[key],
      }));
      store.commit('setPosts', posts);
    },
    async loadComments(store) {
      const comments = await loadData('comments');
      store.commit('setComments', comments);
    },
  },
});
