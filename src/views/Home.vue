<template>
  <div>I am Home Page</div>
  <n-button @click="handleInputValue">按钮</n-button>
  <input type="text" v-model="inputValue" />
</template>

<script setup lang="ts">
import { mainStore } from '@/store/main'
import { onMounted, ref } from 'vue'
import { Test } from '@/api'
import { getDataType } from '@/utils/helper'
import { useRouter } from 'vue-router'
const store = mainStore()
const inputValue = ref<string>('')
const router = useRouter()
const handleInputValue = async () => {
  // let result = await Test.getTestDataApi()
  // console.log(result)
  router.push('/login')
}

getDataType('1')
</script>

<style scoped></style>
