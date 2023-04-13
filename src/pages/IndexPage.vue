<template>
  <div style="display: flex">
      <ScrollList :data="data.list" :active="data.active"  @click="setActive" />
      <PersonCard :active="data.active" />
  </div>
</template>

<script setup lang="ts">
import ScrollList from "@/components/ScrollList.vue";
import PersonCard from "@/components/PersonCard.vue";
import {reactive} from "vue";
import {Company, Employer, Postition, WorkingSpeciality} from "@/types/types";
import {getRandomInt} from "@/utils/getRandomInt";
const availablePositions: Postition[] = ['manager', 'QA', 'developer', 'analytics', undefined]
const avaliableCompany: Company[] = ['sber', 'vtb', 'tink', 'raif', undefined]
const availableSpecialisations: WorkingSpeciality[] = ['credit', 'debit', 'guarantee', 'vallet', undefined]


const data: {
    active?: Employer;
    list: Employer[];
} = reactive({
    active: undefined,
    list: Array.from({ length: getRandomInt(1000000) }, (v, i) => ({
        id: i+1,
        val: `user ${i + 1}`,
        pos: availablePositions[getRandomInt(5)],
        comp: avaliableCompany[getRandomInt(5)],
        section: availableSpecialisations[getRandomInt(5)],
        activity: [true, false][getRandomInt(2)],
        avatar: ['doctor-svgrepo-com.svg',
            'musician-svgrepo-com.svg',
            'mechanic-svgrepo-com.svg',
            'hindu-svgrepo-com.svg',
            'avatar-svgrepo-com.svg'][getRandomInt(5)]
    }))
})

    const setActive = (item: Employer) =>  {
        data.active = item
    }
</script>