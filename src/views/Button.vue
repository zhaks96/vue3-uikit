<script setup>
  const eventForButton = () => {
    console.log("You clicked danger button")
  }
</script>

<template>
  <ui-button rounded></ui-button>
  <h1 class="heading-1">Button</h1>
  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <ui-button label="Primary" color="primary" disabled/>
    <ui-button label="Secondary" color="second" disabled/>
  </div>
  <h2 class="heading-2">Colors</h2>
  <div class="line">
    <ui-button label="Primary" color="primary" />
    <ui-button label="Secondary" color="second" />
    <ui-button label="Success" color="success" />
    <ui-button label="Info" color="info" />
    <ui-button label="Warning" color="warning" />
    <ui-button label="Danger" color="danger" />
  </div>
  <h2 class="heading-2">Rounded</h2>
  <div class="line">
    <ui-button label="Primary" color="primary" rounded/>
    <ui-button label="Secondary" color="second" rounded/>
    <ui-button label="Success" color="success" rounded/>
    <ui-button label="Info" color="info" rounded/>
    <ui-button label="Warning" color="warning" rounded/>
    <ui-button label="Danger" color="danger" rounded/>
  </div>
  <h2 class="heading-2">Outlined</h2>
  <div class="line">
    <ui-button label="Primary" color="primary" outlined/>
    <ui-button label="Secondary" color="second" outlined/>
    <ui-button label="Success" color="success" outlined/>
    <ui-button label="Info" color="info" outlined/>
    <ui-button label="Warning" color="warning" outlined/>
    <ui-button label="Danger" color="danger" outlined/>
  </div>
  <h2 class="heading-2">Icon</h2>
  <div class="line">
    <ui-button color="primary" icon="heart" outlined/>
    <ui-button color="second" icon="hand"/>
    <ui-button color="success" icon="address-book" outlined/>
    <ui-button color="info" icon="credit-card"/>
    <ui-button color="warning" icon="lemon" outlined/>
    <ui-button color="danger" icon="hourglass"/>
  </div>
  <h2 class="heading-2">Size</h2>
  <div class="line">
    <ui-button label="Normal" color="primary" />
    <ui-button label="Large" color="primary" size="large"/>
  </div>
  <h2 class="heading-2">Event</h2>
  <div class="line">
    <ui-button label="@click" color="danger" @click="eventForButton"/>
  </div>
</template>