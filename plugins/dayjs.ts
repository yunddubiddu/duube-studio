import dayjs from 'dayjs';

export default defineNuxtPlugin(nuxtApp => {
    dayjs.locale('ko');
    
    nuxtApp.vueApp.directive('timeFormat', {
        mounted(el, binding) {
          const result = dayjs(binding.value).format('YYYY-MM-DD');
          el.innerText = result;
        },
      })
})