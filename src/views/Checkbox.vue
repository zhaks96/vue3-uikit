<script setup>
  import { ref, } from 'vue'

  const checkboxActive = ref(true)
  const checkboxDisabled = ref(true)
  const checkboxDisabledChecked = ref(true)

  const listOfHeroes = ref([
    {name: 'Spider Man', id: 'h1'},
    {name: 'Batman', id: 'h2'},
    {name: 'Tor', id: 'h3'},
    {name: 'Loki', id: 'h4'},
  ])
  const selectedHeroes = ref(['h1', 'h3'])

  const switchProfessional = ref(false)
</script>

<template>
  <h1 class="heading-1">Checkbox</h1>
  <h2 class="heading-2">Checkbox Active</h2>
  <div class="line">
    <ui-checkbox
      label="Checkbox Active"
      id="checkboxActive"
      name="checkboxActive"
      value="I like it"
      v-model:checked="checkboxActive"/>
  </div>
  <h2 class="heading-2">Checkbox Disabled</h2>
  <div class="line">
    <ui-checkbox
      label="Checkbox Disabled"
      id="checkboxDisabled"
      name="checkboxDisabled"
      value="I like it"
      :disabled="checkboxDisabled"
      v-model:checked="checkboxDisabledChecked"/>
  </div>
  <h2 class="heading-2">Checkbox Group</h2>
  <div class="line line_block">
    <p>Selected Heroes: {{selectedHeroes}}</p>
    <ui-checkbox-group v-model:value="selectedHeroes" name="heroes" :options="listOfHeroes"/>
  </div>
  <h2 class="heading-2">Switch</h2>
  <div class="line line_block">
    <p>Switch: {{switchProfessional}}</p>
    <ui-checkbox
      label="I'm a professional"
      id="switch"
      name="switch"
      value="I'm a professional"
      type="switch"
      v-model:checked="switchProfessional"/>
  </div>
</template>

<style lang="scss" scoped>
.line_block{
  flex-direction: column;
}
</style>