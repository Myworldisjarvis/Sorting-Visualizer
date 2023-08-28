import { x, y, sleep, disableButton, enableButton } from "/sorting/sorting.js";

async function mergeSort(ele, low, high){
    if(low < high){
        let mid =  Math.floor((low + high)/2);
        await mergeSort(ele, low,mid);
        await mergeSort(ele, mid+1,high);
        await merge(ele, low,mid,high);
    }
}
async function merge(ele, low, mid, high){
    let i = low, j = mid+1;
    let arr = [];
    while(i <= mid && j <= high){
        let h1 = parseInt(ele[i].style.height)
        let h2 = parseInt(ele[j].style.height)
        ele[i].style.backgroundColor = 'blue';
        ele[j].style.backgroundColor = 'red';
        await sleep(.02*y);

        if(h1 <= h2){
            arr.push(h1);
            i++;
        }
        else{
            arr.push(h2);
            j++;
        }
    }
    while(i <= mid){
        let h1 = parseInt(ele[i].style.height)
        ele[i].style.backgroundColor = 'blue';
        arr.push(h1);
        i++;
    }
    while(j <= high){
        let h2 = parseInt(ele[j].style.height)
        arr.push(h2);
        ele[j].style.backgroundColor = 'red';
        j++;
    }
    for (let k = 0; k < arr.length; k++) {
        ele[k+low].style.height = arr[k]+'px';
        await sleep(.02*y);
        if (high == x-1 && low == 0)
            ele[k+low].style.backgroundColor = 'green';
        else ele[k+low].style.backgroundColor = 'gray';
    }
}

document.getElementById('merge-sort').addEventListener('click',async ()=>{
    disableButton();
    let ele = document.querySelectorAll('.box');
    await mergeSort(ele,0,x-1);
    enableButton();
})