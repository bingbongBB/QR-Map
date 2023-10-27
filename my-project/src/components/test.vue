<template>
    <GoogleLogin :callback="callback" />
</template>
<script>
 export default {
    data: () => ({
        callback: function(response) {
          this.loginSuccess = true;
          console.log(response);
        }
    })
    }
</script>