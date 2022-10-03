# Near-Earth-Objects-App

# Project Description:
    Our Web app delivers users the accessability to view the Near Earth Object of the day
    as well as objects that will pass in the future, given a date of the users choosing. 
    Near earth objects are simply asteroids and comets that have had made their way into Earth's neighborhood, sometimes a lot closer than you may           want. 
    On our homepage, the user can select today's date or any previous date to get a list of objects.
    This list will show the name of the objects as well as if the object was potentionally hazardous to Earth on that selected date from NASA's own           NeoWs data. 
    You can find out more about NASA's NeoWs platfrom and their mission via the link: <https://cneos.jpl.nasa.gov/ca/> .
    
 # How to Use the Webapp:
    Users with our URL will be taken to the homepage and will see a box with the title, "SELECT A DATE" and in the form input screen with the placeholder     text 'Click Here!' along with a 'Submit' button. Users should click somewhere on the empty input box and a calendar window will pop up with the           current month. Users can select any date using the calendar, selecting different months via the '<' and '>' arrows on the calendar. Once the user         selects a date, the user will select the 'ok' button in order to fill the input box with the selected date. Once the calendar window disappears, and     the date selected is in the input box, the user can click the 'submit' button.  
    Once the user selects the 'submit' button with their selected date in the input, our NEOWs API will pull the names of the Near Earth Objects

![homepage screenshot](/assets/images/Screen%20Shot%202022-10-03%20at%205.48.36%20PM.png "Homepage")

    The names of the Near Earth Objects will populate in a card in a list format and objects with potentially hazardous stats will be indicated in a red text.  An image of day from NASA's APOD API that selected date's will also appear in the card beneath our date input data. Since the picture of the day is only generated the day of, if a user selects a date that has yet to occur, we have a placeholder image of Webb’s First Deep Field is galaxy cluster SMACS 0723 which is the deepest and sharpest infrared image of the distant universe so far (image info found here <https://www.nasa.gov/image-feature/goddard/2022/nasa-s-webb-delivers-deepest-infrared-image-of-universe-yet>). 

    Beneath the generated list of NEOs and Picture of the Day is a link 'CLICK FOR MORE INFORMATION' which will take users to a seperate page listing more information about the NEOs for that date. The data being pulled from the NEOWs api is the name, size, distance missed from Earth, and spead of passing for the NEOs. At the top of the page is a link that will take the user to NASA's webpage for NEOs. 

 # Nav Menu   
    At the top of each page is a nav menu with our web app's logo, and quick-links for our 'Home' page, 'About' page, and a 'Surprise Me' link. 
     1. The 'About' page contains a short description of our app, and our developers. 
     2. The 'Surprise Me' page will take you specifically to the picture of the day for today's date only, with a large image of the APOD data image, and the picture description NASA included with their data. 
     3. The 'Home' link simply takes you back to the main homepage.
![daily image screenshot](assets/images/Screen%20Shot%202022-10-03%20at%206.27.55%20PM.png "Surprise Me!")


