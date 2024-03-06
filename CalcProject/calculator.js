  
let txtLoanAmt = document.getElementById('txtLoanAmt')
let loanRangeSlider = document.getElementById('loanRangeSlider')
let txtROI = document.getElementById('txtROI')
let roiRangeSlider = document.getElementById('roiRangeSlider')
let txtLoanTenure = document.getElementById('txtLoanTenure')
let loanTenureRangeSlider = document.getElementById('loanTenureRangeSlider')
 

// console.log(txtLoanAmt,loanRangeSlider);
// console.log(txtLoanAmt.value,loanRangeSlider);
txtLoanAmt.value = 100000;
loanRangeSlider.value = 100000;
txtROI.value = 4;
roiRangeSlider.value = 4;
txtLoanTenure.value = 5;
loanTenureRangeSlider.value = 5;

// // txtLoanAmt.innerHTML = loanRangeSlider.value;
// txtLoanAmt.onchange = function(){
//     // console.log(txtLoanAmt.value);
//     loanRangeSlider.value = txtLoanAmt.value
//   } 
// loanRangeSlider.oninput = function(){
//     // console.log(loanRangeSlider.value);
//     txtLoanAmt.value = loanRangeSlider.value;
//   }
  const rangeSlider = function(txtLoanAmt,loanRangeSlider,txtROI,roiRangeSlider,txtLoanTenure,loanTenureRangeSlider){

    txtLoanAmt.onchange = function(){
        // console.log(txtLoanAmt.value);
        loanRangeSlider.value = txtLoanAmt.value
        ppfCalculator(txtLoanAmt,loanRangeSlider,txtROI,roiRangeSlider,txtLoanTenure,loanTenureRangeSlider)
      } 
      loanRangeSlider.oninput = function(){
      // console.log(txtLoanAmt.value);
        txtLoanAmt.value = loanRangeSlider.value
        ppfCalculator(txtLoanAmt,loanRangeSlider,txtROI,roiRangeSlider,txtLoanTenure,loanTenureRangeSlider)
      } 
      txtROI.onchange = function(){ 
        roiRangeSlider.value = txtROI.value
        ppfCalculator(txtLoanAmt,loanRangeSlider,txtROI,roiRangeSlider,txtLoanTenure,loanTenureRangeSlider)
      } 
      roiRangeSlider.oninput = function(){ 
        txtROI.value = roiRangeSlider.value
        ppfCalculator(txtLoanAmt,loanRangeSlider,txtROI,roiRangeSlider,txtLoanTenure,loanTenureRangeSlider)
      }
      txtLoanTenure.onchange = function(){ 
        loanTenureRangeSlider.value = N.value
        ppfCalculator(txtLoanAmt,loanRangeSlider,txtROI,roiRangeSlider,txtLoanTenure,loanTenureRangeSlider)
      } 
      loanTenureRangeSlider.oninput = function(){ 
        txtLoanTenure.value = loanTenureRangeSlider.value
        ppfCalculator(txtLoanAmt,loanRangeSlider,txtROI,roiRangeSlider,txtLoanTenure,loanTenureRangeSlider)
      }
       
      
  }
const ppfCalculator = function(txtLoanAmt,loanRangeSlider,txtROI,roiRangeSlider,txtLoanTenure,loanTenureRangeSlider){
   
   var amount = +txtLoanAmt.value;
    var tenure = +txtLoanTenure.value;
    var roi = +txtROI.value;
console.log(amount,roi);
     var P = amount;
     var R = roi/12/100;
     var N = tenure * 12;
    
 
       
      var EMI = P * R * (1+R)**N / ( (1+R)**N-1);
      EMI = Math.round(EMI); 
    
      console.log(EMI);  
   total = EMI * N;
  console.log(total);

  totalIntAmt = total - P;
  console.log(totalIntAmt);

    totalAmount=P+totalIntAmt;
    console.log( totalAmount);

  document.getElementById('monthEmi').innerHTML = EMI;
  document.getElementById('principleAmt').innerHTML = P;
   document.getElementById('totalInterest').innerHTML = totalIntAmt;
   document.getElementById('totalAmt').innerHTML = totalAmount;
  
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
  
   chart(amount,totalIntAmt)
   
 }
rangeSlider(txtLoanAmt,loanRangeSlider,txtROI,roiRangeSlider,txtLoanTenure,loanTenureRangeSlider);
 
ppfCalculator(txtLoanAmt,loanRangeSlider,txtROI,roiRangeSlider,txtLoanTenure,loanTenureRangeSlider);


function chart(amount,totalIntAmt){
  Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'EMI Calculator',
        align: 'center'
    },
    subtitle: {
        text: 'PPF Calculate',
        align: 'center'
    }, 
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
            name: 'Principle Amount',
            y: amount
        }, {
            name: 'Interest Amount',
            y: totalIntAmt
        }]
    }]
  });
}
 
 

