<template>
    <div class="card">
        <div v-if="active" style="flex-grow: 1;">
            <h2 class="card__header">{{active.val}}</h2>
            <div class="card__info">
                <div class="card__imageContainer">
                    <img :src="`/${active.avatar}`" :alt="active.val" class="card__avatar">
                    <div class="card__activityIndicator" :class="{ card__activityIndicator_active: active.activity }"></div>
                </div>
                <div class="card__infoContainer">
                    <div class="card__infoItem">
                        <div class="card__personPosition">Должность:</div>
                        <div class="card__personInfo">{{active.pos ?? 'Не указано'}}</div>
                    </div>
                    <div class="card__infoItem">
                        <div class="card__personPosition">Отдел: </div>
                        <div class="card__personInfo">{{active.section ?? 'Не указано'}}</div>
                    </div>
                    <div class="card__infoItem">
                        <div class="card__personPosition">Компания: </div>
                        <div class="card__personInfo">{{active.comp ?? 'Не указано'}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'
import {Employer} from "@/types/types";

defineProps<{active?: Employer}>()
</script>

<style scoped lang="scss">
.card {
    width: 100%;
    display: flex;
    &__header {
        background: #c7edfc;
        margin: 0;
        padding: 0 40px;
    }
    &__info {
        display: flex;
        padding: 30px 40px;
    }
    &__imageContainer {
        position: relative;
    }
    &__avatar {
        width: 150px;
        border-radius: 50%;
        border: 4px solid #d9d9d9;
    }
    &__activityIndicator {
        position: absolute;
        bottom: 20px;
        left: 15px;
        border-radius: 50%;
        background: red;
        width: 20px;
        height: 20px;
        &_active {
            background: green;
        }
    }
    &__infoContainer {
        width: 100%;
        padding-left: 20px;
        display: flex;
        flex-wrap: wrap;
        align-content: center;

    }
    &__infoItem {
        width: 100%;
        display: flex;
    }
    &__personPosition {
        width: 150px;
        padding: 5px;
    }
    &__personInfo {
        width: 100%;
        border: 1px solid #d9d9d9;
        padding: 5px;
    }

}
</style>