<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label>Email</label>
      <input type="email" v-model="email" required />

      <label>Password</label>
      <input type="password" v-model="password" required />
      <div v-if="passwordError" class="error">{{ passwordError }}</div>

      <label>Role</label>
      <select v-model="role">
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>


      <label>Skills:</label>
      <input type="text" v-model="tempSkill" @keyup.alt="addSkill"/>
      <div v-for="skill in skills" :key="skill" class="pill" >
        <span  @click="deleteSkill(skill)">{{skill}}</span>
      </div>
      

      <div class="terms">
        <input type="checkbox"  v-model="terms" required />
        <label>I agree to the terms and conditions</label>
      </div>
      <div class="submit">
        <button>Sign Up</button>
      </div>
      
<!-- 
      <div>
        <input type="checkbox" value="ABC" v-model="names" required />
        <label>ABC</label>
      </div>
       <div>
        <input type="checkbox" value="XYZ" v-model="names" required />
        <label>XYZ</label>
      </div>
       <div>
        <input type="checkbox" value="PQR" v-model="names" required />
        <label>PQR</label>
      </div> -->

    </form>
    <p>Email:{{ email }}</p>
    <p>Password:{{ password }}</p>
    <p>Role:{{ role }}</p>
    <p>Terms:{{terms}}</p>
    <p>Skill:{{ tempSkill }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "admin",
      terms: false,
      tempSkill:'',
      skills:[],
      passwordError:''
    }
  },
   methods:{
        addSkill(e){
            if(e.key===',' && this.tempSkill){
                if(!this.skills.includes(this.tempSkill)){
                     this.skills.push(this.tempSkill);
                }
               
                this.tempSkill='';
            }
        },
        deleteSkill(skill){
            this.skills = this.skills.filter((item)=>{
                return skill !==item
            })
        },
        handleSubmit(){
            this.passwordError=this.password.length > 6 ? '':'Password must be at least 6 characters long';

            if(!this.passwordError){
                console.log('email:', this.email);
                console.log('password:', this.password);
                console.log('role:', this.role);
                console.log('terms:', this.terms);
                console.log('skills:', this.skills);
            }
        }
    }
};
</script>
<style>
form {
  max-width: 400px;
  margin: 50px auto;
  background: #f4f7f8;
  text-align: left;
  padding: 30px;
  border-radius: 8px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 5px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 10px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: auto;
}
.submit{
  text-align: center;

}
.error{
color:red;
font-weight:bold;
font-style:italic;
}
</style>
