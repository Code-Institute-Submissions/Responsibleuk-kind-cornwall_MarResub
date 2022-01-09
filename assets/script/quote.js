function genQuote() {
    var randNum = Math.floor(Math.random() * 11) + 1;
    document.getElementById('quote').innerHTML = quotes[randNum]; 
}
var quotes = ["Blank", 

"\"It's not about how hard you hit. It's about how hard you can get hit and keep moving forward. How much you can take and keep moving forward.\"<br> Rocky Balboa", 
"\“We cannot solve problems with the kind of thinking we employed when we came up with them.\"<br> Albert Einstein",
"\“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.\"<br> Mark Twain",
"\“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest.\"<br> Walter Anderson",
"\“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.\"<br> Diane McLaren",
"\“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.\"<br> Steve Jobs",
"\“Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus.\"<br> Alexander Graham Bell",
"\“Either you run the day or the day runs you.\"<br> Jim Rohn",
"\“I’m a greater believer in luck, and I find the harder I work the more I have of it.\"<br> Thomas Jefferson",
"\“When we strive to become better than we are, everything around us becomes better too.\"<br> Paulo Coelho",
"\“Opportunity is missed by most people because it is dressed in overalls and looks like work.\"<br> Thomas Edison",
"\“Setting goals is the first step in turning the invisible into the visible.\"<br> Tony Robbins",];
