<template>
    <div class="search-engine" v-bind:class="{ active }">
       {{ name }}          
    </div>
</template>

<script lang="ts">
import Record from '../github.com/caml-js/Record';
import {
    Component,
    Vue,
    Prop,
} from 'vue-property-decorator';

@Component
export default class extends Vue {
    @Prop() readonly record!: Record
    @Prop() readonly active!: boolean
    get name() {
        const a = this.record.annotations.find((annotation) => {
            return annotation.key === 'name';
        });
        return a.value;
    }
}
</script>

<style lang="sass">
.active
    background: #C6E2FF	

.search-engine
    padding: 0 30px
    font-size: 16px
    line-height: 30px
    border-bottom: 1px solid #999

</style>

