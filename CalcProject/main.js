
 function initalValue(){
    document.getElementById('valPhy').innerHTML = 0;
    document.getElementById('valChem').innerHTML = 0;
    document.getElementById('valMath').innerHTML = 0;
    document.getElementById('valTotal').innerHTML = 0 +' / 300'; 
    document.getElementById('valPercentage').innerHTML = '--';
    document.getElementById('valGrade').innerHTML = '--';
    var divAlert =  document.getElementById('divAlert');
    // console.log(divAlert);
    // console.log(divAlert.className = '');
    divAlert.classList.add('d-none') ;
    document.querySelector('.chart_box').classList.add('d-none');
    var errMsg = document.getElementById('errMsg');   
    
 }
 function alertBoxClear(){
   divAlert.classList.add('d-none');
   
   divAlert.classList.contains('alert-danger')?divAlert.classList.remove('alert-danger'):divAlert.classList.add('alert-success');
   errMsg.innerHTML = ''
 }
 initalValue();

document.getElementById('btnCalculate').addEventListener('click', function(event){
    event.preventDefault();
   console.log(this); 
    let txtPhy = document.getElementById('txtPhy').value;
    let txtChem = document.getElementById('txtChem').value;
    let txtMath = document.getElementById('txtMath').value;
    let total = 0;
    let percentage = 0;
    let grade = '';  
    let className = '';
    
    var range = (txtPhy<0 || txtPhy>100) || (txtChem<0 || txtChem>100) || (txtMath<0 || txtMath>100);
 
  if( txtPhy == '' || txtChem == '' || txtMath == ''){
   //  alert('All fields are mandatory')         
   //  console.log(errMsg);
      divAlert.classList.add('alert-danger');
      divAlert.classList.remove('d-none');
      errMsg.innerHTML ='All fields are mandatory';
      setTimeout(()=>{  
         alertBoxClear();
      },5000);

  }else if( isNaN(txtPhy) || isNaN(txtChem) || isNaN(txtMath)){ 
     divAlert.classList.add('alert-danger');
     divAlert.classList.remove('d-none');
     errMsg.innerHTML ='Subject marks must in number'; 
     
   setTimeout(()=>{  
      alertBoxClear();
   },5000);

  }else if( range ){ 
     divAlert.classList.add('alert-danger');
     divAlert.classList.remove('d-none');
     errMsg.innerHTML ='Subject marks must be between 0 and 100';  
   setTimeout(()=>{  
      alertBoxClear();
   },5000);
  }else {

   clear(); 
    txtPhy = parseInt(txtPhy);
    txtChem = parseInt(txtChem);
    txtMath = parseInt(txtMath);
     document.getElementById('valPhy').innerHTML = txtPhy;
   document.getElementById('valChem').innerHTML = txtChem;
   document.getElementById('valMath').innerHTML = txtMath;
     total = txtPhy + txtChem + txtMath;
    percentage = (total/300)*100;
   let flag = (txtPhy < 35 || txtChem < 35 || txtMath < 35);
// console.log(typeof  percentage, percentage.toFixed(2));
   if(flag){ 
      grade = 'Fail'
      className = 'text-danger'
   }else{
      if(percentage >= 90 ){
         grade = '<strong> A+ </strong>'
         className = 'text-success'
      }else if(percentage >= 75){
         grade = '<strong> A </strong>'
         className = 'text-success'
      }else if(percentage >= 60){
         grade = '<strong> B </strong>'
         className = 'text-primary'
      }else if(percentage >= 50){
         grade = '<strong> C </strong>'
         className = 'text-primary'
      }else if(percentage >= 35){
         grade = '<strong> D </strong>'
         className = 'text-warning'
      }
      percentage = percentage.toFixed(2) + ' %'
   }

   document.getElementById('valTotal').innerHTML = total + ' / 300'
   document.getElementById('valPercentage').innerHTML = percentage;
   document.getElementById('valGrade').innerHTML = grade;
   document.getElementById('valGrade').className = className;
   console.log(total,percentage);

     chart(txtPhy,txtChem,txtMath); 
     document.querySelector('.chart_box').classList.remove('d-none');
} 


   console.log(typeof txtPhy,txtChem,txtMath);
});

function clear(){
    console.log('clear function call'); 
    document.getElementById('txtPhy').value = '';
     document.getElementById('txtChem').value = '';
     document.getElementById('txtMath').value = '';
     initalValue();
} 
   
(function (H) {
   H.seriesTypes.pie.prototype.animate = function (init) {
       const series = this,
           chart = series.chart,
           points = series.points,
           {
               animation
           } = series.options,
           {
               startAngleRad
           } = series;

       function fanAnimate(point, startAngleRad) {
           const graphic = point.graphic,
               args = point.shapeArgs;

           if (graphic && args) {

               graphic
                   // Set inital animation values
                   .attr({
                       start: startAngleRad,
                       end: startAngleRad,
                       opacity: 1
                   })
                   // Animate to the final position
                   .animate({
                       start: args.start,
                       end: args.end
                   }, {
                       duration: animation.duration / points.length
                   }, function () {
                       // On complete, start animating the next point
                       if (points[point.index + 1]) {
                           fanAnimate(points[point.index + 1], args.end);
                       }
                       // On the last point, fade in the data labels, then
                       // apply the inner size
                       if (point.index === series.points.length - 1) {
                           series.dataLabelsGroup.animate({
                               opacity: 1
                           },
                           void 0,
                           function () {
                               points.forEach(point => {
                                   point.opacity = 1;
                               });
                               series.update({
                                   enableMouseTracking: true
                               }, false);
                               chart.update({
                                   plotOptions: {
                                       pie: {
                                           innerSize: '40%',
                                           borderRadius: 8
                                       }
                                   }
                               });
                           });
                       }
                   });
           }
       }

       if (init) {
           // Hide points on init
           points.forEach(point => {
               point.opacity = 0;
           });
       } else {
           fanAnimate(points[0], startAngleRad);
       }
   };
}(Highcharts));
function chart(txtPhy,txtChem,txtMath){
   
   Highcharts.chart('container', {
      chart: {
          type: 'pie'
      },
      title: {
          text: 'Subject Marks Chart',
          align: 'left'
      },
      subtitle: {
          text: 'Custom animation of pie series',
          align: 'left'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              borderWidth: 2,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b><br>{point.percentage:.2f}%',
                  distance: 20
              }
          }
      },
      series: [{
          // Disable mouse tracking on load, enable after custom animation
          enableMouseTracking: false,
          animation: {
              duration: 2000
          }, 
          colorByPoint: true,
          data: [{
              name: 'Physics',
              y: txtPhy
          }, {
              name: 'Chemistry',
              y: txtChem
          }, {
              name: 'Maths',
              y: txtMath
          }]
      }]
   });
}