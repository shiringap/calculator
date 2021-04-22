<template>
  <div class="button_wrapper" :class="additionalClass">
    <button class="button" @click="action(number)">
      <span>{{value}}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    action: {
      type: Function,
    },
    additionalClass: {
      type: String,
      default: '',
    },

    value: {
      type: String,
    },
    number: {
      type: String,
      default: '',
    }
  },
}
</script>

<style lang="sass">
.button
  display: block
  border: none
  outline: none
  padding: 5px 3px 4px
  width: 100%
  height: 100%
  border-radius: 1px
  font-size: 9px
  font-weight: bold
  font-family: 'Montserrat', sans-serif
  color: #fff
  background: linear-gradient(0deg, #4EA4DC -416%, #2BAFDE 401%)
  transition: .3s

  &_wrapper
    padding: 1px
    background: linear-gradient(180deg, #18476B -5.2%, #2771AA 45.84%, #081925 119.3%)
    border-radius: 2px

    &--plus
      grid-row: 5/7
      grid-column: 4
.button
  padding: 1.3px 2px 2px

.button:hover
  background: #1873b3

</style>
