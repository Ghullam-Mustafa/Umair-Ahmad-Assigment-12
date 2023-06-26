// var elements = document.getElementsByTagName("p")
// elements[2].className += " red"
function name() {
    

    var now = new Date();
    var today = now.getDay();

    switch (today) {
        case 0:
            alert("It's sunday")
            break;
        case 1:
             alert("It's Monday")
                break;
        case 2:
            alert("It's Tuesday")
            break;
        default:
            alert('Its other day')
            
    }
}
name()










// for (let index = 0; index < elements.length; index++) {
//     const element = elements[index];
//     console.log(element.innerHTML);
// }
