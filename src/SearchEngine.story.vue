<template>
    <SearchEngine 
        :record="record"
        :active="active"
    ></SearchEngine>
</template>

<script lang="ts">
import Record from '../github.com/caml-js/Record';
import SearchEngine from './SearchEngine.vue';
import {
    Component,
    Vue,
} from 'vue-property-decorator';

@Component({
    components: { SearchEngine },
})
export default class extends Vue {
    record: Record = new Record()
    active = true
    created() {
        this.record.annotations.push({
            key: 'name',
            value: 'twitch',
        });
    }
};
</script>

