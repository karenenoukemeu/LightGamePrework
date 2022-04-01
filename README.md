# LightGamePrework

Sound and light game on a webpage

# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Karene Noukemeu**

Time spent: **28** hours spent in total

Link to project: https://glitch.com/edit/#!/wonderful-flint-flag?path=README.md%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

* added a backgroung image to the game
* added an alert when user makes a mistake
* added a sound when user wins and loses the game

## Video Walkthrough (GIF)


 * https://recordit.co/SSePq0ingH.gif
 * https://recordit.co/3HlVJdoJVF.gif

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   [I mostly used w3schools for this prework; however as external websites I used
   geekesforgeeks , programiz ,stalk overFlow]
  

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   [One of the challenges I encountered during this submission was adding an image to each button. 
   Upon making research, I thought I had to implement the images in the html file, with the image tag.
   As such, that is what I did, but then I knew I had to connect the images for each corresponding button when it was clicked.
   At first, my thought was to create a function where I displayed the images and call them on “onclick”, or “onmousedown” for each button.
   But what happened, logically, was that the images only displayed when the buttons were clicked and not when the clue sequence was played.
   At this point, after a moment of thought, it came to my mind that the buttons lit due to the “button active” in the style.css file. 
   So, my reasoning was to add the images in the rules for each button in the style.css file. After looking up the correct syntax, I did as such.
   Luckily, my idea worked, and the images showed in the clue sequence for each button. However, I encountered another problem, I realised that the images were not displayed as I wished. 
   Into W3 schools again, I discovered how I could change the placement of the image and its size and did so. However, an issue occurred when I changed the size of the   game’s web page. 
   For some buttons, the images did not appear entirely. I concluded that as I set a size for an image it will be different based on the size of the game’s web page.
   In w3 schools again, I was looking for a method to fix this. I acknowledged that I could set the size of the image to “automatic” this way;
   even though the size is affected, the image is still displayed on the entire area of the button no matter the size of the page]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   [Before this application, I did not know much about web development; however, by doing this prework, I had the chance to get an overview of web development and would like to continue learning.
   I understood that web development uses JavaScript, HTML, and CSS. For this reason, mastering these web development programming languages is a priority.
   Because web development is fascinating, I would like to learn in-depth to discover what I feel the most comfortable with, front-end, back-end, or full-stack.
   Indeed, instructors have explained to me what the differences are, but I would like to gain real-world experience to be able to analyze these varieties properly.
   What programming languages do front-end engineers use versus back-end? What platforms do are used?
   What skillset does each section require the most? By getting hands-on experience in web development, I am aiming to find answers.
   Moreover, I am eager to understand the difference when building websites for various types of devices.
   How does a webpage differ on a desktop and on an android phone? Android versus iOS as well?
   Although, I have various questions about web development, this prework helped me to understand the big picture of web development.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   [If I had a few more hours on this project, I would spend time adding more features for better interaction with the user. 
   For instance, if the user were able to choose the number of buttons they would like to use in the game. 
   Moreover, if the user were able to choose the length of the pattern to be played.
   At this moment, the maximum for the pattern displayed is 8 clues, I would make the user to be able to decide the number of clues to enter to be able to win the game.
   To continue, I noticed when my sequence is played, my buttons are still accessible when user presses on a button while the cue is playing this causes confusion in the game.
   It would be nice if while my clue sequence is playing, user will not have access or not be able to touch the buttons. 
   I would also style the game better. For instance, implementing an animated background would also be nicer than just an image background. 
   Although a sound is played when the user wins an animation would be great as well.]

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/4aeb1da86f074857933d15d9932f6df1)

## License

    Copyright [Karene Noukemeu]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
