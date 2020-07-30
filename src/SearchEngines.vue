<template>
    <div>
        <div :key="record.name" v-for="(record, i) in records">
            <SearchEngine :record="record" :active="i === index" />
        </div>
    </div>
</template>

<script lang="ts">
import Record from '../github.com/caml-js/Record';
import SearchEngine from './SearchEngine.vue';
import {
    Component,
    Vue,
    Prop,
} from 'vue-property-decorator';

@Component({
    components: {
        SearchEngine,
    }
})
export default class extends Vue {
    @Prop() readonly records!: Record[]
    @Prop() readonly index!: number
}
</script>
