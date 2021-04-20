<template>
  <div class="calculator-items">
      <div class="calculator-row-1">
        <div class="calculator-item" @click="onOff()">OFF</div>
        <div class="calculator-item" @click="sign()">+/-</div>
        <div class="calculator-item" @click="radic()">&radic;</div>
        <div class="calculator-item" @click="operate('%')">%</div>
<!--        <div class="calculator-item" @click="square()">√</div>-->
      </div>

      <div class="calculator-row-2">
        <div class="calculator-item" @click="memClear()">MRC</div>
        <div class="calculator-item" @click="memMinus()">M-</div>
        <div class="calculator-item" @click="memPlus()">M+</div>
        <div class="calculator-item" @click="operate('-')">-</div>
      </div>

      <div class="calculator-row-3">
        <div class="calculator-item" @click="operate(7)">7</div>
        <div class="calculator-item" @click="operate(8)">8</div>
        <div class="calculator-item" @click="operate(9)">9</div>
        <div class="calculator-item" @click="operate('*')">x</div>
      </div>

      <div class="calculator-row-4">
        <div class="calculator-item" @click="operate(4)">4</div>
        <div class="calculator-item" @click="operate(5)">5</div>
        <div class="calculator-item" @click="operate(6)">6</div>
        <div class="calculator-item" @click="operate('/')">/</div>
      </div>

      <div class="calculator-row-5">
        <div class="calculator-item" @click="operate(1)">1</div>
        <div class="calculator-item" @click="operate(2)">2</div>
        <div class="calculator-item" @click="operate(3)">3</div>
        <div class="calculator-item" @click="operate('+')">+</div>
      </div>

      <div class="calculator-row-6">
        <div class="calculator-item" @click="operate(0)">0</div>
        <div class="calculator-item" @click="operate('.')">.</div>
        <div class="calculator-item" @click="equal()">=</div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">


</style>
