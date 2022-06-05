<template>
  <div class="main__form">
    <form action="#" class="add" @submit.prevent="addPost">
      <div class="add__section">Добавление поста</div>
      <div class="add__item">
        <label for="name">Ваше имя</label>
        <input required name="name" id="name" type="text" v-model="newPost.name">
      </div>
      <div class="add__item">
        <label for="email">Ваша почта</label>
        <input required name="email" id="email" type="email" v-model="newPost.email">
      </div>
      <div class="add__item">
        <label for="title">Заголовок</label>
        <input required name="title" id="title" type="text" v-model="newPost.title">
      </div>
      <div class="add__item">
        <label for="subtitle">Описание</label>
        <input required name="subtitle" id="subtitle" type="text" v-model="newPost.subtitle">
      </div>
      <div class="add__item">
        <label for="text">Текст</label>
        <textarea required name="text" id="text" v-model="newPost.text"></textarea>
      </div>
      <div class="add__wrapper">
        <button type="submit" class="add__btn">Отправить</button>
        <div v-if="!formValid" class="add__warning">Минимальная длина каждого поля - 3 символа</div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { sendPost } from '../api';

export default {
  data() {
    return {
      newPost: {},
      formValid: true,
    };
  },
  computed: {
    ...mapGetters([
      'posts',
    ]),
  },
  methods: {
    async addPost() {
      this.newPost.id = this.posts.length + 1;
      if (this.newPost.name.trim().length > 1 && this.newPost.title.trim().length >= 3 && this.newPost.text.trim().length >= 3) {
        const response = await sendPost(this.newPost);
        if (response.ok) this.$router.push({ name: 'posts' });
        this.newPost = {};
      } else {
        this.formValid = false;
      }
    },
  },
};
</script>
