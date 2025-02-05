const button=document.getElementById('check-btn');



button.addEventListener('click',function(){
    let str=document.getElementById('text-input').value;
    let input=str.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    console.log(input);
    event.preventDefault();
    if(input===''){
        alert('Please input value');
    }
    let flag=1;
    for(let i=0;i<input.length;i++){
        if(input[i]!=input[input.length-i-1]){
            document.getElementById('result').textContent=`${str} is not a palindrome`;
            flag=0;
            break;
        }
        
    }
    if(flag===1){
        document.getElementById('result').textContent=`${str} is a palindrome`;
        
    }
})

