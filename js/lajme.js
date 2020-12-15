function plusPage(n)
{
  showPage(pageIndex += n);
}
function currentPage(n)
{
  showPage(pageIndex=n);
}
function showPage(n)
{
    var i;
    var page = document.getElementsByClassName("ThisPage");
    var page_number = document.getElementsByClassName("page_number");
    if (n > page.length)
    {
        pageIndex = 1;
    }
    if (n < 1)
    {
        pageIndex = page.length;
    }
    for (i = 0; i < page.length; i++)
    {
        page[i].style.display = "none";
    }
    for (i = 0; i < page_number.length; i++)
    {
      page_number[i].className = page_number[i].className.replace('active','');
    }
    page[pageIndex-1].style.display = "block";
    page_number[pageIndex-1].className += " active";
}

function back()
{
  var day_night = new Date().getHours();
  if (day_night>=0 && day_night<8)
  {
    document.write("No sleep? Even Lion king sleeps now");
    document.getElementById("myad").style.background = " url('../images/b2.png'), url('../images/b1.png')";
    document.getElementById("myad").style.color = "white";
  }
  else if(day_night>=8 && day_night<12)
  {
    document.write("Still sleeping? Wake up and start your day energic as Lion King ");
    document.getElementById("myad").style.background = " url('../images/mngjz.png'), url('../images/b4.jpg')";
    document.getElementById("myad").style.color = "black";
  }
  else if(day_night>=12 && day_night<18)
  {
    document.write("Tired? Take a nap like our Lion King");
    document.getElementById("myad").style.background = " url('../images/sleepy.png'), url('../images/b4.jpg')";
    document.getElementById("myad").style.color = "black";
  }
  else if(day_night>=18 && day_night<=23)
  {
    document.write("Still exploring? Lion King loves too to explore");
    document.getElementById("myad").style.background = " url('../images/drek.png'), url('../images/b1.png')";
    document.getElementById("myad").style.color = "white";
  }
  document.getElementById("myad").style.backgroundOrigin = "padding-box, border-box";
  document.getElementById("myad").style.backgroundPosition = "top right, top right";
  document.getElementById("myad").style.backgroundAttachment = "local, local";
  document.getElementById("myad").style.backgroundRepeat = "no-repeat, repeat-x";
  document.getElementById("myad").style.backgroundSize = "150px 150px, 300px 200px";
}
