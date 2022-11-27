const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

async function calculate() {
	const currency_one = currencyEl_one.value;
	const currency_two = currencyEl_two.value;

	const res = await fetch('https://open.exchangerate-api.com/v6/latest');
	const data = await res.json();
	console.log(data);

	const rate = data.rates[currency_two] / data.rates[currency_one];
	rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
	amountEl_two.value = (amountEl_one.value * (rate)).toFixed(2);
}
calculate();

currencyEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
amountEl_two.addEventListener('input', calculate);

// currencyEl_one.onchange = calculate;
// currencyEl_two.onchange = calculate;
// amountEl_one.oninput = calculate;
// amountEl_two.oninput = calculate;

//swap.onclick = 
swap.addEventListener('click', () => {
	const temp = currencyEl_one.value;
	currencyEl_one.value = currencyEl_two.value;
	currencyEl_two.value = temp;
	//[currencyEl_one.value, currencyEl_two.value] = [currencyEl_two.value, currencyEl_one.value];
});


