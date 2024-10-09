const cal = () => {
    let wb = document.getElementById('wb').value;
    let math = document.getElementById('math').value;
    let ch = document.getElementById('ch').value;
    let eco = document.getElementById('eco').value;
    let grade ="";
    
    const total = parseFloat(wb)+parseFloat(math)+parseFloat(ch)+parseFloat(eco);
    const perc = (total/400)*100;
    if(perc<=100 && perc>90){
        grade ="A";
    }
    else if(perc<=90 && perc>80){
        grade = "B";
    }
    else if(perc<=80  && perc>70){
        grade = "C"
    }
    else if(perc<=70 && perc>=33){
        grade ="F";
    }
    else{
        grade = "F";
    }
    
    document.getElementById('showdata').innerHTML = `Your mark out of 400 is ${total} with  %  is ${perc.toFixed(2)} and 
    <br>
    your grade is ${grade}`
}