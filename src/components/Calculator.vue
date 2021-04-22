<template>
  <main>
    <div class="calculator">
      <div class="calculator_body">
        <div class="calculator_screen_wrapper">
          <div class="calculator_screen" v-if="isEnabled">
            <p class="calculator_screen_memory" v-if="memory">M</p>
            <p class="calculator_screen_display">{{ display }}</p>
          </div>
          <div class="calculator_screen" v-else>
          </div>
        </div>
        <div class="buttons_container">
          <Button v-for="button in buttons"
                  v-bind:key="button.id"
                  :action="button.action"
                  :additional-class="button.additionalClass"
                  :value="button.value"
                  :number="button.number"
          />
        </div>
      </div>
    </div>
  </main>
</template>


<script>
import Button from "@/components/Buttons";

const utils = require('@/btn_properties');

export default {
  name: "Calculator",
  components: {Button},
  data: function () {
    return {
      buttons: utils.getButtonsOptions.bind(this)(),
      isEnabled: false,
      previous: null,
      display: '0',
      operator: null,
      operatorClicked: false,
      memory: 0,
    };
  },
  methods: {
    onOff: function () {
      this.isEnabled = !this.isEnabled;
      this.clear();
    },
    clear() {
      this.display = '0';
      this.memory = 0;
    },
    mrc() {
      if (this.isEnabled) {
        this.display = this.memory;
        this.memory = 0;
      }
    },
    m_plus() {
      if (this.isEnabled) {
        this.memory += Number(this.display);
      }
    },
    m_minus() {
      if (this.isEnabled) {
        this.memory -= Number(this.display);
      }
    },
    sign() {
      if (this.isEnabled) {
        this.display = utils.roundUp(
            this.display < 0
                ? (this.display = this.display - this.display * 2)
                : (this.display = this.display - this.display * 2)
        );
      }
    },
    percent() {
      if (this.isEnabled) {
        this.display = utils.roundUp(this.display / 100);
      }
    },
    sqrt() {
      if (this.isEnabled) {
        if (this.display > 0) this.display = utils.roundUp(Math.sqrt(this.display));
      }
    },
    append(number) {
      if (this.isEnabled) {

        if (this.operatorClicked === true) {
          this.display = '';
          this.operatorClicked = false;
        }
        this.display = this.display === '0'
            ? (this.display = number)
            : '' + this.display + number;
      }
    },
    decimal() {
      if (this.isEnabled) {
        if (!this.operatorClicked) {
          if (this.display.indexOf('.') === -1) {
            this.display = `${this.display}.`
          }
        }
      }
    },
    divide() {
      if (this.isEnabled) {
        this.operator = (a, b) => utils.roundUp(a / b);
        this.previous = this.display;
        this.operatorClicked = true;
      }
    },
    multiply() {
      if (this.isEnabled) {
        this.operator = (a, b) => utils.roundUp(a * b);
        this.previous = this.display;
        this.operatorClicked = true;
      }
    },
    subtract() {
      if (this.isEnabled) {
        this.operator = (a, b) => utils.roundUp(a - b);
        this.previous = this.display;
        this.operatorClicked = true;
      }
    },
    add() {
      if (this.isEnabled) {
        this.operator = (a, b) => utils.roundUp(a + b);
        this.previous = this.display;
        this.operatorClicked = true;
      }
    },
    equal() {
      if (this.isEnabled) {
        this.display = utils.roundUp(this.operator(Number(this.previous), Number(this.display)));
        this.previous = null;
        this.operatorClicked = true;
      }
    }
  }
}
</script>


<style>
</style>
