var dbt = window.document.getElementById("downloadButton");
if(!!dbt){
    var cts = document.getElementById("contents");
    if(!!cts) cts.innerHTML = dbt.name;
    alert(dbt.name);
}else{
    alert("not found!");
}

