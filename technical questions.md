1. How long did you spend on the coding assignment? 

Ans)    The coding assignment took a total of 2 days to complete. The coding assignment phase was dividing into two phases:
           
  Phase I: Understood the User Stories to implement all the needs for user to get the books and the book info. Developed a Flow diagram(Swimlane) to distinguishes the task who is responsible for each part of a process. This allowed me to have an overview of the interaction between front end and back end. 
  What more is, I collected all the business requirements for Home Page, and SearchList Page. Finally, depending on the technical requirements of the application, the required resources from the given documentation and my research was prepared, and designing of the front-end  for the application was done. 

  Phase II: To begin with, I started implementing the front-end design of the website with the help of functional components. React Router was used to allow navigation between the pages. 
  Redux as state management was used to store the list of books when any searches for books was done. As Redux acted as the data layer around the app which made the list to be globally available for any component. Moreover, the list of books was displayed with the functionality of sorting alphabetically and by published date.

  a)	If more time were given to me, I could have added the functionality  for user to register in the application. As a user, the user will be able to login and select the books for their favorite library to read later, so that user can see their collection easily.  
  b)	I would have used Firestore from firebase to store collections of individual users and Redux to manage their collection which can be shown once the user is logged in. For Login purpose, more option like Login in By Facebook or Google can be used from Firebase Authentication rather than registering and logging in.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   
2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

Ans)   The most useful feature that was added to the latest version for better user experience: 
    A section for categories was added on the Homepage. Mostly, user finds it easy to search from a bunch of categories. For example, Science, Sports, Nature and Food which were found to be best from recent surveys. Hence, this way of engagement for searching books can be interesting and fun for user. 
                   
Snippet code:  


const URL = "https://openlibrary.org/search.json";

  const bookbyCategory = (category) => {
  
  
    const FINAL_URL = `${URL}?q=${category}`; // fetches the books data depending on the what user have chosen, when the onClick event triggers.
    
    
    console.log(FINAL_URL);
    fetch(FINAL_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(setBookList(data.docs));
      });
    history.push("/category");
  };
  
  
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  
 3. How would you track down a performance issue in production? Have you ever had to do this?


 Ans)   To track down a performance in production, I tested the application with minifies production build. Observation was done carefully with the use of React Developer Tools.
       Mostly, for state management globally among components the Redux Dev tools for Chrome was used to observe the changes of (bookList) which was getting changed in the slice. 
       Usually when an action was dispatched to update the list, it was important to realize how does it changes after certain actions was dispatched. This was done to solve an errors if anything exists. 
   
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

4. How would you improve the API that you just used?

Ans)   For normal development, the API was able to access by the application. In the production environment, the error of “Fixing mixed content” appeared from which the active mixed content was blocked. 
Hence for improvements the resource request was changed from http:// to https:// for json data extraction. To improve clarity and simplify the experience, I can  merge the URLs and APIs that will continue to work as expected without change. 
For handling errors gracefully, we could return HTTP response codes to allow maintainers of the API enough to understand the problem that is occurred. 
Filtering and pagination can also be used to both increase performance by reducing the usage of server resources. As more data accumulates in the database, the more important these features become.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

5. Please describe yourself using correctly formatted JSON.

Ans)   From my perspective, a base url :(const URL = "https://openlibrary.org/search.json";) was used.
Then with the use of string literals, title as a query parameter was used. This allowed to fetch the result of the book clearly. 
For example,  Followed by (const FINAL_URL = `${URL}?q=${title}`;) this url was implemented to fetch the json data.

Then once the response.json() was received, them the necessary data as a parameter was used to fecth the docs to get the list of books. 

snippet code: 


const searchBooks = () => {


    fetch(FINAL_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(setBookList(data.docs));
      });

    history.push("/searchlist");
    
    
  };
  

At some point, to represent the book images, an another base url :(https://covers.openlibrary.org/b/id/) was used
where cover(id) received from each individual book was used to get their cover images individually. 

Hence, the prop as ( bookCover={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} ) was passed into the book component to present the book cover images.




