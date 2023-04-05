console.log(global);
nbr = 0;
min = 0;
h = 0;
setInterval(() => {
    console.log("Cela fait "+h+" heure(s) et "+min+" minute(s) et "+nbr+" secondes");
    nbr++
    if (nbr==60){
        nbr=0;
        min++
    } if (min==60) {
     min=0;
     h++   
    }
}, 1000);