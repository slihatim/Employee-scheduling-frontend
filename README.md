# Employee Scheduling App

This app ***schedules shifts*** for employees for 3 weeks. There are work shifts: M (Matin), S (Soir), N (Nuit), and there is Rest shift R (Repos).

- You can specify your ***daily needs*** for each skill (Engineer, Consultant...), for each shift (M,S,N,R), in each day (MONDAY, TUESDAY...).
- ***Example of a daily need :*** "On a Monday, in M shift, i need at least 2 Engineers, and 3 Consultants"
- Each employee ***has to work 5 days*** in the same shift, and ***get 2 days of rest***. Specifically, the pattern during 3 weeks should be `MMMMMRRNNNNNRRSSSSSRR` in a cyclic manner, to ensure that he gets at least 2 days and a half of rest.
- ***Note 1:*** the app has initial data for employees and daily needs.
- ***Note 2:*** All data entered is saved to local storage of your browser.

## How to run the application

1. Start out by entering the ***start date*** (should be a Monday).

2. ***Add employees*** either manually, or ***import them as a JSON*** array in this specific format  `[  
  {"name": "worker 0", skills: ["Engineer"]},
  {"name": "worker 1", skills: ["Consultant"]}
]`

3. ***Add daily needs*** either manually, or ***import them as a JSON*** array in this specific format `[
  {"id": "1","day": "MONDAY","shift": "M","skill": "Consultant","minEmployees": 2},
  {"id": "2","day": "MONDAY","shift": "M","skill": "Engineer","minEmployees": 1}]`

4. Finally, you can click on the ***solve*** button, and wait 3 minutes for the solving to happen. Also, You can ***export the solution as JSON***.