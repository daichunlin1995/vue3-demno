<template>
  <div class="login-container">
    <n-form ref="formRef" :model="model" :rules="rules">
      <n-form-item path="user" label="用户名">
        <n-input v-model:value="model.user" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="password" label="密码">
        <n-input v-model:value="model.password" type="password" @keydown.enter.prevent />
      </n-form-item>
      <div class="login-forgrt_password">
        <n-button text>忘记密码？</n-button>
      </div>
      <n-form-item class="login-btn_tools">
        <n-button @click="handleLoginIn" :loading="loading">登录</n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { FormInst, useMessage, FormRules } from 'naive-ui'
import { User } from '@/api'
import { userStore } from '@/store/user'
import { useRouter, useRoute } from 'vue-router'
import { setPwdEncrypt, setCookie } from '@/utils/helper'
import { IResponse } from '/#/axios'
interface ModelType {
  user: string
  password: string
}

const router = useRouter()
const route = useRoute()
const store = userStore()

const formRef = ref<FormInst | null>(null)
const message = useMessage()
const model = ref<ModelType>({
  user: '',
  password: ''
})

const rules: FormRules = {
  user: [
    {
      required: true,
      message: '请输入用户名'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码'
    }
  ]
}
// 初始化loading
let loading = ref<boolean>(false)
// 点击登录
const handleLoginIn = (e: MouseEvent) => {
  // 清除默认事件
  let event = e || window.event
  event.preventDefault()
  // validate 是 undefined时候 验证通过
  formRef.value?.validate(async (validate) => {
    if (!validate) {
      loading.value = true
      // 获取公钥
      let result = await User.getPublicKeyApi()
      const cryptPassword = setPwdEncrypt(result.data, model.value.password)
      // 登录操作
      let loginResponse = await User.loginInApi({ user: model.value.user, password: cryptPassword })
      loading.value = false
      // 处理登录结果
      if ((loginResponse as Partial<IResponse>).code === 0) {
        // 存储token
        store.setToken(loginResponse.data.token)
        // 跳转
        router.push({
          path: (route.query.redirect as string) || '/'
        })
      }
    }
  })
}
</script>
<style scoped lang="less">
@import '@/assets/less/variable.less';
.login-container {
  width: 400px;
  position: absolute;
  left: 0;
  top: 0;
  padding: 20px;
  box-shadow: 0px 0px 5px @color;
  border-radius: 3px;
}
.login-btn_tools {
  display: flex;
  justify-content: center;
  button {
    width: 150px;
  }
}
.login-forgrt_password {
  position: relative;
  > button {
    font-size: 12px;
    position: absolute;
    right: 0;
    top: -18px;
    color: @color;
  }
}
</style>
