let btns = document.querySelectorAll('.btn-normal')
const selectedSeatListing = document.getElementById('selectedSeatListing')
for(const btn of btns){
    
    btn.addEventListener('click', function(){
        const btnNormal = btn.innerText
        document.getElementById('noSeatSelectedEl').classList.add('hidden')


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