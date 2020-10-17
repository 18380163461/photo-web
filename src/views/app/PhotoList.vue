<template>
  <div>
    <h1>AAAAAAAAAAAAA</h1>

    <van-image v-for="item in fileList" :key="item.absolutePath" class="mydiv"
               :width="imageWith"
               :height="imageWith"
               fit="contain"
               src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <van-image-preview v-model="show" :images="images" @change="onChange">
      <template v-slot:index>第{{ index }}页</template>
    </van-image-preview>
  </div>
</template>

<script>
  export default {
    name: "PhotoList",
    data() {
      return {
        clientWidth: '',
        imageWith: '',
        path: 'D:\\1资料\\壁纸\\ui_loading',
        fileList: [],
        show: false,
        index: 0,
        images: [
          'https://img.yzcdn.cn/vant/apple-1.jpg',
          'https://img.yzcdn.cn/vant/apple-2.jpg',
        ],
      }
    },
    computed: {},
    mounted() {
      debugger
      this.clientWidth = document.documentElement.clientWidth - 40;
      this.imageWith = this.clientWidth / 4;
      this.folders();
      this.files();
    },
    methods: {
      folders() {
        this.$fetch(this.$api.url.folders, {
          collectId: this.collectId
        }).then(res => {
          console.log(res);
        })
      },
      files() {
        let that = this;
        this.$fetch(this.$api.url.files, {
          path: that.path
        }).then(res => {
          console.log(res);
          if (res.success) {
            that.fileList = res.result;
          }
        })
      },
      onChange(index) {
        this.index = index;
      },

    }
  }
</script>
<style>
  .mydiv {
    justify-content: flex-start | flex-end | center | space-between | space-around;
    margin: 0.3rem;
  }

</style>

