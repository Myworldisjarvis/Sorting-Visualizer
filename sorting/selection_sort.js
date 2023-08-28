import { x, y, sleep, disableButton, enableButton, swap} from "/sorting/sorting.js";
document.getElementById('selection-sort').addEventListener('click',async ()=>{
    disableButton();
    let ele = document.querySelectorAll('.box');
    await selectionSort(ele);
    enableButton();
});
async function selectionSort(ele){
    for(let i = 0; i < x ; i++){
        let min_index = i;
        ele[i].style.backgroundColor = 'blue'
        for (let j = i+1; j < x; j++) {
            let h1 = parseInt(ele[j].style.height)
            let h2 = parseInt(ele[min_index].style.height)
            ele[j].style.backgroundColor = 'orange';
            await sleep(.02*y);

            if (h1 < h2) {
                if(i !== min_index)
                    ele[min_index].style.backgroundColor = 'aqua';
                min_index = j;
            }
            else
                ele[j].style.backgroundColor = 'aqua';
        }
        if(min_index != i)
            swap(ele, i, min_index);
        ele[i].style.backgroundColor = 'green';
        ele[min_index].style.backgroundColor = 'aqua';
    }
}