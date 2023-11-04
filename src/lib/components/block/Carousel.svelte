<script type="text/javascript">
  var counter = 1;
  setInterval(function () {
    // @ts-ignore
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 5000);
</script>

<!--image slider start-->
<div class="slider">
  <div class="slides">
    <!--radio buttons start-->
    <input type="radio" name="radio-btn" id="radio1" />
    <input type="radio" name="radio-btn" id="radio2" />
    <input type="radio" name="radio-btn" id="radio3" />
    <input type="radio" name="radio-btn" id="radio4" />
    <!--radio buttons end-->
    <!--slide images start-->
    <div class="slide first">
      <img src="https://images.unsplash.com/photo-1511300636408-a63a89df3482?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D" alt="" />
    </div>
    <div class="slide">
      <img src="https://plus.unsplash.com/premium_photo-1677347335105-1bd16607a25e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D" alt="" />
    </div>
    <div class="slide">
      <img src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D" alt="" />
    </div>
    <div class="slide">
      <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fDRrJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww" alt="" />
    </div>
    <!--slide images end-->
    <!--automatic navigation start-->
    <div class="navigation-auto">
      <div class="auto-btn1" />
      <div class="auto-btn2" />
      <div class="auto-btn3" />
      <div class="auto-btn4" />
    </div>
    <!--automatic navigation end-->
  </div>
  <!--manual navigation start-->
  <div class="navigation-manual">
    <label for="radio1" class="manual-btn" />
    <label for="radio2" class="manual-btn" />
    <label for="radio3" class="manual-btn" />
    <label for="radio4" class="manual-btn" />
  </div>
  <!--manual navigation end-->
</div>

<!--image slider end-->

<style>
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #23e3c9;
  }

  .slider {
    width: 800px;
    height: 500px;
    border-radius: 10px;
    overflow: hidden;
  }

  .slides {
    width: 500%;
    height: 500px;
    display: flex;
  }

  .slides input {
    display: none;
  }

  .slide {
    width: 20%;
    transition: 2s;
  }

  .slide img {
    width: 800px;
    height: 500px;
  }

  /*css for manual slide navigation*/

  .navigation-manual {
    position: absolute;
    width: 800px;
    margin-top: -40px;
    display: flex;
    justify-content: center;
  }

  .manual-btn {
    border: 2px solid #40d3dc;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;
  }

  .manual-btn:not(:last-child) {
    margin-right: 40px;
  }

  .manual-btn:hover {
    background: #40d3dc;
  }

  #radio1:checked ~ .first {
    margin-left: 0;
  }

  #radio2:checked ~ .first {
    margin-left: -20%;
  }

  #radio3:checked ~ .first {
    margin-left: -40%;
  }

  #radio4:checked ~ .first {
    margin-left: -60%;
  }

  /*css for automatic navigation*/

  .navigation-auto {
    position: absolute;
    display: flex;
    width: 800px;
    justify-content: center;
    margin-top: 460px;
  }

  .navigation-auto div {
    border: 2px solid #40d3dc;
    padding: 5px;
    border-radius: 10px;
    transition: 1s;
  }

  .navigation-auto div:not(:last-child) {
    margin-right: 40px;
  }

  #radio1:checked ~ .navigation-auto .auto-btn1 {
    background: #40d3dc;
  }

  #radio2:checked ~ .navigation-auto .auto-btn2 {
    background: #40d3dc;
  }

  #radio3:checked ~ .navigation-auto .auto-btn3 {
    background: #40d3dc;
  }

  #radio4:checked ~ .navigation-auto .auto-btn4 {
    background: #40d3dc;
  }
</style>
