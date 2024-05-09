<template>
  <div id="chat-room">
    <div class="chat-title">
      <span>
        192.168.1.199局域网聊天室
      </span>
      <span>
        这是聊天室介绍
      </span>
      <span>
        在线人数
      </span>
    </div>
    <div class="chat-box">
      聊天室内容
    </div>
    <div class="chat-bottom">
      1
    </div>
  </div>
</template>

<script>

export default {
  name: 'ChatRoom',
}
</script>

<style scoped lang="less">
#chat-room {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh; /* 设置容器高度为视口高度，这样.chat-bottom就会紧靠底部 */
  background: linear-gradient(to right, rgb(198, 255, 221), rgb(251, 215, 134), rgb(247, 121, 125));
}
.chat-title .chat-info .chat-bottom {
  width: 100%;
}
.chat-title {
  height: 70px;
  background: rgba(255, 255, 255, .7);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
.chat-box {
  flex-grow: 1;
}
.chat-bottom {

}
</style>
