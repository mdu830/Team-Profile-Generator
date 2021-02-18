const renderManager = manager => {
    return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title">${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNum()}</li>
                </ul>
            </div>
        </div>
    `;
};

const renderEngineer = engineer => {
    return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title">${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
                </ul>
            </div>
        </div>
    `;
};

const renderIntern = intern => {
    return `
        <div class="card">
            <div class="card-header">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title">${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()} </li>
                </ul>
            </div>
        </div>
    `;
};

const renderTeam = employees => {
  const html = [];
  
  const managers = employees.filter(employee => employee.getRole() === "Manager");
  const engineers = employees.filter(employee => employee.getRole() === "Engineer");
  const interns = employees.filter(employee => employee.getRole() === "Intern");

  const managersHtml = managers.map(mgr => renderManager(mgr));
  const engineersHtml = engineers.map(eng => renderEngineer(eng));
  const internsHtml = interns.map(int => renderIntern(int));

  html.push(managersHtml.join(""));
  html.push(engineersHtml.join(""));
  html.push(internsHtml.join(""));

  return html.join("");
}

const renderPage = employees => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Team Profile</title>
        <meta charset="UTF-8"/>
            <!-- media queries -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
            <!-- google fonts -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Days+One&display=swap" rel="stylesheet">
            <!-- bootstrap -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
            <!-- jQuery -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <style>
          #appendCards {
            max-width: 1000px;
            margin: 3em auto;
            flex-wrap: wrap;
          }
          .card {
            margin: 1em;
            max-width: 280px;
            width: 90%;
            min-height: 22rem;
            background-color: #007bff;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.7);
            border: none;
          }
          .card-body {
            display: flex;
            flex-direction: column;s
            justify-content: center;
            background-color: #f6f7f8;
          }

          .list-group-item {
            color: #000000;
            text-decoration: none;
          }
        </style>
    </head>

    <body style="background-image: url(../images/background.jpg); background-size: auto;">
        <!-- Title bar -->
        <nav class="navbar navbar-bg navbar bg-dark" style="border-bottom: thistle 3px solid;">
            <div class="container-fluid justify-content-center">
              <span id="title" class="navbar m-3 mb-0 h1" style="color: white; font-family: 'Days One';">Team Profile</span>
            </div>
        </nav>

        <article class="media-body">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h2 class="m-3" style="color: white; text-align: center;">My Team:</h2>
                    </div>
                </div>
                <div class="row" id="appendCards">
                  ${renderTeam(employees)}                     
                </div>
            </div>
        </article>

        <!-- sticky footer -->
        <footer class="navbar bg-dark fixed-bottom ">
            <div class="container d-flex justify-content-center">
                <span class="text-muted"> &#169; Mitchell Duncan 2020</span>
              </div>
        </footer>
    </body>
</html>`;
}

module.exports = renderPage;
