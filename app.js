// Enter button event handeler
const loginBtn = document.getElementById('login')
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById("login-area")
    loginArea.style.display = 'none'
    const transactinArea = document.getElementById('transaction-area')
    transactinArea.style.display = 'block'
})

function updateSpan(id, amount) {
    const current = document.getElementById(id).innerText
    const currentNum = parseFloat(current)
    // let total = 0;
    // if (addOrSubs == 'add') {
    //     total =  currentNum + amount
    // } else if (addOrSubs == 'sub') {
    //     total = currentNum - amount
    // } else {
    //     alert('Please mention deposit or withdraw')
    // }
    // document.getElementById(id).innerText = Math.abs(total)
    const total = currentNum + amount;

    document.getElementById(id).innerText = total
}

function getInput(id) {
    const amount = document.getElementById(id).value
    const num = parseFloat(amount)
    return num;
}

// Deposit button event handeler
const depositBtn = document.getElementById('addDeposit')
depositBtn.addEventListener('click', function(){
    const depositNum = getInput('depositAmount')

    updateSpan('currentDeposit', depositNum)
    updateSpan('currentBalance', depositNum)

    document.getElementById('depositAmount').value = ''
})

// Withdraw button event handeler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function(){
    const withdrawNum = getInput('withdrawAmount')
    
    updateSpan('currentWithdraw', withdrawNum)
    updateSpan('currentBalance', -1 * withdrawNum)

    document.getElementById('withdrawAmount').value = ''
})