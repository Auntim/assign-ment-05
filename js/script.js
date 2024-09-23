document.getElementById('doante-now').addEventListener('click',function(event){
    // console.log('connted');
    event.preventDefault();
    const addMoney = document.getElementById('add-money').innerText;

    const taotalMoney = document.getElementById('total-balance').innerText;
    // console.log(taotalMoney);
    const totalMoney = parseFloat(taotalMoney);
    // console.log(totalMoney);

    const donationMoney = document.getElementById('amount-donation').value;
    // console.log(donationMoney);
    const donateMoney = parseFloat(donationMoney);

    const donation = donateMoney + totalMoney;
    console.log(donation);



})