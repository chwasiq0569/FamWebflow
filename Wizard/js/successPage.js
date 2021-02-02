const loader = `<div class="loaderContainer>
<div class="preloaderText">
    <h1>Sit back and chill, your journey with us has just begun.</h1>
</div>
<div class="loader">
<div class="loader-inner ball-spin-fade-loader">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
</div>
</div>
`;

const content = `<div class="headline">
<span>Sorry we've hit capacity.
</span>
</div>
<div class="headlineTwo">
<span>
</span>
</div>  
<div class="privacyPolicy">
<span>By continuing, you agree to be evaluated for multiple Petal credit products and acknowledge and agree to Petal's Auto-dialer Authorization, Privacy Policy, and Site Terms and to be contacted at the number you enter below. Message and data rates may apply.</span>
</div>   
<div class="headlineTwo moveUp">
<span>
    What's next
</span>
</div>  
<div class="messageContainer">
<div class="leftSide ">
    <div class="iconContainer">
        <img src="../assets/icons/birthday-card.svg" alt="invitation" />
    </div>
    <div class="verticalLine">
        <div class="verticalLineInner">

        </div>
    </div>
</div>
<div class="rightSide">
    <div id="acc1" class="upperSection accordion">
            Text Invite
    </div>
    <div id="panel1" class="lowerSection panel">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
  </div>
</div>  
<!-- <div class="horizontalLine"></div>  -->
<div class="messageContainer" >
<div class="leftSide">
    <div class="iconContainer greenbg">
        <img src="../assets/icons/user.svg" alt="invitation" />
    </div>
    <div class="verticalLine">
        <div class="verticalLineInner">

        </div>
    </div>
</div>
<div class="rightSide">
    <div id="acc2" class="upperSection accordion">
      Open your account
    </div>
    <div id="panel2" class="lowerSection panel">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
</div>
</div>  
<!-- <div class="horizontalLine"></div>  -->
<div class="messageContainer" >
<div class="leftSide">
    <div class="iconContainer greenbg">
        <img src="../assets/icons/phone-call.svg" alt="invitation" />
    </div>
    <div class="verticalLine">
        <div class="verticalLineInner">

        </div>
    </div>
</div>
<div class="rightSide">
    <div id="acc3" class="upperSection accordion">
        Welcome Call
    </div>
    <div id="panel3" class="lowerSection panel">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
</div>
</div>  
<!-- <div class="horizontalLine"></div>  -->
<div class="messageContainer" >
<div class="leftSide">
  <div class="iconContainer greenbg">
        <img src="../assets/icons/money.svg" alt="money" />
    </div>
    <div class="verticalLine">
        
    </div>
</div>
<div class="rightSide">
    <div id="acc4" class="upperSection accordion">
        Fund and Invest
    </div>
    <div id="panel4" class="lowerSection panel">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
</div>
</div>  
`;

console.log(document.getElementById("stepOne"));

document.getElementById("stepOne").innerHTML = loader;

setTimeout(function(){
  document.getElementById("stepOne").innerHTML = content;
// document.getElementById("acc1").addEventListener("click", function(){
//   document.getElementById("panel1").style.maxHeight = document.getElementById("panel1").scrollHeight + "px";
//   document.getElementById("panel2").style.maxHeight = null;
//   document.getElementById("panel3").style.maxHeight = null;
//   document.getElementById("panel4").style.maxHeight = null;
// })
// document.getElementById("acc2").addEventListener("click", function(){
//   document.getElementById("panel1").style.maxHeight = null;
//   document.getElementById("panel2").style.maxHeight = document.getElementById("panel1").scrollHeight + "px";
//   document.getElementById("panel3").style.maxHeight = null;
//   document.getElementById("panel4").style.maxHeight = null;
// })
// document.getElementById("acc3").addEventListener("click", function(){
//   document.getElementById("panel1").style.maxHeight = null;
//   document.getElementById("panel3").style.maxHeight = document.getElementById("panel1").scrollHeight + "px";
//   document.getElementById("panel2").style.maxHeight = null;
//   document.getElementById("panel4").style.maxHeight = null;
// })
// document.getElementById("acc4").addEventListener("click", function(){
//   document.getElementById("panel1").style.maxHeight = null;
//   document.getElementById("panel4").style.maxHeight = document.getElementById("panel1").scrollHeight + "px";
//   document.getElementById("panel3").style.maxHeight = null;
//   document.getElementById("panel2").style.maxHeight = null;
// })
}, 2000);