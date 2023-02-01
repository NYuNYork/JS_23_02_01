function TTI_name(eredmeny){
    if(eredmeny<16)
    {
        szoveg = "súlyosan sovány";
    }
    else if(eredmeny<16.99)
    {
        szoveg = "Mérsékelten sovány";
    }
    else if(eredmeny < 18.49)
    {
        szoveg = "Enyhén sovány" ;
    }
    else if(eredmeny < 24.99)
    {
        szoveg = "Normális testsúly" ;
    }
    else if(eredmeny < 29.99)
    {
        szoveg = "túlsúlyos" ;
    }
    else if(eredmeny < 34.99)
    {
        szoveg = "I. fokú elhízás" ;
    }
    else if(eredmeny < 34.99)
    {
        szoveg = "I. fokú elhízás" ;
    }
    else if(eredmeny < 39.99)
    {
        szoveg = "II. fokú elhízás" ;
    }
    else
    {
        szoveg = "III. fokú elhízás" ;
    }
    return szoveg;
}

function TTI_pic(szoveg)
{
    let feliratok = ["súlyosan sovány","Mérsékelten sovány","Enyhén sovány","Normális testsúly","túlsúlyos","I. fokú elhízás","II. fokú elhízás","III. fokú elhízás"]; 
    let sorszam = feliratok.indexOf(szoveg);
    return sorszam;
}

function TTI()
{
    let kg = document.getElementById("kg").value;
    let cm = document.getElementById("cm").value;
    let magassag = cm/100;
    let eredmeny = kg / (magassag*magassag);
    eredmeny=eredmeny.toFixed(2);
    document.getElementById("eredmeny").innerHTML;
    let szoveg = TTI_name(eredmeny);
    let sorszam = TTI_pic(szoveg);
    document.getElementById("eredmeny").innerHTML = "Az ön TTI indexe: "+eredmeny+" - "+szoveg;
    document.getElementById("pic").src = "img/"+sorszam+".jpg";
    document.getElementById("pic").alt = sorszam+".jpg";
    document.getElementById("pic").title = szoveg;
}

