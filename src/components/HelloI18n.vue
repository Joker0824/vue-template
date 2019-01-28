<template>
  <div class="helloI18" style="font-size:30px;">
    <p>{{ $t('hello') }}</p>
    <icon name="iphone" :scale="100"></icon>
    <icon name="system" :scale="100"></icon>
    <icon name="controller" :scale="100"></icon>
    <icon name="exit" :scale="100"></icon>
  </div>
</template>

<script>
export default {
  name: "HelloI18n",
  created() {
    this.$i18n.locale = "zh_CN";
  },
  methods: {
    changeLocale() {
      this.$i18n.locale = "zh_CN";
    }
  }
};
</script>

<i18n>
{
  "en": {
    "hello": "Hello i18n in SFC!"
  },
  "zh_CN":{
    "hello":"萨瓦迪卡"
  }
}
</i18n>
