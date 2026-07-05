function moveButton() {
    var x = Math.random() * (window.innerWidth - 100);
    var y = Math.random() * (window.innerHeight - 100);
    var btn = document.getElementById('noBtn');
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function showLoading() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('loading').style.display = 'block';
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
        document.body.innerHTML = `
            <div style="text-align:center; margin-top:100px;">
                <img src="final.gif" style="width:300px; border-radius:20px;">
                <h1>I knew it 😍!</h1>
            </div>
        `;
    }, 2000); 
}