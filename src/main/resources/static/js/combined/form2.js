var select = document.getElementById("select");
var time = document.getElementById("time");
var point_f2 = document.getElementById('point_f2');
var csi_f2 = document.getElementById('csi_f2');
var manag_f2 = document.getElementById('manag_f2');
var names_f2 = document.getElementById('name_f2');
var agent_Id_f2 = document.getElementById('agent_Id_f2');
var group_f2 = document.getElementById('group_f2');
var search = document.getElementById('val-button_f2')

search.addEventListener("click", function(){ search.disabled || search.classList.add('open') === true;setTimeout(function() { search.disabled = false;},20000000);})



var list = '';
var list2 = '';
var list3 = '';
var list4 = '';
var list5 = '';
var list6 = '';
// 
    
function zapros() {
 
      console.log(time.value + select.value);
      fetch(time.value + select.value).then(
                        res=>{
                            res.json().then(

                                data =>{console.log(data);
                                    for (let i = 0; i < data.length; i++) {
                                      if (data[i][0] <= 7.5) {
                                        list += '<li class="extra" data-value='+ data[i][0] +'>' + data[i][0] + '</li>';
                                      } else {
                                        list += '<li data-value='+ data[i][0] +'>' + data[i][0] + '</li>';
                                      }
                                        list2 += '<li>' +  data[i][1] + '</li>' ;
                                        list3 += '<li>' +  data[i][2] + '</li>' ;
                                        list4 += '<li>' +  data[i][3] + '</li>' ;
                                        list5 += '<li>' +  data[i][4] + '</li>' ;
                                        list6 += '<li>' +  data[i][5] + '</li>' ;
                                    }
                                     csi_f2.innerHTML +=   list ;
                                    point_f2.innerHTML +=   list2 ;
                                    names_f2.innerHTML +=   list3 ;
                                    agent_Id_f2.innerHTML +=   list4 ;
                                    group_f2.innerHTML +=   list5 ;
                                    manag_f2.innerHTML +=   list6 ;
                                    
                                }
                            )
                        }
                    )
};

$(function() {
    $('input[name="daterange2"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log('http://172.28.141.23:8282/api/v1/'+ select.value + '/'  + start.format('YYYY-MM-DD') + '/' + end.format('YYYY-MM-DD'));
      fetch('http://172.28.141.23:8282/api/v1/'+ select.value + '/'  + start.format('YYYY-MM-DD') + '/' + end.format('YYYY-MM-DD')).then(
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
                        list5 += '<li>' +  data[i][4] + '</li>' ;
                        list6 += '<li>' +  data[i][5] + '</li>' ;
                    }
                    csi_f2.innerHTML +=   list ;
                    point_f2.innerHTML +=   list2 ;
                    names_f2.innerHTML +=   list3 ;
                    agent_Id_f2.innerHTML +=   list4 ;
                    group_f2.innerHTML +=   list5 ;
                    manag_f2.innerHTML +=   list6 ; 
                 
                }
            )
        }
    )
    });
  });

   window.onload = function(){
  crear_select();
}

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

 
var li = new Array();
function crear_select(){
var div_cont_select = document.querySelectorAll("[data-mate-select='active']");
var select_ = '';
for (var e = 0; e < div_cont_select.length; e++) {
div_cont_select[e].setAttribute('data-indx-select',e);
div_cont_select[e].setAttribute('data-selec-open','false');
var ul_cont = document.querySelectorAll("[data-indx-select='"+e+"'] > .cont_list_select_mate > ul");
 select_ = document.querySelectorAll("[data-indx-select='"+e+"'] >select")[0];
 if (isMobileDevice()) { 
select_.addEventListener('change', function () {
 _select_option(select_.selectedIndex,e);
});
 }
var select_optiones = select_.options;
document.querySelectorAll("[data-indx-select='"+e+"']  > .selecionado_opcion ")[0].setAttribute('data-n-select',e);
document.querySelectorAll("[data-indx-select='"+e+"']  > .icon_select_mate ")[0].setAttribute('data-n-select',e);
for (var i = 0; i < select_optiones.length; i++) {
li[i] = document.createElement('li');
if (select_optiones[i].selected == true || select_.value == select_optiones[i].innerHTML ) {
li[i].className = 'active';
document.querySelector("[data-indx-select='"+e+"']  > .selecionado_opcion ").innerHTML = select_optiones[i].innerHTML;
};
li[i].setAttribute('data-index',i);
li[i].setAttribute('data-selec-index',e);
// funcion click al selecionar 
li[i].addEventListener( 'click', function(){  _select_option(this.getAttribute('data-index'),this.getAttribute('data-selec-index')); });

li[i].innerHTML = select_optiones[i].innerHTML;
ul_cont[0].appendChild(li[i]);

    }; // Fin For select_optiones
  }; // fin for divs_cont_select
} // Fin Function 



