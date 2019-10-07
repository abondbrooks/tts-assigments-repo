## Front-End (Lab/Homework)  --> Checkout My Personal Front-End Projects [Repo](https://github.com/azanaebondbrooks/frontend-mania-repo)
- EmojiBomb
    - [Live Demo](https://emojibombstories.netlify.com/) -  Exercise: Build a simple webpage
		- [Code Repo](https://bitbucket.org/itsjustnae/emojibomb-lab1/src/master/) - Bitbucket
- RockPaperScissors Challenge
    - [Live Demo](https://rockpaperscissorschallenge.netlify.com/) -  Exercise: Make a RockPaperScissors Game
		- [Code Repo](https://bitbucket.org/itsjustnae/rockpaperscissors-lab2/src/master/) - Bitbucket
- CSS Homework
    - [Live Demo](https://piechart.netlify.com/) -  Exercise: Build a Pie Chart
		- [Code Repo](https://bitbucket.org/itsjustnae/piechart-hw1/src/master/) - Bitbucket
    - [Live Demo](https://mastheadcss.netlify.com) - Exercise: Build Masthead
		- [Code Repo](https://bitbucket.org/itsjustnae/navbar-hw1/src/master/) - Bitbucket
- JS Libraries (Under Construction)
    - [Live Demo](https://jslibraries.netlify.com/) - Exercise: Visualize and inspect the results of the different library operations 
		- [Code Repo](https://bitbucket.org/itsjustnae/jslibraries-lab2/src/master/) - Bitbucket
- Bootstrap and MVC, MVVM (Under Construction)
    - [Live Demo](https://bootstraphw.netlify.com/) - Exercise: Create a basic html page. It should include the jQuery library. Add some simple content
       - [Code Repo](https://bitbucket.org/itsjustnae/bootstraphw/src/master/) - Bitbucket
- Angular Basics
    - [Live Demo](https://myangularproject.netlify.com/) - Exercise: Build a Simple Web Application using Angular
      - [Code Repo](https://bitbucket.org/itsjustnae/myangularproject/src/master/) - Bitbucket
## Java (Lab/Homework) --> Checkout My Personal Java Projects [Repo](https://github.com/azanaebondbrooks/java-mania-repo)
- Java Type And Variables
    * Compiled View - Exericise: Using Test Cases in JUnit to understand datatype instances
         ![Alt Text](testcase.gif)
       - [Code Repo](https://bitbucket.org/itsjustnae/types-variableslab/src/master/) - Bitbucket
- Dice Game   
    * Compiled View - Exercise: Create a Roll the Dice Game
         ![](rolldice.gif)
       - [Code Repo](https://bitbucket.org/itsjustnae/dicegame/src/master/) - Bitbucket

## TTS Dashboard | [Live Demo]()

A product dashboard, used internally by a company, that uses a RESTful API service, an SQL database and a front end built with Angular.


![TTS Dashboard Project Photo](dashboard-logo.JPG) 

**Project Assigned:** 09/19/2019  
**Project Due:** 10/04/2019  
**Project Completed:** 10/04/2019

---

### Tools, Technologies & Plugins Used

| Languages | Frameworks & Libraries | IDEs & Tools  | Plugins        |
| ------------- | ------------------ | ------------- | -------------- | 
| Java          | Spring Boot        | IntelliJ IDEA | ngx-pagination |
| TypeScript    | Spring Data JPA    | VS Code       | material-icons | 
| SQL           | Spring Web         | Git           |                |
|               | Angular            | GitHub        |                |
|               | Bootstrap 4        | Heroku        |                |
|               | Lodash             |               |                |



## Project Instructions

For the project, imagine you have been tasked with building a product dashboard that your company will use internally. There are a few requirements:

- Create a RESTful API service to add, update, and retrieve product information
- Uses Hibernate to interact with a SQL database
- Utilizes Angular on the front-end 

- Each product is a record with the following columns:
  - id: unique identifier
  - name
  - category: ID relating to category table
  - full_price: up to two places of decimal
  - sale_price: up to two places of decimal
  - availability: boolean value stating is the product is in stock (true) or not (false)
  - supplier: ID relating to supplier table

- The MVP will be able to :
  - Perform basic CRUD functions ***IN PROGRESS*** - TEST ***REST API*** IN POSTMAN ***WORKING***
  - Return a list of products by category ***IN PROGRESS***
  - Return a list of products by category and availability ***IN PROGRESS***
  - Sort products by full price, sale price, and the percentage of discount ***IN PROGRESS*** - PAGINATION - ***WORKING***

- At the end of the project, you should have two parts: 
  - a Java Spring Boot application handling your RESTful API
  - a simple front-end application that interacts and displays the data from your API