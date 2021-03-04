window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 700)
    {
        document.getElementById('box1').style="display:block;";
    }
    else
    {
        document.getElementById('box1').style="display:none;";
    }

    if(scrolled > 1000)
    {
        document.getElementById('box2').style="display:block;";
    }
    else
    {
        document.getElementById('box2').style="display:none;";
    }
  }
  