function addItem() {
    let a = document.getElementById('newItemValue').value
    let b = document.getElementById('newItemText').value
    let c =document.getElementById('menu')
    c.innerHTML="<option>"+a+"</option>"+"<option>"+b+"</option>"
}