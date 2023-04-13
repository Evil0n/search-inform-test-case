<template>
    <div class="scrollWrapper" >
        <RecycleScroller
            style="height: 100vh; width: 100%; flex-grow: 0;"
            :items="data"
            :item-size="32"
            key-field="id"
            v-slot="{ item }"
        >
            <div class="user" @click="emit('click', item as Employer)" :class="{ user_active: active && active.id === item.id }">
                {{ (item as Employer).val  }} <!-- свой скрол писать не хотелось, но у этого нет типизации -->
            </div>
        </RecycleScroller>
    </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits} from 'vue'

import {Employer} from "@/types/types";

defineProps<{data: Employer[], active?: Employer}>()

// eslint-disable-next-line no-unused-vars
const emit = defineEmits<(e:'click', v: Employer) => void>()
</script>

<style scoped lang="scss">
.scrollWrapper {
    display: flex;
    height: 100%;
    min-width: 200px;
}

.user {
    height: 32px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    &_active {
        background: #c7edfc;
    }
}
</style>