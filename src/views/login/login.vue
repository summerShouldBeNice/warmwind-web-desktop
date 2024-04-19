<template>
  <div id="container" class="ww-all-center">
    <a-row class="card-body">
      <a-col class="login-cover">

      </a-col>
      <a-col class="login-body ww-col-center">
        <a-space :size="30" direction="vertical">
          <h2 class="project-title">暖风后台管理</h2>
          <a-form ref="form" :model="form" :rules="rules" layout="vertical">

            <a-form-item name="username">
              <a-input allow-clear size="large" v-model:value="form.username" placeholder="请输入登录账号">
                <template #prefix>
                  <user-outlined class="icon" />
                </template>
              </a-input>
            </a-form-item>
            <a-form-item name="password">
              <a-input-password size="large" v-model:value="form.password" placeholder="请输入登录密码">
                <template #prefix>
                  <lock-outlined class="icon" />
                </template>
              </a-input-password>
            </a-form-item>
            <a-form-item name="code">
              <div class="login-input-group">
                <a-input allow-clear size="large" v-model:value="form.code" placeholder="请输入验证码">
                  <template #prefix>
                    <safety-certificate-outlined class="icon" />
                  </template>
                </a-input>
                <a-button class="login-captcha" @click="changeCode">
                  <img v-if="captcha" :src="captcha" alt="" />
                </a-button>
              </div>
            </a-form-item>
            <a-form-item>
              <a-button block size="large" type="primary" :loading="loading" @click="doSubmit"
                style="border-radius: 6px;">
                {{ loading ? '登录中...' : '登录' }}
              </a-button>
            </a-form-item>
          </a-form>
        </a-space>

      </a-col>
    </a-row>
  </div>
</template>

<script>
import {
  UserOutlined,
  LockOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons-vue';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'login',
  components: {
    UserOutlined,
    LockOutlined,
    SafetyCertificateOutlined,
  },
  data() {
    return {
      loading: false,
      // 表单数据
      form: {
        username: '',
        password: '',
        code: '',
        codeKey: '',
      },
      // 验证码base64数据
      captcha: '',
      // 表单验证规则
      rules: {
        username: [
          { required: true, message: '请输入登录账号', type: 'string', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', type: 'string', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', type: 'string', trigger: 'blur' }
        ]
      },
    }
  },
  methods: {
    // 登录
    doSubmit() {
      this.goHome()
    },
    // 更改验证码
    changeCode() {

    },
    /* 跳转到首页 */
    goHome() {
      this.$router.push("/chat/index").catch(() => {
      });
    },
  },
  created() {
    // 回车登录
    const _this = this;
    document.onkeydown = function() {
      if (window.event.keyCode == 13) {
        _this.doSubmit();
      }
    };
  },
}
</script>
<style scoped lang="less">
#container {
  position: relative;
  box-sizing: border-box;
  background-image: url("~@/assets/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

.card-body {
  display: flex;
  padding: 0;
  height: 470px;
  width: 920px;
  border-radius: 8px;
  overflow: hidden;
}

.login-cover {
  flex: 1;
  padding: 36px;
  box-sizing: border-box;
  background-color: #1681fd;
  background-image: url("~@/assets/banner.png");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
}

.project-title {
  color: #1681fd;
  font-weight: 600;
  align-content: center;
  text-align: center;
}

.login-body {
  background: white;
  width: 370px;
  height: 482px;
  padding: 32px 38px;
  box-sizing: border-box;
}

/* 验证码 */
.login-input-group {
  display: flex;
  align-items: center;
}

.login-input-group :deep(.ant-input-affix-wrapper) {
  flex: 1;
}

.login-input-group .login-captcha {
  width: 102px;
  height: 40px;
  margin-left: 10px;
  padding: 0;
}

.login-input-group .login-captcha>img {
  width: 100%;
  height: 100%;
}
</style>
