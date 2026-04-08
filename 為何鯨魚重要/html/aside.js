const backButton = document.getElementById('backButton');
const sidebar = document.getElementById('sidebar');
const tri = document.getElementById('backtri');

backButton.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    tri.classList.toggle('collapseds');

});

const videos = document.querySelectorAll('.video');
        const playVideo = document.getElementById('playVideo');
        const closeButton = document.getElementById('closeButton');
        const iframeContainer = document.getElementById('iframeContainer');

        videos.forEach(video => {
            video.addEventListener('click', () => {
                const iframe = video.querySelector('iframe');
                iframeContainer.innerHTML = '';
                iframeContainer.appendChild(iframe.cloneNode(true));
                playVideo.classList.add('active');
            });
        });

        closeButton.addEventListener('click', () => {
            playVideo.classList.remove('active');
            iframeContainer.innerHTML = '';
        });