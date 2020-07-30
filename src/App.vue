<template>
  <div id="app">
    <input
        v-model="text"
        autofocus
    />
    <SearchEngines
        :records="store.records"
        :index="index"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from '../github.com/caml-js/store';
import SearchEngines from './SearchEngines.vue';
@Component({
  components: {
    SearchEngines,
  },
})
export default class App extends Vue {
    store = store;
    index = 0
    text = ''
    created() {
        window.addEventListener('keydown', (event) => {
            if(event.keyCode === 38) {
                this.index = Math.max(this.index - 1, 0);
                event.preventDefault();
            }
            if(event.keyCode === 40) {
                this.index = Math.min(
                    this.index + 1, 
                    store.records.length - 1
                );
                event.preventDefault();
            }
            if(event.keyCode === 13) {
                const annotation = this.store.records[this.index].annotations.find((annotation: any) => {
                    return annotation.key === 'query';
                });
                window.open(annotation.value.replace('%s', this.text), '_blank');
                this.text = '';
            }
        });
    }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap')

body
    margin: 0
    font-family: 'roboto'

input
    border: 0
    font-size: 20px
    line-height: 60px
    padding: 0 30px
    border-bottom: 1px solid #999
    width: 100%
    font-family: inherit
    box-sizing: border-box

input:focus
    outline: 0

</style>
