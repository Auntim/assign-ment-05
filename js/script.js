const donateButton = document.getElementById('donate-now'); 
const donationInput = document.getElementById('amount-donation'); 
const addMoneyElement = document.getElementById('add-money'); 
const totalBalanceElement = document.getElementById('total-balance'); 

let totalDonatedAmount = 0;

donateButton.addEventListener('click', function () {
    let donationAmount = parseFloat(donationInput.value);
    let totalBalance = parseFloat(totalBalanceElement.innerText); 


    if (!isNaN(donationAmount) && donationAmount > 0 && donationAmount <= totalBalance) {
        totalBalance = totalBalance - donationAmount;

        totalBalanceElement.innerText = `${totalBalance}`;

        totalDonatedAmount = totalDonatedAmount + donationAmount;

        addMoneyElement.innerText = `${totalDonatedAmount} BDT`;


        document.getElementById('my_modal_1').showModal();


        // add transection history
        const div = document.createElement('div')
        // div.classList.add('bg-slate-50 border border-slate-300')
        div.innerHTML = `
        <h1 class="text-[25px] font-bold my-3 text-lime-700">${totalDonatedAmount} Taka is Donated for famine-2024 Feni,Bangladesh</h1>
        <p class="text-[16px] font-semibold opacity-70 mt-3 mb-3">Date:Tue Sep 23 2024 08-34-22 GMT +0600(Bangladesh Standard Time)</p>
        <hr>
        `

        document.getElementById('transection-container').appendChild(div);

    } 
    else {
        if (donationAmount > totalBalance) {
            alert('You do not have enough balance for this donation.');
        } else {
            alert('Please enter a valid donation amount.');
        }
    }
    document.getElementById('my_modal_2').showModal();

});


// const back = document.getElementById('blog')
// back.addEventListener('click',function(event){
//     window.location.href = './blog.html';
//     event.preventDefault();
//     // console.log('blog');
// })

function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden')
    document.getElementById('transection-section').classList.add('hidden')

    // show the section with provided id as per parameter
    document.getElementById(id).classList.remove('hidden')

}


const donationButton = document.getElementById('donation-button')
const historyButton = document.getElementById('history-button')

donationButton.addEventListener('click', function () {
    donationButton.classList.add('bg-[#b4f461]');
    donationButton.classList.remove('bg-white');

    historyButton.classList.remove('bg-[#f9f7f3]');
    historyButton.classList.add('bg-white');
})

historyButton.addEventListener('click', function () {
    historyButton.classList.add('bg-[#b2f757]');
    historyButton.classList.remove('bg-white');

    donationButton.classList.remove('bg-[#b2f757]');
    donationButton.classList.add('bg-white');
})



