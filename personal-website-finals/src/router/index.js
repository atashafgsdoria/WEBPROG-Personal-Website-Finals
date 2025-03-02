
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/index.vue';
import EducationView from '../views/education.vue';
import FavoriteView from '../views/favorite.vue';
import ContactView from '../views/contact.vue';
import ReferencesView from '../views/references.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/education', component: EducationView },
  { path: '/favorite', component: FavoriteView },
  { path: '/contact', component: ContactView },
  { path: '/references', component: ReferencesView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
