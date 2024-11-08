<template>
  <van-tabbar ref="tabbarRef" route>
    <template v-for="item in tabbar" :key="item.name">
      <van-tabbar-item v-if="item.meta?.tabbar" :to="item.path" :icon="item.meta?.icon">
        {{ item.meta?.title }}
      </van-tabbar-item>
    </template>
  </van-tabbar>
</template>

<script lang="ts" setup>
  import { tabbar } from '@/router/modules/tabbar';

  defineOptions({ name: 'BottomBar' });
</script>
