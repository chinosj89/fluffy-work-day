# Work Day Scheduler: Week 5 Challenge

## URL: 

## Description: 
As a student, we are to create a simple calendar application that allows a user to save events for each hour of a typical working day (9am–5pm). <br />

## User Story
`AS AN employee with a busy schedule` <br /> 
`I WANT to add important events to a daily planner` <br /> 
`SO THAT I can manage my time effectively` <br /> 

## Acceptance Criteria
![alt](/images/Screenshot%202023-07-18%20150806.png)<br /> 

### Process
- We were given a starter code with TODOs where our code will be added. <br />
My first course of action was to study the HTML and CSS and how it was coded using bootstrap and to furthermore be able to connect both to JavaScript. <br />

- I started with the first acceptance criteria which was to create the display for the day. <br />
`var currentDay = dayjs();
$('#currentDay').text(currentDay.format('[Today is:] dddd MMMM D, YYYY'));` 

- Next is to create the divs for each of the time blocks from 9am to 5pm. Which in this case was simple because all I did was copy and paste 1 div. Each div is then renamed based on the hour. 

- After creating the divs, I had to make sure each button is working and corresponding to the JavaScript. One of the important pieces that I learned was using `$(this)` which calls on the current element in this case the `<button>` element. Another is using `.siblings` which is another way to write `.children`. After that, I learned `.parent` wchi is the same as `.parentElement`. Overall, learning these new ways to write in JS using APIs was new to me and also in some ways convenient. 

### Conditional Statements
The conditional statements is the next thing I worked on. This allowed me to create statements to match the `currentHour` with the `time-block`. I had to be able to compare both somehow. I learned from other developer's similar assignment how they were able to compare both, but I also ran across `parseInt`. `parseInt` made it so that `currentHour` and `time-block` both returned as a whole number/integer. But what I was able to take from other developers is the code line of: <br />
`($(this).attr("id").split("-")[1]);`
- `$(this)` - refered to the element
- `attr("id")` - called to the id of the element and in this case `<div id="hour-9" class="row time-block">`
- `split` with the specifics to remove the "-" made it so that the id will return in a sub-array of `(hour, 9)` 
- [1] - since we are trying to compare the hour # to the current time, the [1] made sure to call on the 2nd object in the sub-array which is the 9 and since we have a parseInt, we are now parsing this 9 to a whole number or integer.
<br />
We are now able to compare both `currentHour` and `time-block` to create conditions while adding the CSS for `past`, `present`, and `future`.

### Local Storage
Since we have used local storage in the past assignment, I was able to use it again and futher reinforce how it works. 
- `var input` is where user information is placed that is why we have a `val();`
- `var time` is where button is being called upon in a condition that the button is clicked, the input is saved using `localStorage.setItem`. `time` being the key and the `input` being the value. 

### Extra
I also added a display where it says "Saved in Local Storage" that shows up and disappears after a second when the saved button is clicked. This was awesome to see as it also reinforces back a previous lesson in JavaScript where a setInterval was used. In this case, setTimeout was used. 

### References
I was able to reference public github accounts of developers that also had a similar assignment. Studying their codes allowed me to learn how to best use Third-party apis but making sure that I first understand how it would work in vanilla JavaScript before implementing in my code. I have futher commented for future purposes the different code for vanilla js and the api. 