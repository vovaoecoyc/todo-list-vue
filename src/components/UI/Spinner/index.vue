<template>
  <div class="spinner">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "Spinner"
};
</script>

<style>
@keyframes spinner {
  to {
    opacity: 0.1;
    transform: translate3d(0, 5px, 0);
  }
}

.spinner {
  display: flex;
  justify-content: center;
}

.spinner > div {
  width: 15px;
  height: 15px;
  margin: 20px 3px;
  background: #8385aa;
  border-radius: 50%;
  animation: spinner 0.6s infinite alternate;
}

.spinner > div:nth-child(2) {
  animation-delay: 0.2s;
}

.spinner > div:nth-child(3) {
  animation-delay: 0.4s;
}
</style>


