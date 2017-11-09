var call = function(){
    $.ajax({
        url:"https://api.harvardartmuseums.org/object?apikey=fa2367c0-bda4-11e7-b450-3329fe2418f9",
        method:"GET",
        success: function(data){

var name1 = data.records[0].people[0].name;
var image1 = data.records[0].primaryimageurl;
var desc1 = data.records[0].description;
/*
var name2 = data.records[1].people[1].name;
var image2 = data.records[1].primaryimageurl;
var desc2 = data.records[1].description;

var name3 = data.records[2].people[2].name;
var image3 = data.records[2].primaryimageurl;
var desc3 = data.records[2].description;

var name4 = data.records[3].people[3].name;
var image4 = data.records[3].primaryimageurl;
var desc4 = data.records[3].description;

var name5 = data.records[4].people[4].name;
var image5 = data.records[4].primaryimageurl;
var desc5 = data.records[4].description;

var name6 = data.records[5].people[5].name;
var image6 = data.records[5].primaryimageurl;
var desc6 = data.records[5].description;

var name7 = data.records[6].people[6].name;
var image7 = data.records[6].primaryimageurl;
var desc7 = data.records[6].description;

var name8 = data.records[7].people[7].name;
var image8 = data.records[7].primaryimageurl;
var desc8 = data.records[7].description;

*/
  $('#name1').text(name1);
  $('#image1').attr('src',image1);
  $('#desc1').text(desc1);
/*
  $('#name2').text(name2);
  $('#image2').attr('src',image2);
  $('#desc2').text(desc2);

  $('#name3').text(name3);
  $('#image3').attr('src',image3);
  $('#desc3').text(desc3);

  $('#name4').text(name4);
  $('#image4').attr('src',image4);
  $('#desc4').text(desc4);

  $('#name5').text(name5);
  $('#image5').attr('src',image5);
  $('#desc5').text(desc5);

  $('#name6').text(name6);
  $('#image6').attr('src',image6);
  $('#desc6').text(desc6);

  $('#name7').text(name7);
  $('#image7').attr('src',image7);
  $('#desc7').text(desc7);

  $('#name8').text(name8);
  $('#image8').attr('src',image8);
  $('#desc8').text(desc8);
*/
   }
  })
}
call();
