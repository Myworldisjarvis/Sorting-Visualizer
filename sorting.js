export let x = 40;
document.getElementById('btn-range').addEventListener('click',()=>{
    x = document.getElementById('btn-range').value;
    maker(x);
});
function maker(x){
    document.getElementById('main-box').innerHTML = `<div></div>`;
    console.log('size of array is '+ x);
    for (let i = 0; i < x; i++) {
        let r = Math.floor((Math.random() * 400) + 1);
        document.getElementById('main-box').innerHTML += `<div id='box-${i}' class='box'></div>`;
        document.getElementById(`box-${i}`).style.height = r+'px';
    }
}
maker(x);

export let y = 10;
document.getElementById('btn-time').addEventListener('click',()=>{
    y = document.getElementById('btn-time').value;
    y = 21 - y;
    console.log(y*.02+' second');
});
export async function sleep(second) {
    return new Promise((resolve) => setTimeout(resolve, second * 1000));
}

//this is new array button setting
document.getElementById('resate').addEventListener('click',()=>{
    maker(x);
});
export function disableButton(){
    document.getElementById('resate').disabled = true;
    document.getElementById('merge-sort').disabled = true;
    document.getElementById('btn-range').disabled = true;
    document.getElementById('bubble-sort').disabled = true;
    document.getElementById('selection-sort').disabled = true;
    document.getElementById('insertion-sort').disabled = true;
    document.getElementById('quick-sort').disabled = true;
}
export function enableButton(){
    document.getElementById('resate').disabled = false;
    document.getElementById('merge-sort').disabled = false;
    document.getElementById('btn-range').disabled = false;
    document.getElementById('bubble-sort').disabled = false;
    document.getElementById('selection-sort').disabled = false;
    document.getElementById('insertion-sort').disabled = false;
    document.getElementById('quick-sort').disabled = false;
}

//creating a swap method for elements 

export function swap(ele, i, j){
    let x = ele[i].style.height;
    ele[i].style.height = ele[j].style.height;
    ele[j].style.height = x;
}