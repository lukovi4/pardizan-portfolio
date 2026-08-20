Lastik — simple and fun "time-killer" game

This is a super simple and addictive game, something between puzzle and trivia, where users need to use their finger as a eraser to open hidden card and give the right answer.This is my concept, so in addition to design I also acted as manager, tester, analyst :)

**Idea validation**

It's hard to say now how the idea came about, but I haven't seen similar mechanics in storers so far. So first I wanted to test how interesting it could be for users. For this purpose, I created the simplest basic functionality with a programmer - one screen with several pictures and erase mechanics, and then tested it on 15-20 people from my environment. The users choice was simple - people who have simple games on their phones (3 in a row, hidden objects, crossword puzzles, etc.) and who periodically play them. After receiving positive feedback and useful comments on the mechanics and the game in general, it was time to start full-fledged development.

Prototype, design, implementation

The first step was to describe in detail all my ideas and comments received from users, then I transformed them into a full clickable prototype of the game to test it once again on several users and make final adjustments, plus in the end it saved time for communication with the programmer, because he could be guided by this prototype. Together with the programmer we broke the game into logical components (where it is better to start the development), I prepared a detailed description and created tickets, and then started to create the final design. By the time the programmer made the basis, I already had all the screens and ui kit ready, so I gave them to the developer and started working on illustrations, content and additional elements (screens for the store, commercials, banners, etc.).

Final testing, release, analytics

After finalizing the development, we used firebase to launch game on closed testing for about 20 people. It was important for us to debug the mechanic of the eraser itself (erasing the picture) plus set up the internal currency, and to do this I asked users to record screens while playing the game. This allowed us to track down users' “lifehacks" that oversimplified the game, and made it easy and uninteresting. A few minor tweaks, and we send the game to release.
Next steps were setting up amplitude, appsflyer, applovin and a long agonizing war with facebook to get away from me and let me run ads in peace, but that's another story :).

Design

Cause the main content of the application is pictures, I wanted to emphasize on them, so I made the interface very minimalistic, intuitive and user-friendly.

Illustrations

Illustrations (category covers, lastiks) were created by a graphic designer, i just helped with ideas. We chose the overall style with the help of a focus group of 20 potential users. Later, I generated some of the covers using neural networks.

Game mechanics

Using finger, user can erase a maximum of 50% of the hidden picture, and choose the correct answer from the 10 variants. The less the user has spent eraser, the more coins he will get, which can be exchanged for new categories, or restore lastik for them. Each user has 100% of lastik, which regenerates over time.

Monetization

The game earns money from displaying ads, and there is also an option to purchase a premium account. For watching ads you can restore the eraser, open new categories, get a new eraser, get a second attempt to reply.

