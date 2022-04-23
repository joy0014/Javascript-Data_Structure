const students=[
        [ "joy" , 6 , 9 , "four" , "male" , "bogura" , "560" ],
        [ "karim" , 2 ,10 , "five" , "male" , "sylhet" , "630" ],
        [ "rahim" , 6 , 12 , "four" , "male" , "dhaka" , "560" ],
        [ "shuvo" , 11 , 20 , "three" , "male" , "dhaka" , "480" ],
        [ "rifa" , 34, 25 , "four" , "female" , "rajshahi" , "560" ],
        [ "joynal" , 24 , 7 , "four" , "male" , "sylhet" , "560" ],
        [ "shariful" , 67 , 17 , "five" , "male" , "bogura" , "630" ],
        [ "nainai" , 34 , 27 , "six" , "male" , "joypurhat" , "650" ],
        [ "tunir" , 12 , 18, "five" , "male" , "bogura" , "630" ],
        [ "somrat" , 14 , 10 , "four" , "male" , "dhaka" , "560" ],
        [ "ohee" , 13, 27 , "three" , "female" , "joypurhat" , "480" ],
        [ "alo" , 23 , 8 , "four" , "female" , "sylhet" , "560" ],
        [ "roy" , 56 , 13 , "six" , "male" , "rajshahi" , "650" ],
        [ "salman" , 57 , 28 , "four" , "male" , "naogan" , "560" ],
        [ "sadman" , 78 , 20, "three" , "male" , "uttora" , "480" ],
        [ "pulok" , 11 , 11 , "five" , "male" , "uttora" , "630" ],
        [ "arnob" , 9 , 9, "six" , "male" , "kahalu" , "650" ],
        [ "isha" , 17 , 5 , "six" , "female" , "rangpur" , "650" ],
        [ "istiak" , 19 , 19 , "five" , "male" , "rangpur" , "630" ],
        [ "ratul" , 25 , 27 , "four" , "male" , "uttora" , "560" ],
        [ "salam" , 17 , 8 , "six" , "male" , "pabna" , "650" ],
        [ "saniha" , 18 , 12 , "five" , "female" , "khulna" , "630" ],
        [ "jesmin" , 27 , 14 , "six" , "female" , "pabna" , "650" ],
        [ "sweki" , 19 , 10 , "four" , "female" , "khulna" , "560" ],
        [ "jamil" , 20 , 29 , "five" , "male" , "bogura" , "630" ],
        [ "shohagi" , 1 , 38 , "four" , "female" , "sylhet" , "560" ],
        [ "riya" , 3 , 27 , "three" , "female" , "jashahor" , "480" ],
        [ "kalam" , 45 , 8 , "four" , "male" , "dhaka" , "560" ],
        [ "jarima" , 33 , 13 , "six" , "female" , "bogura" , "650" ],
        [ "akash" , 39 , 19 , "five" , "male" , "pabna" , "630" ],
     ] 

console.log(`1. Calculate Total Admission Fees :

`)   
     let total_amount= 0 ;
     students.sort().forEach((data,index)=>{
        console.log(`  name :${data[0]}      fees : ${data[6]} Tk `)
        total_amount += +data[6]
     })
     
     console.log(`-------------------------------------------------------------------------------------------
total amount :       ${total_amount }  Tk
       
       

`)


console.log(`................................................................................................................................................................................`)

        console.log(`2.total Female Students List :
        
        `)
        let total_famale= 0 ;
        students.sort().forEach((data,index)=>{
                if(  data[4]==="female"){
                                       console.log(`       name: ${data[0]}        gender: ${data[4]}`)
                                       total_famale = total_famale + 1;
                                        }
                                                } 
                                )

console.log(` 
------------------------------------
      total Famale     =     ${total_famale}      
  
  `)

console.log(`................................................................................................................................................................................`)
console.log(`3.Class Wise Students list `)
       // Class three students list:

 let three=0;
 console.log(`
 
 Class three students list:`)
 students.map((data,index) =>{
    if(data[3] ==="three" ){
            console.log(`name : ${data[0]}      class:  ${data[3]}`)
            three+=1;
    } 
 })
 console.log(`-----------------------------------------------
total students of class Three = ${three}
 `)


// Class four students list:
 let four=0;
 console.log(`Class Four students list: `)
 students.map((data,index) =>{
    if(data[3] ==="four" ){
            console.log(`name : ${data[0]}      class:  ${data[3]}`)
            four+=1;
    }
 })
 console.log(`-----------------------------------------------
total students of class four = ${four}
 `)



