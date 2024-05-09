<template>
    <div id="chat-index" class="ww-all-center ww-common">
        <a-input-search v-model:value="value" placeholder="请输入聊天地址" enter-button="join" size="large" style="width: 360px"
            @search="onJoin" @input="filterInput" v-if="defaultState === '1'" maxlength="16" />
    </div>
</template>

<script>
import { filterNumber } from '@/utils/utils';
export default {
    name: 'ChatIndex',
    data() {
        return {
            defaultState: '1',
            value: ''
        }
    },
    methods: {
        // 加入聊天室
        onJoin() {
          this.$router.push("/chat/room").catch(() => {
          });
        },
        // 过滤input
        filterInput() {
            this.value = filterNumber(this.value)
        },
        change() {

        }
    },
}
</script>
<style scoped lang="less">
#chat-index {
    background: linear-gradient(to right, rgb(198, 255, 221), rgb(251, 215, 134), rgb(247, 121, 125));
}
</style>
