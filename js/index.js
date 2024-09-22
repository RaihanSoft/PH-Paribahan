let btns = document.querySelectorAll('.btn-normal')
let count = 0 
let countLeft = 40
const selectedSeatListing = document.getElementById('selectedSeatListing')
for(const btn of btns){
    
    btn.addEventListener('click', function(){
        const btnNormal = btn.innerText
        document.getElementById('noSeatSelectedEl').classList.add('hidden')


        

        // !count 
        const seatCount = document.getElementById('seatCount')
        count++
       let co =  seatCount.innerText=count  

        // !count end

        
        if(co > 4){
            alert("Maximum Seat Selected")
            return
             
           
        }


        // !!seal left 

        const seatLeftCount = document.getElementById('seatLeftCount')
        countLeft--
        seatLeftCount.innerText = countLeft
        // !seal left  end


        const pTag = document.createElement('p')
        pTag.classList.add('flex', 'justify-between')

      pTag.innerHTML =
       `
      <span> ${btnNormal}</span>
      <span> Economy</span>
      <span> 500 Taka</span>
      
      `

        selectedSeatListing.appendChild(pTag)




    })




}