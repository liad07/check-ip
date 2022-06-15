    var latitude="";
    var longitude="";
   function f() {
       var url1="https://geolocation-db.com/jsonp/"+document.getElementById("ip").value;
       document.getElementsByClassName("btn btn-secondary")[1].style.visibility=""
       $.ajax({
           url:url1,
           jsonpCallback: "callback",
           dataType: "jsonp",
           success: function( location ) {
               $('#country_code').html(location.country_code);
               $('#country_name').html(location.country_name);
               $('#city').html(location.city);
               $('#latitude').html(location.latitude);
               latitude=location.latitude
               longitude=location.longitude;
               $('#longitude').html(location.longitude);
               $('#IPv4').html(location.IPv4);
               var url2="https://api.opencagedata.com/geocode/v1/json?key=393f95f75ccc40ee9012f2c427228142&q="+location.latitude+"%2C+"+location.longitude+"&pretty=1&no_annotations=1"
               $.ajax({
                   url:url2,
                   jsonpCallback: "callback",
                   dataType: "jsonp",
                   success: function( location2 ) {
                       $('#ctovet1').html(location2.results[0].formatted.split(",")[0]);
                   }
               });
           }
       });
   }
   function googlemaps() {
       f();
       window.open("https://www.google.com/maps/search/"+latitude+","+longitude+"/")
   }