//Class three students list:
 let five=0;
 console.log(`Class Five students list:`)
 students.map((data,index) =>{
    if(data[3] ==="five" ){
            console.log(`name : ${data[0]}      class:  ${data[3]}`)
            five+=1;
    }
 })
 console.log(`-----------------------------------------------
total students of class Five = ${five}
 `)


 //Class Six students list:
 let six=0;
 console.log(`Class six students list:`)
 students.map((data,index) =>{
    if(data[3] ==="six" ){
            console.log(`name : ${data[0]}      class:  ${data[3]}`)
            six+=1;
    }
 })
 console.log(`-----------------------------------------------
total students of class Six = ${six}
 `)
console.log(`................................................................................................................................................................................`)

      console.log(`4.Location wise students List :
      
      
      `)
   //     List of bogura students :
   let bogura=0;
   console.log(`
   
   
   List of Bogura Students : `)
        students.map((data,index) =>{
           if(data[5] ==="bogura" ){
                   console.log(`name : ${data[0]}      class:  ${data[5]}`)
                   bogura+=1;
           } 
        })
        console.log(`-----------------------------------------------
   total students of Bogura = ${bogura}
        `)
       
      
    
        //      List of Dhaka students :
    let dhaka=0;
   console.log(`List of Dhaka Students : `)
        students.map((data,index) =>{
           if(data[5] ==="dhaka" ){
                   console.log(`name : ${data[0]}      class:  ${data[5]}`)
                   dhaka+=1;
           } 
        })
        console.log(`-----------------------------------------------
   total students of Dhaka = ${dhaka}
        `)
   
   
       
       //      List of Pabna students :
        let pabna=0;
   console.log(`List of Pabna Students : `)
        students.map((data,index) =>{
           if(data[5] ==="pabna" ){
                   console.log(`name : ${data[0]}      class:  ${data[5]}`)
                   pabna+=1;
           } 
        })
        console.log(`-----------------------------------------------
   total students of Pabna = ${pabna}
        `)
   
   
        //      List of Sylhet students :
   console.log(`List of Sylhet Students : `)
        let sylhet=0;
        students.map((data,index) =>{
           if(data[5] ==="sylhet" ){
                   console.log(`name : ${data[0]}      class:  ${data[5]}`)
                   sylhet+=1;
           } 
        })
        console.log(`----------------------------------------------
   total students of Sylhet = ${sylhet}
        `)
   
        
        //      List of Rajshahi students :
        let rajshahi=0;
        console.log(`List of Rajshahi Students : `)
        students.map((data,index) =>{
           if(data[5] ==="rajshahi" ){
                   console.log(`name : ${data[0]}      class:  ${data[5]}`)
                   rajshahi+=1;
           } 
        })
        console.log(`-----------------------------------------------
   total students of Rajshahi = ${rajshahi}
        `)
   
   
        //      List of Rangpur students :
        let rangpur=0;
        console.log(`List of rangpur Students : `)
        students.map((data,index) =>{
           if(data[5] ==="rangpur" ){
                   console.log(`name : ${data[0]}      class:  ${data[5]}`)
                   rangpur+=1;
           } 
        })
        console.log(`-----------------------------------------------
   total students of Rangpur = ${rangpur} 
       `)
   
   
       //      List of Uttora students :
       let uttora=0;
       console.log(`List of Uttora Students : `)
       students.map((data,index) =>{
          if(data[5] ==="uttora" ){
                  console.log(`name : ${data[0]}      class:  ${data[5]}`)
                  uttora+=1;
          } 
       })
       console.log(`-----------------------------------------------
   total students of Uttora = ${uttora} 
      `)
   
   
      //      List of Khulna students :
      let khulna=0;
      console.log(`List of Khulna Students : `)
      students.map((data,index) =>{
         if(data[5] ==="khulna" ){
                 console.log(`name : ${data[0]}      class:  ${data[5]}`)
                 khulna+=1;
         } 
      })
      console.log(`-----------------------------------------------
   total students of Khulna = ${khulna} 
     `)

console.log(`................................................................................................................................................................................`)

 // total students between 10 to 25 years
 console.log(`
 
 5.Total students between 10 to 25 years
 
 
 `)
 let number=0;
 students.map((data,index) =>{
    if(data[2] >=10 && +data[2] <= 25){
            console.log(`name : ${data[0]}      Age:  ${data[2]}`)
            number+=1;
    }
 })
 console.log(`-----------------------------------------------
total students between 10 to 25 years = ${number}
 `)