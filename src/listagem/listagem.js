function deleteRow(elem){
    elem.closest("tr").remove();
}
function activeForm(){
    const table = document.querySelector("table");
    const form = document.getElementById("form");
    const btnedit = document.getElementById("edit");
    const btnback = document.getElementById("back");

    table.style.display="none";
    edit.style.display="none";
    form.style.display = "block"
    back.style.display = "block"
}
function desactiveForm(){
    const table = document.querySelector("table");
    const form = document.getElementById("form");
    const btnedit = document.getElementById("edit");
    const btnback = document.getElementById("back");

    table.style.display="table";
    edit.style.display="block";
    form.style.display = "none"
    back.style.display = "none"

}