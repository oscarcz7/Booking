
<template>
    <main>
      <div class="container">
  
        <div>
          <h1 class="title">Please fill the blanks to search the best options for you!</h1>
          <form @submit.prevent="">
  
            <div>
              <label>Entry Date</label>
              <input type="date" />
            </div>
            <div>
              <label>Departure Date</label>
              <input type="date" />
            </div>
            <div>
              <label>Customer Type</label>
              <select name="Customer Type" id="customer">
                <option value="rw">Reward Customer</option>
                <option value="rc">Regular Customer</option>
              </select>
            </div>
            <button type="submit">Search</button>
  
          </form>
  
  
        </div>
  
      </div>
    </main>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style lang="scss" scoped>
  $color_1: #1DA1F2;
  $color_2: gray;
  $color_3: white;
  $color_4: black;
  $font-family_1: poppins;
  
  input,
  select {
  
    display: block;
    width: 50%;
    padding: 10px;
    border: none;
    outline: none;
    box-sizing: border-box;
    background: #ecf0f3;
    padding: 10px;
    padding-left: 20px;
    height: 50px;
    font-size: 14px;
    border-radius: 50px;
    box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
    margin: 0 30px 10px 0;
  
    &::placeholder {
      color: $color_2;
    }
  
    @media screen and (min-width: 992px) and (max-width: 1439px) {
      min-width: 50% !important;
  
    }
  
    @media screen and (max-width: 991px) {
      min-width: 90% !important;
  
    }
  }
  
  form {
    margin-top: 30px;
  }
  
  .container {
    // width: 1200px !important;
    padding: 0 !important;
    margin-right: auto;
    margin-left: auto;
    height: 100vh;
  
    @media screen and (min-width: 992px) and (max-width: 2080px) {
      // max-width: 1279px !important;
      padding: 0 !important;
      margin: 0 70px !important;
      width: auto !important;
    }
  
    @media screen and (max-width: 991px) {
      // max-width: 959px !important;
      margin: 0px !important;
      padding: 0 !important;
      width: auto !important;
    }
  }
  
  
  label {
    display: block;
    width: 100%;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    margin-bottom: 4px;
    font-weight: 900;
    font-size: 1.2rem;
  
    &:nth-of-type(2) {
      margin-top: 12px;
    }
  }
  
  button {
    background-color: orange;
    color: $color_3;
  
    display: block;
    width: 200px;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    margin-top: 25px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 900;
    font-size: 1rem;
    transition: 0.5s;
  
  
    &:hover {
      scale: 1.1;
      color: orange;
      background-color: #fff;
    }
  }
  
  .title {
    font-weight: 1000;
    font-size: 2rem;
  }
  </style>
