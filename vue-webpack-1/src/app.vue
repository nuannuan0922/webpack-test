<template>
<div>
    <div id="message">
        {{message}}
    </div>

    <div id="message-2">
      <span>{{message}}</span>
        
    </div>
</div>
</template>

<script>
// import "./css/test.less";

export default {
  data() {
    return {
      message: "hello world"
    };
  }
};
</script>

<style>
@import url("./css/test.less");
#message {
  color: red;
  height: 200px;
  background-image: url("./assets/2018-1.png");
}
</style>


