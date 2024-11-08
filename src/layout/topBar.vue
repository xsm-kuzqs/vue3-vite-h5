<template>
  <van-sticky ref="stickyRef">
    <van-nav-bar :title="route.meta?.title">
      <template #left>
        <!-- 默认内容 -->
        <van-icon name="arrow-left" size="18" @click="goBack()" />
      </template>
      <!-- <template v-else #right>
        <van-icon name="search" size="18" />
      </template> -->
    </van-nav-bar>
  </van-sticky>
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router';
  import router from '@/router';

  const route = useRoute();
  defineOptions({ name: 'TopBar' });
  function goBack() {
    router.back();
  }
</script>
