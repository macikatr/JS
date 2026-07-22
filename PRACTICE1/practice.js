const allParas = document.querySelectorAll('p');
allParas.forEach(para => {
    if (para.innerText.includes('error')) { 
        //innerText contains visible text but textContent contails also hidden text
        // para.textContent.includes('error'); <p>lorem <span style="display:none">error</span> ipsum</p>
        // in that case textContent is the best option
        para.classList.add('error');
    }
    else if (para.innerText.includes('success')) {
        para.classList.add('success');
    }
    else {
        para.classList.add('info');
    }
});

const title = document.querySelector('#page-title');
title.classList.toggle('success');// adds success class
title.classList.toggle('success'); // removes success class (toggle)
