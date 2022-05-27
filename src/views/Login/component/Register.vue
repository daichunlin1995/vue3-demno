<template>
  <div class="register-container">
    <n-form ref="formRef" :model="model" :rules="rules">
      <n-form-item path="user" label="用户名">
        <n-input v-model:value="model.user" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="password" label="密码">
        <n-input v-model:value="model.password" type="password" @keydown.enter.prevent />
      </n-form-item>
      <n-form-item path="passwordAgain" label="再次密码">
        <n-input
          v-model:value="model.passwordAgain"
          :disabled="!model.password"
          type="password"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item class="login-btn_tools">
        <n-button @click="handleLoginIn" :loading="loading">注册</n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { FormInst, FormRules, FormItemRule } from 'naive-ui'
import { User } from '@/api'
import { IResponse } from '/#/axios'
import { useMessage } from 'naive-ui'
type ModelType = {
  user: string
  password: string
  passwordAgain: string
}
// 表单信息
const model = reactive<ModelType>({
  user: '',
  password: '',
  passwordAgain: ''
})

// 校验密码
const handleValidatePassword = (rule: FormItemRule, value: string) => {
  let reg = /^(?=.*[0-9\!@#\$%\^&\*])(?=.*[a-zA-Z]).{8,16}$/
  if (!value) {
    return true
  }
  if (reg.test(value)) {
    console.log(123)
    return true
  } else {
    console.log(111)
    return false
  }
}
// 自定义校验重复密码
const handleValidatePasswordAgain = (rule: FormItemRule, value: string) => {
  if (!value) {
    return true
  } else if (value !== model.password) {
    return false
  }
}

// 校验规则
const rules: FormRules = {
  user: [
    {
      required: true,
      message: '请输入用户名',
      trigger: ['input', 'blur']
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: ['input', 'blur']
    },
    {
      message: '密码长度8-16位，且需包含数字和字母',
      validator: handleValidatePassword,
      trigger: ['blur']
    }
  ],
  passwordAgain: [
    {
      required: true,
      message: '请再次输入密码',
      trigger: ['input', 'blur']
    },
    {
      message: '两次输入密码不一致',
      validator: handleValidatePasswordAgain,
      trigger: ['blur']
    }
  ]
}

// 获取form的dom元素
const formRef = ref<FormInst | null>(null)
// loading
let loading = ref<boolean>(false)
// 点击注册
const handleLoginIn = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate((validate) => {
    if (!validate) {
      // 做个loading
      loading.value = true
      // 发送请求保存该账号 此处没有做加密处理 其实和登录是一样的
      User.registerApi({ user: model.user, password: model.password }).then(
        (res: Partial<IResponse>) => {
          loading.value = false
          if (res.code === 0) {
            const message = useMessage()
            message.success('注册成功')
          }
        }
      )
    }
  })
}
</script>

<style lang="less" scoped>
@import '@/assets/less/variable.less';
.register-container {
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
</style>