var cont_slc = 0;
function open_select(idx){
var idx1 =  idx.getAttribute('data-n-select');
  var ul_cont_li = document.querySelectorAll("[data-indx-select='"+idx1+"'] .cont_select_int > li");
var hg = 0;
var slect_open = document.querySelectorAll("[data-indx-select='"+idx1+"']")[0].getAttribute('data-selec-open');
var slect_element_open = document.querySelectorAll("[data-indx-select='"+idx1+"'] select")[0];
 if (isMobileDevice()) { 
  if (window.document.createEvent) { // All
  var evt = window.document.createEvent("MouseEvents");
  evt.initMouseEvent("mousedown", false, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	slect_element_open.dispatchEvent(evt);
} else if (slect_element_open.fireEvent) { // IE
  slect_element_open.fireEvent("onmousedown");
}else {
  slect_element_open.click();
}
}else {

  
  for (var i = 0; i < ul_cont_li.length; i++) {
hg += ul_cont_li[i].offsetHeight;
}; 
 if (slect_open == 'false') {  
 document.querySelectorAll("[data-indx-select='"+idx1+"']")[0].setAttribute('data-selec-open','true');
 document.querySelectorAll("[data-indx-select='"+idx1+"'] > .cont_list_select_mate > ul")[0].style.height = hg+"px";
 document.querySelectorAll("[data-indx-select='"+idx1+"'] > .icon_select_mate")[0].style.transform = 'rotate(180deg)';
}else{
 document.querySelectorAll("[data-indx-select='"+idx1+"']")[0].setAttribute('data-selec-open','false');
 document.querySelectorAll("[data-indx-select='"+idx1+"'] > .icon_select_mate")[0].style.transform = 'rotate(0deg)';
 document.querySelectorAll("[data-indx-select='"+idx1+"'] > .cont_list_select_mate > ul")[0].style.height = "0px";
 }
}

} // fin function open_select

function salir_select(indx){
var select_ = document.querySelectorAll("[data-indx-select='"+indx+"'] > select")[0];
 document.querySelectorAll("[data-indx-select='"+indx+"'] > .cont_list_select_mate > ul")[0].style.height = "0px";
document.querySelector("[data-indx-select='"+indx+"'] > .icon_select_mate").style.transform = 'rotate(0deg)';
 document.querySelectorAll("[data-indx-select='"+indx+"']")[0].setAttribute('data-selec-open','false');
}


function _select_option(indx,selc){
 if (isMobileDevice()) { 
selc = selc -1;
}
    var select_ = document.querySelectorAll("[data-indx-select='"+selc+"'] > select")[0];

  var li_s = document.querySelectorAll("[data-indx-select='"+selc+"'] .cont_select_int > li");
  var p_act = document.querySelectorAll("[data-indx-select='"+selc+"'] > .selecionado_opcion")[0].innerHTML = li_s[indx].innerHTML;
var select_optiones = document.querySelectorAll("[data-indx-select='"+selc+"'] > select > option");
for (var i = 0; i < li_s.length; i++) {
if (li_s[i].className == 'active') {
li_s[i].className = '';
};
li_s[indx].className = 'active';

};
select_optiones[indx].selected = true;
  select_.selectedIndex = indx;
  select_.onchange();
  salir_select(selc); 
}
