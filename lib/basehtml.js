module.exports = `<!DOCTYPE html>

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