var url ="https://docs.google.com/spreadsheets/d/1mpyP8cpSq43TsL2bVCoAEK6b_9qZmJAl59xV5hKRACc/edit";
  
function doGet(e){
  
   return HtmlService.createTemplateFromFile('index')
      .evaluate();
      
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function pedidoSave(v_nombre,v_direccion,v_celular,v_pedido,v_total){

  var tiempo = new Date();
  Logger.log("Funcion pedidoSave-__es : la fecha y hora: " + new Date());
  
  var nombre = v_nombre;
  var direccion = v_direccion;
  var celular = v_celular;
  var pedido = v_pedido;
  var total =v_total;
  var fecha =tiempo.getDate() + "/" + (tiempo.getMonth()+1) + "/" + tiempo.getFullYear() + " " + tiempo.getHours() + ":" + tiempo.getMinutes() + ":" + tiempo.getSeconds();
  var ss=SpreadsheetApp.openByUrl(url);
  var ws =ss.getSheetByName("บันทึกคิดค่าบริการ");
  ws.appendRow([new Date(),nombre,direccion,celular,pedido,total]);
  return "บันทึกคิดค่าบริการเรียบร้อยแล้ว";
  
}

function categoryLoad(){

  Logger.log("Funcion Categoria : la fecha y hora: " + new Date());
  
  var result={};
 var ss=SpreadsheetApp.openByUrl(url);
 var sheet =ss.getSheetByName("หมวดหมู่บริการ");
 var jo = {};
  var dataArray = [];
// collecting data from 2nd Row , 1st column to last row and last column
  var rows = sheet.getRange(2,1,sheet.getLastRow()-1, sheet.getLastColumn()).getValues();
  
  for(var i = 0, l= rows.length; i<l ; i++){
    var dataRow = rows[i];
    var record = {};
    record['id'] = dataRow[0];
    record['categoria'] = dataRow[1];
    dataArray.push(record);    
  }  
  
  jo.user = dataArray;
  var result = JSON.stringify(jo); 
  return result;
//  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
  
}


function productLoad(){

  Logger.log("Funcion productLoad : la fecha y hora: " + new Date());
  
  var result={};
 var ss=SpreadsheetApp.openByUrl(url);
 var sheet =ss.getSheetByName("รายการสินค้า");
 var jo = {};
  var dataArray = [];
// collecting data from 2nd Row , 1st column to last row and last column
  var rows = sheet.getRange(2,1,sheet.getLastRow()-1, sheet.getLastColumn()).getValues();
  
  for(var i = 0, l= rows.length; i<l ; i++){
    var dataRow = rows[i];
    var record = {};
    record['id'] = dataRow[0];
    record['producto'] = dataRow[1];
    record['precio'] = dataRow[2];
    record['medida'] = dataRow[3];
    record['stock'] = dataRow[4];
    record['imagen'] = dataRow[5];
    record['descripcion'] = dataRow[6];
    record['categoria'] = dataRow[7];
    dataArray.push(record);    
  }  
  
  jo.user = dataArray;
  var result = JSON.stringify(jo); 
  return result;
//  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
  
}

 
