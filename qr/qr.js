const redirects = {
    default: 'https://docs.google.com/forms/d/e/1FAIpQLSfEc7ssOZc5xYvIeenYohQWlzJV_dpVzGNmkbdpvnIKHOq8gw/viewform'
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const poster = urlParams.get('poster')

const redirect = redirects.default
if (poster && redirects[poster]) redirect = (redirects[poster])

function link() {
  document.getElementById('link').href = redirect;
}


const Http = new XMLHttpRequest();
const url=`https://poster-club-qr.loca.lt/`;

Http.open("POST", url);
Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
Http.send(JSON.stringify({ "poster": poster}));

Http.onreadystatechange = (e) => {
  console.log(e.currentTarget.status)

  window.location.replace(redirect)
}

