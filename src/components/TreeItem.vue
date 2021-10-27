<template>
  <div class="tree-item-layout" @click="handleClick">
    <icon v-if="icon" :icon="icon" />
    <div class="tree-item-layout__title">
      <input
        ref="input"
        class="tree-item-layout__input"
        type="text"
        :value="name"
        @keyup.enter="$emit('keyup', $event)"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <div class="tree-item-layout__overlay"></div>
    </div>
  </div>
</template>
<script>
import Icon from '@/components/Icon'

export default {
  components: {
    Icon,
  },
  props: {
    icon: {
      type: String,
      default: null,
      validator: (value) =>
        !value ||
        ['directory', 'directory-open', 'file', 'link'].includes(value),
    },
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    canSelected: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClick(e) {
      if (!this.canSelected) {
        this.$emit('click', e)
      }
      this.select(this.$refs.input)
    },
    select: (element) => {
      element.focus()
      element.select()
    },
    handleFocus() {
      this.$store.commit('setPath', `${this.path}/${this.name}`)
    },
    handleBlur() {
      this.$store.commit('setPath', ``)
    },
  },
}
</script>
<style scoped>
.tree-item-layout {
  display: flex;
  gap: 10px;
}
.tree-item-layout {
  position: relative;
}
.tree-item-layout__input {
  border: none;
  outline: none;
}
.tree-item-layout__overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
</style>
