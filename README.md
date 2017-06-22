Create a small single page application in Angular or React (we prefer Angular but whichever you are most comfortable with) that fetches data about the network of Citybikes in Boston (http://api.citybik.es/v2/networks/hubway), and allows the user to update some of the information, with the following requirements:

- The name of the bike network and the city it's located in should be displayed at the top of the main page. 

- Each station should be listed below with the name and an indicator of whether or not there are any free bikes available.

- Clicking on a station should navigate to a new page (in the same application) where the user can edit the number of free bikes and then return to the main page.

- Upon returning to the main page, the "any free bikes" indicator should be reflected appropriately for the station that was just edited.

- The data only needs to be updated for display - it doesn't need to be persisted between browser refreshes or on the server
