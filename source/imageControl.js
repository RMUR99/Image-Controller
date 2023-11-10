const inputs = document.querySelectorAll('.container input') 


// to follow up with the updates you need a funciton of handle update

function handleUpdate(){

    //why 
    const suffix = this.dataset.sizing || '';
   
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input=> input.addEventListener('change' , handleUpdate))
//drag change was not listening to you wrote the below line 
inputs.forEach(input => input.addEventListener('mousemove' , handleUpdate))
