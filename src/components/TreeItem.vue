<template>
  <div class="tree-item-layout" @click="handleClick">
    <span
      class="icon"
      :style="{ background: `url(${imgLink}) no-repeat` }"
    ></span>
    <span ref="input" type="text" @keyup.enter="$emit('keyup', $event)">
      {{ name }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      className: null,
    }
  },
  computed: {
    imgLink() {
      return require(`../assets/svg/${this.type}.svg`)
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
      this.$store.commit('setPath', `${this.path}/${this.name}`)
    },
  },
}
</script>
<style scoped>
.tree-item-layout {
  position: relative;
  padding-left: 20px;
  text-align: left;

  cursor: pointer;
}

.icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 15px;
  height: 15px;
}
</style>
