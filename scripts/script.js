// document.getElementsByClassName("seatname").addEventListener("click", function(e){

//     console.log("boss")
// })

// function handleClick(event){
//  console.log(event.target.parentNode.childNodes[1].innerText);
// }

const allbtn = document.getElementsByClassName("seatname")
let count = 0
for (btnn of allbtn){
    btnn.addEventListener("click", function(e){

        if (count>=4){
            return limited
        }
        count = count + 1;
    
    const seat = btnn.innerText;
    const className = 'Ecomomy';
    const unitPrice = '550';
    const selectedContainer= document.getElementById("seat-container");

    const li = document.createElement("li")  
    const p = document.createElement("p") 
    p.innerText =  seat
    const p2 = document.createElement("p") 
    p2.innerText =  className
    const p3 = document.createElement("p") 
    p3.innerText =  unitPrice 

    li.appendChild(p)
    li.appendChild(p2)
    li.appendChild(p3)
    selectedContainer.appendChild(li)

    const totalCost= document.getElementById("total-price").innerText;
    const convertedTotalCost = parseInt(totalCost)
    const sum = convertedTotalCost + parseInt(unitPrice)

    document.getElementById("total-price").innerText = sum 
    setInnerText("total-price", sum);


    const grandTotal = document.getElementById('grand-price').innerText;
    const convertedGrandTotal = parseInt(grandTotal)
    const sum2 =  sum

    setInnerText('grand-price', sum2)
    const totalSeat = document.getElementById("total-seat").innerText;
    const convertedTotalSeat = parseInt(totalSeat);
    const seatLeft = convertedTotalSeat - 1;
    setInnerText("total-seat", seatLeft);















      setInnerText('seat-booked', count)

    })
}

function setInnerText(id, value){
    document.getElementById(id).innerText = value

}