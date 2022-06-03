import { createStore } from 'vuex';
import { loadPosts, loadComments } from './api/server';

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
      let posts = await loadPosts();
      posts = await Object.keys(posts).map((key) => ({
        ...posts[key],
      }));
      store.commit('setPosts', posts);
    },
    async loadComments(store) {
      const comments = await loadComments();
      store.commit('setComments', comments);
    },
  },

});
