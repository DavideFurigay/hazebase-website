<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
if(!isset($_SESSION["userid"])){
    header("location: /pages/login.html");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>User</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../style.css">
  </head>
  <body>
    <header>
      <!--Navigation Bar-->
      <div class="topnav">
        <a href="../index.html">Home</a>
        <a href="pages.html">Articles</a>
        <a class="active"  id = 'AccountButton' href="user.php">Account</a>
		<!--<a class="active" id = 'LoginButton' href="login.html" YOOO>Login</a>-->
      </div>
    </header>
    <article>
      <!--Username-->
      <h1 class="h1_article">Userpage</h1>
	  <form action="/pages/login.html">
        <!--div class="container">
          <button type="submit" class="registerbtn">Login</button>
        </div>
	  </form>
	  <form action="/pages/register.html">
        <div class="container">
          <button type="submit" class="registerbtn">Register</button>
        </div>
	  </form>';-->
      <form action="/php/logout.php">
        <div class="container">
          <button type="submit" class="registerbtn">Log Out</button>
        </div>
      </form>
    </article>
  </body>
</html>
