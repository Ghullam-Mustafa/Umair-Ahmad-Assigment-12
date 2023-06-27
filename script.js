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



// var user = {
//     firstName : "Ghullam",
//     lastName : "Mustafa",
//     city : "Faisalabad",
//     age : 19 ,
// }
// console.log(user.firstName);

// var paragraph = document.getElementsByTagName("p");

//             console.log(paragraph[0].innerHTML);

var newParagraph = document.createElement('p')

console.log(newParagraph);
var newText = document.createTextNode("Hellow!")
newParagraph.appendChild(newText)
console.log(newText);
document.getElementById('abc').appendChild(newParagraph)

newParagraph.setAttribute("class","red")
newParagraph.className += " red"
document.getElementById('abc').appendChild(newParagraph)


// for (let index = 0; index < elements.length; index++) {
//     const element = elements[index];
//     console.log(element.innerHTML);
// }
