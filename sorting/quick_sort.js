import { x, y, sleep, disableButton, enableButton, swap} from "/sorting/sorting.js";
let ele;
document.getElementById('quick-sort').addEventListener('click',async () => {
    disableButton();
    ele = document.querySelectorAll('.box');
    await quickSort(0, x - 1);
    enableButton();
});

async function quickSort(low, high) {
    if (low < high) {
        let pivot = await partition(low, high);
        await quickSort(low, pivot - 1);
        await quickSort(pivot + 1, high);
    }
    else if(low >= 0 && high >= 0 && low < x && high < x){
        await sleep(0.02*y);
        ele[low].style.backgroundColor = 'green';
        ele[high].style.backgroundColor = 'green';
    }
}

async function partition(low, high) {
    let pivot = parseInt(ele[high].style.height);
    ele[high].style.backgroundColor = 'blue'
    let i = low - 1;
    for(let j = low; j < high; j++){
        let arrj = parseInt(ele[j].style.height)
        ele[j].style.backgroundColor = 'red';
        await sleep(.02*y);
        if(arrj < pivot){
            i++;
            swap(ele, i, j);
            ele[i].style.backgroundColor = 'pink'
            ele[j].style.backgroundColor = 'violet';
        }
        else
            ele[j].style.backgroundColor = 'gray';
    }
    swap(ele, i+1, high);
    ele[i+1].style.backgroundColor = 'green'
    return (i+1);
}