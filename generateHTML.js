const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

function generateHTML(data) {
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://kit.fontawesome.com/587cb420b5.js" crossorigin="anonymous"></script>
      <title>Dev Profile Generator</title>
    </head>
      <style>
          @page {
            margin: 0;
          }
         *,
         *::after,
         *::before {
         box-sizing: border-box;
         }
         html, body {
         padding: 0;
         margin: 0;
         }
         html, body, .wrapper {
         height: 100%;
         }
         .wrapper {
         background-color: ${colors[data.color].wrapperBackground};
         padding-top: 100px;
         }
         footer {
          background-color: ${colors[data.color].wrapperBackground};
         }
         body {
         background-color: white;
         -webkit-print-color-adjust: exact !important;
         font-family: 'Cabin', sans-serif;
         }
         main {
         background-color: #E9EDEE;
         height: auto;
         padding-top: 30px;
         }
         h1, h2, h3, h4, h5, h6 {
         font-family: 'BioRhyme', serif;
         margin: 0;
         }
         h1 {
         font-size: 3em;
         }
         h2 {
         font-size: 2.5em;
         }
         h3 {
         font-size: 2em;
         }
         h4 {
         font-size: 1.5em;
         }
         h5 {
         font-size: 1.3em;
         }
         h6 {
         font-size: 1.2em;
         }
         .photo-header {
         position: relative;
         margin: 0 auto;
         margin-bottom: -50px;
         display: flex;
         justify-content: center;
         flex-wrap: wrap;
         background-color: ${colors[data.color].headerBackground};
         color: ${colors[data.color].headerColor};
         padding: 10px;
         width: 95%;
         border-radius: 6px;
         }
         .photo-header img {
         width: 250px;
         height: 250px;
         border-radius: 50%;
         object-fit: cover;
         margin-top: -75px;
         border: 6px solid ${colors[data.color].photoBorderColor};
         box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
         }
         .photo-header h1, .photo-header h2 {
         width: 100%;
         text-align: center;
         }
         .photo-header h1 {
         margin-top: 10px;
         }
         .links-nav {
         width: 100%;
         text-align: center;
         padding: 20px 0;
         font-size: 1.1em;
         }
         .nav-link {
         display: inline-block;
         margin: 5px 10px;
         }
         .workExp-date {
         font-style: italic;
         font-size: .7em;
         text-align: right;
         margin-top: 10px;
         }
         .container {
         padding: 50px;
         padding-left: 100px;
         padding-right: 100px;
         }

         .row {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 20px;
           margin-bottom: 20px;
         }

         .card {
           padding: 20px;
           border-radius: 6px;
           background-color: ${colors[data.color].headerBackground};
           color: ${colors[data.color].headerColor};
           margin: 20px;
         }
         
         .col {
         flex: 1;
         text-align: center;
         }

         a, a:hover {
         text-decoration: none;
         color: inherit;
         font-weight: bold;
         }

         @media print { 
          body { 
            zoom: .75; 
          } 
         }
      </style>
      <body>
        <section class="content">
          <div class="wrapper">
              <div class="photo-header">
                  <div class="container d-flex justify-content-center">
                    <img src="${data.avatar_url}" alt="">
                  </div>
                  <div>
                    <h1>Hi!</h1>
                    <h1>My name is ${data.name}.</h1>
                    <h2>Currently @ ${data.company}</h2>
                  </div>
                  <div class="links-nav container">
                      <div class="nav-link">
                          <a href="https://www.google.com/maps/place/${data.location}">
                              <i class="fas fa-location-arrow"> ${data.location}</i>
                          </a>
                      </div>
                      <div class="nav-link">
                          <a href="${data.html_url}">
                              <i class="fab fa-github"> Github</i>
                          </a>
                      </div>
                      <div class="nav-link">   
                          <a href="${data.blog}">
                              <i class="fas fa-rss"> Blog</i>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="container">
              <div class="row justify-content-center">
                  <div class="col-sm-8">
                      <h6>${data.bio}</h6>
                  </div>
              </div>
              <div class="row justify-content-center">
                  <div class="col card">
                      Public Repositories
                      <br>
                      ${data.public_repos}
                  </div >
                  <div class="col card">
                      Followers
                      <br>
                      ${data.followers}
                  </div>
              </div>
              <div class="row justify-content-center">
                  <div class="col card">
                      Github Stars
                      <br>
                      ${data.stars}
                  </div>
                  <div class="col card">
                      Following
                      <br>
                      ${data.following}
                  </div>
              </div>
              </div>
          </div>
          <footer class="footer sticky-bottom">
              <div class="wrapper">
              </div>
          </footer>
        </section >
      
      </body>
</html>`
}

module.exports = generateHTML;