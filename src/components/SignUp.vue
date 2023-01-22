<template>
    <section>
        <div>
            <input type="text" placeholder="first name" style="width:145px;margin-right:10px;">
            <input type="text" placeholder="last name" style="width:145px;"> <br>
            <input type="text" placeholder="username" style="margin-top:10px;"> <br>
            <input type="text" placeholder="password" style="margin-top:10px;"> <br>
            <input type="email" placeholder="email" style="margin-top:10px;"> <br> <br>
            <button style="margin-top:10px;">APPLY</button>

        </div>
    </section>
</template>

<script>
export default {
    name: "SignUp"
}
</script>

<style scoped>
    input{
        width: 300px;
        height: 30px;
        border: none;
        border-radius: 5px;
        background: #D6D5D1;
        color:#A49797;
    }
    input::placeholder{
        text-align: center;
        
    }
    button{
        width: 300px;
        height: 30px;
        border:none;
        background: #B8CBA9;
        color: #974747;
        transition: all 0.5s;
        cursor: pointer;
        border-radius: 5px;
    }
    button:hover{
        width: 350px;
        height: 35px;
    }
</style>