<template>
  <top-bar ref="topBarRef" />
  <div class="container">
    <router-view #="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
  <bottom-bar v-if="route.meta?.tabbar" ref="bottomBarRef" />
</template>

<script lang="ts" setup>
  import { ref, nextTick } from 'vue';
  import Sticky from 'vant/lib/sticky/Sticky';
  import Tabbar from 'vant/lib/tabbar/Tabbar';
  import { useRoute } from 'vue-router';
  import topBar from '@/layout/topBar.vue';
  import bottomBar from '@/layout/bottomBar.vue';

  const route = useRoute();

  defineOptions({ name: 'Layout' });
  const topBarRef = ref<InstanceType<typeof Sticky>>();
  const bottomBarRef = ref<InstanceType<typeof Tabbar>>();
  const containerHeight = ref('');

  nextTick(() => {
    containerHeight.value = `${
      topBarRef.value?.$el?.offsetHeight + bottomBarRef.value?.$el.offsetHeight
    }px`;
  });
</script>

<style lang="scss" scoped>
  .container {
    --height: v-bind('containerHeight');
    --container-height: calc(100vh - var(--height));

    height: calc(100vh - var(--height));
    overflow: auto;
  }
</style>
