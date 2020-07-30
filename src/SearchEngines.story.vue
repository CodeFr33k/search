<template>
    <SearchEngines :records="records"></SearchEngines>
</template>

<script lang="ts">
import Record from '../github.com/caml-js/Record';
import SearchEngines from './SearchEngines.vue';
import {
    Component,
    Vue,
} from 'vue-property-decorator';

@Component({
    components: { SearchEngines },
})
export default class extends Vue {
    records: Record[] = []
    created() {
        const record = new Record();
        record.annotations.push({
            key: 'name',
            value: 'twitch',
        });
        this.records.push(record);
        this.records.push(record);
    }
};
</script>

