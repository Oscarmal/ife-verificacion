function mayusc(campo){
	campo.value=campo.value.toUpperCase();
}

function mostrardiv(nombre) {
	div = document.getElementById(nombre);
	div.style.display = "block";
}

function ocultardiv(nombre) {
	div = document.getElementById(nombre);
	div.style.display="none";
}

function divShow(div){
  ver = document.getElementById(div).style.display;
  if(ver=='block'){
    document.getElementById(div).style.display='none';
  }else{
    document.getElementById(div).style.display='block';
  }
}

function solo_txt(e) { 
	tecla = (document.all) ? e.keyCode : e.which; 
	if (tecla==8 || tecla==13 || tecla==164 || tecla==165) return true;  
	patron =/[A-Za-zÑñ\\\s]/;
	te = String.fromCharCode(tecla);
	return patron.test(te); 
} 

function solo_num(e) { 
	tecla = (document.all) ? e.keyCode : e.which; 
	if (tecla==8 || tecla==13) return true; 
	patron = /\d/;
	te = String.fromCharCode(tecla);
	return patron.test(te); 
} 

function EmailVerify(Data){
	var filter = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
	if(filter.test(Data)){return true;}else{return false;}
}

function trim(data){
	return data.replace(/^\s+|\s+$/g, '');
}

function ltrim(data){
	return data.replace(/^\s+/,'');
}

function ltrim(data){
	return data.replace(/\s+$/,'');
}

function fulltrim(data){
	return data.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ');
}

function ButtonON(IdButton){
	$("#"+IdButton).removeAttr('disabled');
}
function ButtonOFF(IdButton){
	$("#"+IdButton).attr('disabled', 'disabled');
}

function DivContenido(Div, Contenido){
	document.getElementById(Div).innerHTML=Contenido;
}
function utf8_encode(argString) {
  if (argString === null || typeof argString === 'undefined') {
    return '';
  }
  var string = (argString + ''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  var utftext = '',
    start, end, stringl = 0;
  start = end = 0;
  stringl = string.length;
  for (var n = 0; n < stringl; n++) {
    var c1 = string.charCodeAt(n);
    var enc = null;

    if (c1 < 128) {
      end++;
    } else if (c1 > 127 && c1 < 2048) {
      enc = String.fromCharCode(
        (c1 >> 6) | 192, (c1 & 63) | 128
      );
    } else if ((c1 & 0xF800) != 0xD800) {
      enc = String.fromCharCode(
        (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
      );
    } else { // surrogate pairs
      if ((c1 & 0xFC00) != 0xD800) {
        throw new RangeError('Unmatched trail surrogate at ' + n);
      }
      var c2 = string.charCodeAt(++n);
      if ((c2 & 0xFC00) != 0xDC00) {
        throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
      }
      c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
      enc = String.fromCharCode(
        (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
      );
    }
    if (enc !== null) {
      if (end > start) {
        utftext += string.slice(start, end);
      }
      utftext += enc;
      start = end = n + 1;
    }
  }
  if (end > start) {
    utftext += string.slice(start, stringl);
  }
  return utftext;
}
function utf8_decode(str_data) {
  var tmp_arr = [],
    i = 0,
    ac = 0,
    c1 = 0,
    c2 = 0,
    c3 = 0,
    c4 = 0;
  str_data += '';
  while (i < str_data.length) {
    c1 = str_data.charCodeAt(i);
    if (c1 <= 191) {
      tmp_arr[ac++] = String.fromCharCode(c1);
      i++;
    } else if (c1 <= 223) {
      c2 = str_data.charCodeAt(i + 1);
      tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
      i += 2;
    } else if (c1 <= 239) {
      // http://en.wikipedia.org/wiki/UTF-8#Codepage_layout
      c2 = str_data.charCodeAt(i + 1);
      c3 = str_data.charCodeAt(i + 2);
      tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
      i += 3;
    } else {
      c2 = str_data.charCodeAt(i + 1);
      c3 = str_data.charCodeAt(i + 2);
      c4 = str_data.charCodeAt(i + 3);
      c1 = ((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63);
      c1 -= 0x10000;
      tmp_arr[ac++] = String.fromCharCode(0xD800 | ((c1 >> 10) & 0x3FF));
      tmp_arr[ac++] = String.fromCharCode(0xDC00 | (c1 & 0x3FF));
      i += 4;
    }
  }
  return tmp_arr.join('');
}


// Funciones hardcode
function ocultar(){
  window.parent.document.getElementById('popup_msj').style.display='none';
  window.parent.document.getElementById('popup_modal').style.display='none';
}
function ver(){
  document.getElementById('popup_msj').style.display='block';
  document.getElementById('popup_modal').style.display='block';
}