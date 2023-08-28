import { x, y, sleep, disableButton, enableButton, swap } from "/sorting/sorting.js";
document.getElementById('bubble-sort').addEventListener('click',async ()=>{
    disableButton();
    let ele = document.querySelectorAll('.box');
    await bubbleSort(ele);
    enableButton();
});
async function bubbleSort(ele){
    for(let i = 0; i < x; i++){
        for (let j = 0; j < x - i - 1; j++) {
            let h1 = parseInt(ele[j].style.height)
            let h2 = parseInt(ele[j+1].style.height)
            ele[j].style.backgroundColor = 'blue';
            ele[j+1].style.backgroundColor = 'blue';
            await sleep(.01*y);

            if (h1 <= h2)
                ele[j].style.backgroundColor = 'aqua';
            else{
                ele[j].style.backgroundColor = 'aqua';
                swap(ele, j, j+1); 
            }
        }
        ele[x - i - 1].style.backgroundColor = 'green';
    }
}