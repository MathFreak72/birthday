if(sessionStorage.getItem('birthdayAuth')!=='yes'){location.replace('index.html');}const h=document.getElementById('candles');for(let i=0;i<2;i++){let c=document.createElement('div');c.className='candle';let f=document.createElement('div');f.className='flame';c.appendChild(f);h.appendChild(c);}

const colors=['#ff4d6d','#ffd93d','#6bcB77','#4d96ff','#ff8fab','#9d4edd'];

for(let i=0;i<150;i++)
{
    let d=document.createElement('div');
    d.className='confetti';
    d.style.left=Math.random()*100+'vw';
    d.style.background=colors[Math.floor(Math.random()*colors.length)];
    d.style.animationDuration=(Math.random()*4+3)+'s';
    d.style.animationDelay=(Math.random()*5)+'s';
    document.body.appendChild(d);
}