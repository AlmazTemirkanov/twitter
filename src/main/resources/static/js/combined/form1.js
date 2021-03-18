
var num = document.getElementById('number');
var csi = document.getElementById('csi');
var date = document.getElementById('date');
var names = document.getElementById('name');
var agent_Id = document.getElementById('agent_Id');
var group = document.getElementById('group');
var btn = document.getElementById ('button');
var btn2 = document.getElementById ('button2');
var btn3 = document.getElementById ('button3');
var mess = document.getElementById('message');
btn.addEventListener("click", function(){ btn.disabled || btn.classList.add('open') === true;setTimeout(function() { btn.disabled || btn.classList.remove('open') === false;},1000000);})
btn2.addEventListener("click", function(){btn2.disabled || btn2.classList.add('open') === true;setTimeout(function() {btn2.disabled = false;},10000000);})
btn3.addEventListener("click", function(){btn3.disabled || btn3.classList.add('open') === true; setTimeout(function() {btn3.disabled = false;},10000000);})
function today(){
    this.mess.value;
            console.log('http://172.28.141.23:8282/api/v1/1/'+ mess.value);
            fetch('http://172.28.141.23:8282/api/v1/1/'+ mess.value).then(
            res=>{
                res.json().then(
                    
                    data =>{console.log(data);
                        var list = '';
                        var list2 = '';
                        var list3 = '';
                        var list4 = '';
                        var list5 = '';
                        var list6 = '';
                        for (let i = 0; i < data.length; i++) {

                            list += '<li>' + data[i][0] + '</li>' ;
                            list2 += '<li>' +  data[i][1] + '</li>' ;
                            list3 += '<li>' +  data[i][2] + '</li>' ;
                            list4 += '<li>' +  data[i][3] + '</li>' ;
                            list5 += '<li>' +  data[i][4] + '</li>' ;
                            list6 += '<li>' +  data[i][5] + '</li>' ;
                        }
                        num.innerHTML +=   list ;
                        csi.innerHTML +=   list2 ;
                        date.innerHTML +=   list3 ;
                        names.innerHTML +=   list4 ;
                        agent_Id.innerHTML +=   list5 ;
                        group.innerHTML +=   list6 ;
                        
                    }
                )
            }
        )
            return false;
            
}
function week(){
    this.mess.value;
            console.log('http://172.28.141.23:8282/api/v1/7/'+ mess.value);
            fetch('http://172.28.141.23:8282/api/v1/7/'+ mess.value).then(
            res=>{
                res.json().then(
                    
                    data =>{console.log(data);
                        var list = '';
                        var list2 = '';
                        var list3 = '';
                        var list4 = '';
                        var list5 = '';
                        var list6 = '';
                        for (let i = 0; i < data.length; i++) {

                            list += '<li>' + data[i][0] + '</li>' ;
                            list2 += '<li>' +  data[i][1] + '</li>' ;
                            list3 += '<li>' +  data[i][2] + '</li>' ;
                            list4 += '<li>' +  data[i][3] + '</li>' ;
                            list5 += '<li>' +  data[i][4] + '</li>' ;
                            list6 += '<li>' +  data[i][5] + '</li>' ;
                        }
                        num.innerHTML +=   list ;
                        csi.innerHTML +=   list2 ;
                        date.innerHTML +=   list3 ;
                        names.innerHTML +=   list4 ;
                        agent_Id.innerHTML +=   list5 ;
                        group.innerHTML +=   list6 ;
                        
                    }
                )
            }
        )
            return false;
            
}
function month(){
    this.mess.value;
            console.log('http://172.28.141.23:8282/api/v1/30/'+ mess.value);
            fetch('http://172.28.141.23:8282/api/v1/30/'+ mess.value).then(
            res=>{
                res.json().then(
                    
                    data =>{console.log(data);
                        var list = '';
                        var list2 = '';
                        var list3 = '';
                        var list4 = '';
                        var list5 = '';
                        var list6 = '';
                        for (let i = 0; i < data.length; i++) {

                            list += '<li>' + data[i][0] + '</li>' ;
                            list2 += '<li>' +  data[i][1] + '</li>' ;
                            list3 += '<li>' +  data[i][2] + '</li>' ;
                            list4 += '<li>' +  data[i][3] + '</li>' ;
                            list5 += '<li>' +  data[i][4] + '</li>' ;
                            list6 += '<li>' +  data[i][5] + '</li>' ;
                        }
                        num.innerHTML +=   list ;
                        csi.innerHTML +=   list2 ;
                        date.innerHTML +=   list3 ;
                        names.innerHTML +=   list4 ;
                        agent_Id.innerHTML +=   list5 ;
                        group.innerHTML +=   list6 ;
                        
                    }
                )
            }
        )
            return false;
            
}
