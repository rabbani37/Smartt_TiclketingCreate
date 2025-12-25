


const allSeat = document.querySelectorAll(".seat1");
let setNo = 1
let leftSeat1 = 40
let countSeat = 0
let totalPrice = 0
for (const seat of allSeat) {


    seat.addEventListener("click", function (event) {
        // console.log(event)

        const seatName = seat.innerText;
        const seatPrice = 550;
        const seatContainer = getElement_Id("seatContainer");
        const div = document.createElement("div");
        div.innerHTML = `
         <div class="flex justify-between items-center text-gray-500">
            <p class="font-medium">${setNo}. ${seatName}</p>
            <p class="font-medium">Economy</p>
            <p class="font-medium">${seatPrice}</p>
         </div>
        
        `;
        seatContainer.appendChild(div);
        setNo++;
        addBackground(seat);




        leftSeat1--;
        countSeat++;
        showNumberScreen("leftSeat", leftSeat1);
        showNumberScreen("countSeat", countSeat);
        totalPrice += seatPrice;
        showNumberScreen("totalPrice", totalPrice)
        showNumberScreen("total", totalPrice);


    })

    // if(seat.disabled){
    //     alert(" Your seat has disabled for Used coupon  ")
    // }

}



// apply button function all
const applyButton = getElement_Id("apply")
applyButton.addEventListener('click', applyButtonFuc)

function applyButtonFuc() {
    const conditionFor15 = 1650;
    const conditionFor20 = 2750;

    const couponField = getElement_Id("couponField")
    const getCouponCode = getElement_Id("couponCode").value.toLowerCase()

    if (getCouponCode === "new15") {
        // console.log(getCouponCode)
        if (totalPrice >= conditionFor15) {
            // 15% discount
            if (totalPrice < conditionFor20) {
                const discount = totalPrice * 15 / 100;
                const payAmount = Math.round(totalPrice - discount);
                showNumberScreen("total", payAmount);
                addHidden(couponField)
                // console.log(getCouponCode, "15%")
            } else if (totalPrice >= conditionFor20) {
                alert("You are eligible for 20% discount. Please use another coupon.");
            } else {
                alert("Minimum 1650 needed for 15% discount")
            }

        }


    }
    else if (getCouponCode === "couple20") {
        if (totalPrice >= conditionFor20) {
            // 20% discount
            const discount = totalPrice * 20 / 100;
            const payAmount = Math.round(totalPrice - discount);
            showNumberScreen("total", payAmount);
            addHidden(couponField)
            console.log(getCouponCode, "20%")
        } else {
            // showNumberScreen("total", totalPrice);
            alert("Minimum 2750 needed for 20% discount")
        }
    }
    else {

        alert("Please provide a valid coupon code")
    }


}



// utility function
function getElement_Id(elementId) {
    const element = document.getElementById(elementId);
    return element;
}
function addBackground(element) {
    element.classList.add("bg-green-500")

}
function showNumberScreen(elementId, result) {
    const element = document.getElementById(elementId);
    element.innerText = result;
}
function addHidden(element) {
    element.setAttribute("hidden", true);
    disableButton()
}
function disableButton() {
    const allSeat2 = document.querySelectorAll(".seat1")
    for (const button of allSeat2) {
        button.disabled = true;
        button.style.cursor = "not-allowed";
    }
}







//---------------------------------------------------------------------------



