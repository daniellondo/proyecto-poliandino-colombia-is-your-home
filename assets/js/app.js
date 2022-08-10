document.getElementById("year").innerHTML = new Date().getFullYear();

(function()
{ var i,e,d=document,s="script";i=d.createElement("script");
i.async=1;i.charset="UTF-8"; i.src="https://cdn.curator.io/published/8944470b-db87-4eaa-a4b5-ca75c025c62b.js"; 
e=d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e); 
})();

(function($){
    $('#videoIndex').attr('controls');
    $('#videoIndex').trigger('play');
  })(jQuery);