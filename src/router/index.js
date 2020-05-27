import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Gallery from '../views/Gallery.vue';
import Blog from '../views/Blog.vue';
import Notes from '../views/Notes.vue';
import Note from '../views/Note.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/notes',
    name: 'Notes',
    component: Notes
  },
  {
    path: '/notes/:id/',
    name: 'Note',
    component: Note
  },
  {
    path: '/notes/:id/:id1',
    name: 'Note',
    component: Note
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
