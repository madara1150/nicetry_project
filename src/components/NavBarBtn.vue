<template>
  <section>
    <div id="nav">
        <div id="logo">
            <label style="color:#FF9494;">N</label>
            <label style="color:#ffffff;">ice</label>
            <label style="color:#9BFFFF;">T</label>
            <label style="color:#ffffff;">ry</label>
        </div>
        <div id="btn">
          <button style="margin-right:10px;">Sign In</button>
          <button>Sign Up</button>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'NavBarBtn',
}
</script>

<style scoped>
    section{
    width: 100%;
    background: #576F72;
    }
    #nav{
      display: flex;
      align-items: center;
    }
    #btn{
      position: absolute;
      right: 0;
      margin-right: 50px;
    }
    #logo{
      margin-left: 30px;
        font-size: 40px;
        padding: 7px;
    }
    button{
      padding: 10px 30px;
      border-radius: 7px;
      border: none;
      background: #E4DCCF;
      
    }
</style>