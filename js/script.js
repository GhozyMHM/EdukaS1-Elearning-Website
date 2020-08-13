new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    continuousVertical: true,
})

if (screen && screen.width > 991) {
    document.write('<script type="text/javascript" src="fullpage.js"><\/script>');
}

$(document).ready(function () {
    $('#fullpage').fullpage();
});