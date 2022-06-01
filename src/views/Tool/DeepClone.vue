<template>
  <div>
    <n-space>
      <n-input
        type="password"
        show-password-on="mousedown"
        placeholder="密码"
        :maxlength="8"
        v-model:value="obj1.name"
      />
      {{ obj1 }}
    </n-space>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
function deepClone(target: any, hash = new WeakMap()) {
  if (target === null) return target // 如果是null 就不进行操作
  if (target instanceof Date) return new Date(target) // 处理日期
  if (target instanceof RegExp) return RegExp(target) // 处理正则
  if (target instanceof HTMLElement) return target // 处理dom元素
  if (typeof target !== 'object') return target // 处理基本数据类型和函数

  // 引用数据类型
  if (hash.get(target)) {
    return hash.get(target)
  }
  const cloneTarget = new target.constructor() // 创建新的克隆对象
  hash.set(target, cloneTarget) // 将该对象存入hash
  Reflect.ownKeys(target).forEach((key) => {
    cloneTarget[key] = deepClone(target[key], hash)
  })
  return cloneTarget
}

interface Iobj {
  name: string
  age: number
  info: {
    address: string
  }
}

let obj = reactive<Iobj>({
  name: 'nihao',
  age: 19,
  info: {
    address: 'hlj'
  }
})

let obj1 = reactive<Iobj>(deepClone(obj))
</script>

<style scoped></style>
