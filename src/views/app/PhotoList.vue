<template>
  <div>
    <van-nav-bar
      :title="path" left-text="选择" @click-left="onClickLeft" fixed="true"
    />

    <van-grid square>
      <van-grid-item v-for="(item,index) in fileList" :key="item.absolutePath">
        <van-image
          :width="imageWith"
          :height="imageWith"
          fit="cover"
          :src="encodeURI(baseURL+'photo/downloadThumbnail?path='+item.absolutePath)"
          @click="clickImage(index)"
        />
      </van-grid-item>
    </van-grid>

    <van-image-preview v-model="show" :images="images" :startPosition="startPosition" @change="onChange" closeable="true" className="AAA">
    </van-image-preview>

  </div>
</template>
import config from '../../api/config';

<script>
  import config from "../../api/config";

  export default {
    name: "PhotoList",
    data() {
      return {
        clientWidth: '',
        imageWith: '',
        path: 'D:\\1资料\\111111',
        fileList: [],
        show: false,
        imageIndex: 0,
        images: [],
        startPosition: 0,
        closeable: true,
        baseURL: '',
      }
    },
    computed: {},
    mounted() {
      this.baseURL = config.baseURL;
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
            that.images = [];
            that.fileList.forEach(function (element) {
              that.images.push(encodeURI(that.baseURL + 'photo/download?path=' + element.absolutePath))
            });
          }
        })
      },
      onChange(index) {
        this.index = index;
      },
      clickImage(index) {
        this.startPosition = index;
        this.show = true;
      },
      onClickLeft() {
      },

    }
  }
</script>

