import { x, y, sleep, disableButton, enableButton } from "/sorting/sorting.js";

document.getElementById('insertion-sort').addEventListener('click',async ()=>{
    disableButton();
    let ele = document.querySelectorAll('.box');
    await insertionSort(ele);
    enableButton();
});
async function insertionSort(ele){
    let key,j,i;
    for(i = 1; i < x; i++){
        key = parseInt(ele[i].style.height)
        ele[i].style.backgroundColor = 'red';
        j = i-1;
        while(j >= 0 && parseInt(ele[j].style.height) > key){
            let h2 = parseInt(ele[j].style.height)
            ele[j+1].style.backgroundColor = 'green';
            ele[j].style.backgroundColor = 'blue';
            ele[j+1].style.height = h2+'px';
            j = j - 1;
            await sleep(.02*y);
        }
        ele[j+1].style.height = key+'px';
        ele[j+1].style.backgroundColor = 'green';
    }
}