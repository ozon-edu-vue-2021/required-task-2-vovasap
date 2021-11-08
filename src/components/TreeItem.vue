<template>
  <div
    class="tree-item-layout"
    tabindex="0"
    @click="handleClick"
    @keyup.enter="$emit('keyup', $event)"
    @keyup.tab="focus"
  >
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
    setPath() {
      this.$store.commit('setPath', `${this.path}/${this.name}`)
    },
    handleClick(e) {
      this.$emit('click', e)
      this.setPath()
    },
    focus() {
      this.setPath()
    },
  },
}
</script>
<style scoped>
.tree-item-layout {
  position: relative;
  margin: 3px;
  padding-left: 25px;
  text-align: left;

  cursor: pointer;
}
.tree-item-layout:focus {
  background: #8f8;
  border-radius: 3px;

  outline: none;
}

.icon {
  position: absolute;
  top: 2px;
  left: 3px;
  width: 20px;
  height: 15px;
}
</style>
