const redirects = {
    default: 'https://docs.google.com/forms/d/e/1FAIpQLSfEc7ssOZc5xYvIeenYohQWlzJV_dpVzGNmkbdpvnIKHOq8gw/viewform'
}

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const poster = urlParams.get('poster')

const Http = new XMLHttpRequest();
const url='http://18.116.35.186:58008/';
Http.open("POST", url);
Http.send('poster=' + poster);

Http.onreadystatechange = (e) => {
  console.log(e.currentTarget.status)
}

// if (poster && redirects[poster]) window.location.replace(redirects[poster])
// else window.location.replace(redirects.default)
