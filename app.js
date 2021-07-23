// Enter button event handeler
const loginBtn = document.getElementById('login')
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById("login-area")
    loginArea.style.display = 'none'
    const transactinArea = document.getElementById('transaction-area')
    transactinArea.style.display = 'block'
})

function updateSpan(id, depositNum) {
    const current = document.getElementById(id).innerText
    const currentNum = parseFloat(current)
    const total = currentNum + depositNum
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
    
    
    document.getElementById('withdrawAmount').value = ''
})