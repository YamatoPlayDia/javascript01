document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-button');
    const fortuneContent = document.getElementById('fortune-content');
    const title = document.getElementById('title');

    startButton.addEventListener('click', function() {
        startButton.style.display = 'none';
        fortuneContent.style.display = 'block';
        title.style.display = 'none'; // title要素を非表示にする
        $('.first-view').removeClass('m-0');
        $('#scene1').fadeIn(1000)
        setTimeout(() => {
            $('#scene1').fadeOut(1000)
        }, 1500);
        setTimeout(() => {
            $('#scene2').fadeIn(1000)
        }, 3000);
        setTimeout(() => {
            $('#scene2').fadeOut(1000)
        }, 4500);
        setTimeout(() => {
            $('#scene3').fadeIn(1000)
        }, 6000);
        setTimeout(() => {
            $('#scene3').fadeOut(1000)
        }, 7500);
        setTimeout(() => {
            $('#scene4').fadeIn(1000)
        }, 9000);
        setTimeout(() => {
            $('#cards').fadeIn(1000)
            $('.selectable-fortune').fadeIn(1000)
        }, 10500);
    });
});

