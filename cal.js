function appendValue(val) {
    document.getElementById('display').value +=val;

}
function clearDisplay() {
    document.getElementById('display').value= "";
 
}
function deleteLast(){
    let display=document.getElementById("display");
    display.value = display.value.slice(0,-1);
}
function calculateResult(){
    try{
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value=result;

    }
    catch{
        document.getElementById("display").value='error';

    }
}
    