var csi_f3 = document.getElementById('csi_f3');
var point_f3 = document.getElementById('point_f3');
var names_f3 = document.getElementById('name_f3');
var group_f3 = document.getElementById('group_f3');
var btn_f3 = document.getElementById ('button_f3');
var btn2_f3 = document.getElementById ('button2_f3');
var btn3_f3 = document.getElementById ('button3_f3');
btn_f3.addEventListener("click", function(){ btn_f3.disabled || btn_f3.classList.add('open') === true;setTimeout(function() { btn_f3.disabled = false;},10000000);})
btn2_f3.addEventListener("click", function(){btn2_f3.disabled || btn2_f3.classList.add('open') === true;setTimeout(function() {btn2_f3.disabled = false;},10000000);})
btn3_f3.addEventListener("click", function(){btn3_f3.di_f3sabled || btn3_f3.classList.add('open') === true; setTimeout(function() {btn3.disa_f3bled = false;},10000000);})
               function today_csi(){
                    console.log('http://172.28.141.23:8282/api/v1/1csi');
                    fetch('http://172.28.141.23:8282/api/v1/1csi').then(
                    res=>{
                        res.json().then(
                            
                            data =>{console.log(data);
                                var list = '';
                                var list2 = '';
                                var list3 = '';
                                var list4 = '';
                                for (let i = 0; i < data.length; i++) {

                                    if (data[i][0] <= 7.5) {
                                        list += '<li class="extra" data-value='+ data[i][0] +'>' + data[i][0] + '</li>';
                                      } else {
                                        list += '<li data-value='+ data[i][0] +'>' + data[i][0] + '</li>';
                                      }
                                    list2 += '<li>' +  data[i][1] + '</li>' ;
                                    list3 += '<li>' +  data[i][2] + '</li>' ;
                                    list4 += '<li>' +  data[i][3] + '</li>' ;
                                }
                                csi_f3.innerHTML +=   list ;
                                point_f3.innerHTML +=   list2 ;
                                group_f3.innerHTML +=   list3 ;
                                names_f3.innerHTML +=   list4 ;
                                
                                
                            }
                        )
                    }
                )
                    return false;
                    
        }
            
       function week_csi(){
                    console.log('http://172.28.141.23:8282/api/v1/7csi');
                    fetch('http://172.28.141.23:8282/api/v1/7csi').then(
                    res=>{
                        res.json().then(
                            
                            data =>{console.log(data);
                                var list = '';
                                var list2 = '';
                                var list3 = '';
                                var list4 = '';
                                for (let i = 0; i < data.length; i++) {

                                    if (data[i][0] <= 7.5) {
                                        list += '<li class="extra" data-value='+ data[i][0] +'>' + data[i][0] + '</li>';
                                      } else {
                                        list += '<li data-value='+ data[i][0] +'>' + data[i][0] + '</li>';
                                      }
                                    list2 += '<li>' +  data[i][1] + '</li>' ;
                                    list3 += '<li>' +  data[i][2] + '</li>' ;
                                    list4 += '<li>' +  data[i][3] + '</li>' ;
                                }
                                csi_f3.innerHTML +=   list ;
                                point_f3.innerHTML +=   list2 ;
                                group_f3.innerHTML +=   list3 ;
                                names_f3.innerHTML +=   list4 ;
                                
                            }
                        )
                    }
                )
                    return false;
                    
        }
              
        function month_csi(){
                    console.log('http://172.28.141.23:8282/api/v1/30csi');
                    fetch('http://172.28.141.23:8282/api/v1/30csi').then(
                    res=>{
                        res.json().then(
                            
                            data =>{console.log(data);
                                var list = '';
                                var list2 = '';
                                var list3 = '';
                                var list4 = '';
                                for (let i = 0; i < data.length; i++) {

                                    if (data[i][0] <= 7.5) {
                                        list += '<li class="extra" data-value='+ data[i][0] +'>' + data[i][0] + '</li>';
                                      } else {
                                        list += '<li data-value='+ data[i][0] +'>' + data[i][0] + '</li>';
                                      }
                                    list2 += '<li>' +  data[i][1] + '</li>' ;
                                    list3 += '<li>' +  data[i][2] + '</li>' ;
                                    list4 += '<li>' +  data[i][3] + '</li>' ;
                                }
                                csi_f3.innerHTML += list 
                                point_f3.innerHTML += list2
                                group_f3.innerHTML += list3 
                                names_f3.innerHTML += list4 
                                
                            }
                        )
                    }
                )
                    return false;
                    
        }
        
        $(function() {
            $('input[name="daterange"]').daterangepicker({
              opens: 'left'
            }, function(start, end, label) {
              console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
              fetch('http://172.28.141.23:8282/api/v1/csi/'  + start.format('YYYY-MM-DD') + '/' + end.format('YYYY-MM-DD')).then(
                res=>{
                    res.json().then(
                        
                        data =>{console.log(data);
                            var list = '';
                            var list2 = '';
                            var list3 = '';
                            var list4 = '';
                            for (let i = 0; i < data.length; i++) {

                                if (data[i][0] <= 7.5) {
                                    list += '<li class="extra" data-value='+ data[i][0] +'>' + data[i][0] + '</li>';
                                  } else {
                                    list += '<li data-value='+ data[i][0] +'>' + data[i][0] + '</li>';
                                  }
                                list2 += '<li>' +  data[i][1] + '</li>' ;
                                list3 += '<li>' +  data[i][2] + '</li>' ;
                                list4 += '<li>' +  data[i][3] + '</li>' ;
                            }
                            csi_f3.innerHTML += list 
                            point_f3.innerHTML += list2
                            group_f3.innerHTML += list3 
                            names_f3.innerHTML += list4 
                            
                        }
                    )
                }
            )
            });
          });
            
