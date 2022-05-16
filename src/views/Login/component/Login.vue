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
import {
  FormInst,
  FormItemInst,
  FormItemRule,
  FormValidationError,
  useMessage,
  FormRules
} from 'naive-ui'
import { User } from '@/api'
import { userStore } from '@/store/user'
interface ModelType {
  user: string | null
  password: string | null
}

const formRef = ref<FormInst | null>(null)
const message = useMessage()
const model = ref<ModelType>({
  user: null,
  password: null
})
const rules: FormRules = {
  user: [
    {
      required: true,
      message: 'User is required'
    }
  ],
  password: [
    {
      required: true,
      message: 'Password is required'
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
  formRef.value?.validate((validate) => {
    console.log(validate)
    if (!validate) {
      // 走接口 类型声明需要处理
      User.loginIn().then((res: any) => {
        console.log(res)
        if (res.error === 0) {
          // 存储token
          const store = userStore()
          store.vToken = res.content.token
        }
      })
    }
  })
}
</script>
<style scoped lang="less">
@import '@/assets/less/variable.less';
.login-container {
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
