<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: "App"
}
</script>

<style lang="scss">
@mixin rainbow-color {
  border-image: linear-gradient(to right, rgb(217, 112, 147), rgb(255, 220, 164), turquoise);
  border-image-slice: 1;
  -webkit-background-clip: border-box;
  -webkit-text-fill-color: transparent;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-image: url(@/assets/images/website/background.png);
}

.flex {
  display: flex;

  &_row {
    flex-direction: row;
  }

  &_column {
    flex-direction: column;
  }

  &_between {
    justify-content: space-between;
  }

  &_around {
    justify-content: space-around;
  }

  &_vertical {
    &--center {
      align-items: center;
    }
  }

  &_horizontal {
    &--center {
      justify-content: center;
    }

    &--right {
      justify-content: right;
    }
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Corinthia", sans-serif;
  background: linear-gradient(to top, rgb(217, 112, 147), rgb(255, 220, 164), turquoise);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  margin-top: 3px;
  font-size: 60px;
}

h2 {
  font-size: 40px;
  font-weight: normal;
  width: 350px;
  margin: -1px;
  border-bottom: 1px solid turquoise;
  background: rgb(217, 112, 147);
  -webkit-background-clip: border-box;
  -webkit-text-fill-color: white;
  color: white;
  border-radius: 10px 10px 0 0;
}

@keyframes moving_bars_colors {
  0% {
    background: linear-gradient(to top, rgb(217, 112, 147), rgb(255, 220, 164), turquoise);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 1;
    transform: scale(1);
  }

  33% {
    transform: scale(0.9);
  }

  50% {
    background: linear-gradient(to bottom, rgb(217, 112, 147), rgb(255, 220, 164), turquoise);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0.6;
    transform: scale(0.9);
  }

  66% {
    transform: scale(0.9);
  }

  100% {
    background: linear-gradient(to top, rgb(217, 112, 147), rgb(255, 220, 164), turquoise);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes rotateMenu {
  0% {
    transform: rotateX(-90deg)
  }

  70% {
    transform: rotateX(20deg)
  }

  100% {
    transform: rotateX(0deg)
  }
}

.dropdown-content li a:hover {
  font-size: 18px;
}

.dropdown {
  &-button {
    background-color: transparent;
    border-color: transparent;
    height: 50px;
    cursor: pointer;
  }

  &-content {
    position: absolute;
    top: 56px;
    right: 0;
    padding-left: 0;
    background-color: white;
    width: 230px;
    animation: rotateMenu 400ms ease-in-out forwards;
    transform-origin: top center;

    & li {
      margin-top: -3px;
      padding: 12px 16px;
      display: block;
      border-width: 3px;
      border-style: solid;
      border-image: linear-gradient(to right, rgb(217, 112, 147), rgb(255, 220, 164), turquoise);
      border-image-slice: 1;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    & li a {
      font-family: 'Satisfy', sans-serif;
      font-size: 20px;
      display: block;
      position: relative;
      text-align: right;
      margin:0;
      -webkit-text-fill-color: black;
      border-color: transparent;
      text-decoration: none;

      &:hover {
      -webkit-text-fill-color: turquoise;
      border-color: transparent;
      align-items: right;
      display: block;
    }
    }

    & li button {
      font-family: 'Satisfy', sans-serif;
      font-size: 20px;
      display: block;
      position: relative;
      text-align: right;
      margin:0 !important;
      -webkit-text-fill-color: black;
      border-color: transparent;
      text-decoration: none;

      &:hover {
      -webkit-text-fill-color: turquoise;
      border-color: transparent;
      align-items: right;
      display: block;
    }
    }
  }
}

header {
  min-width: 350px;
  border-width: 3px;
  border-style: solid;
  @include rainbow-color;
  background-color: whitesmoke;
  margin-bottom: 50px;
}

footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-width: 350px;
  border-width: 3px;
  border-style: solid;
  @include rainbow-color;
  background-color: whitesmoke;

  & span {
    font-size: 40px;
    font-family: 'Corinthia', sans-serif;
    font-weight: bold;
    background: linear-gradient(to right, rgb(217, 112, 147), rgb(203, 176, 132), turquoise);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
}

.logo {
  font-size: 40px;
  background: linear-gradient(to right, rgb(217, 112, 147), rgb(255, 220, 164), turquoise);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 20px;
}

.fa-bars {
  font-family: "Font Awesome 6 Free";
  content: "\f0c9";
  background: linear-gradient(to top, rgb(217, 112, 147), rgb(255, 220, 164), turquoise);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 20px;

  &:hover {
    animation: moving_bars_colors 800ms ease-in-out alternate forwards;
  }
}
</style>