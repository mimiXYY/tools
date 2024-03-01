<template>
  <div class="box">
    <div class="deck">
      <svg class="svg" xmlns="http://www.w3.org/2000/svg">
        <!-- <path d="M14.7%,0 L14.7%,7.6% L40%,7.6% L40%,0 " fill="#000" /> -->
        <g>
          <rect x="30.75%" y="-9.3%" width="9.8%" height="24.5%" />
          <rect x="59.25%" y="-9.3%" width="9.8%" height="24.5%" />
        </g>
        <g>
          <rect x="2.25%" y="20.7%" width="9.8%" height="24.6%" />
          <rect x="16.5%" y="20.7%" width="9.8%" height="24.5%" />
          <rect x="30.75%" y="20.7%" width="9.8%" height="24.5%" />
          <rect x="45%" y="20.7%" width="9.8%" height="24.5%" />
          <rect x="59.25%" y="20.7%" width="9.8%" height="24.5%" />
          <rect x="73.5%" y="20.7%" width="9.8%" height="24.5%" />
          <rect x="87.75%" y="20.7%" width="9.8%" height="24.5%" />
        </g>
        <g>
          <rect x="2.25%" y="50.2%" width="9.8%" height="24.5%" />
          <rect x="16.5%" y="50.2%" width="9.8%" height="24.5%" />
          <rect x="30.75%" y="50.2%" width="9.8%" height="24.5%" />
          <rect x="45%" y="50.2%" width="9.8%" height="24.5%" />
          <rect x="59.25%" y="50.2%" width="9.8%" height="24.5%" />
          <rect x="73.5%" y="50.2%" width="9.8%" height="24.5%" />
          <rect x="87.75%" y="50.2%" width="9.8%" height="24.5%" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "deckView",
};
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
}
.deck {
  border: 1px solid black;
  height: calc(100vh - 120px);
  aspect-ratio: 60 / 35;
}
svg {
  width: 100%;
  height: 100%;
}

svg rect {
  fill: rgba(255, 255, 255, 0);
  stroke: #615e5e;
  stroke-width: 0.3px;
}
</style>