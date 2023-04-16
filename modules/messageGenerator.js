export class MessageGenerator{
    constructor(messages){
        this._messages=messages;
    }

    get messages(){
        return this._messages;
    }

    getRandomMessage(){
        return this._messages[Math.floor(Math.random()*this._messages.length)]
    }

}

const astrologicalMessages=[
    "Aries: This is a time for action and adventure. Take risks and go after what you want, but remember to think before you act.",
    "Taurus: Your practical nature will serve you well during this time of change. Trust your instincts and focus on what truly matters.",
    "Gemini: Communication will be key for you during this period. Use your natural charm and wit to navigate tricky situations and build strong relationships.",
    "Cancer: Emotions may run high during this time, but trust in your intuition to guide you through any challenges. Remember to take care of yourself, too.",
    "Leo: This is a time for creativity and self-expression. Follow your passions and let your light shine, but be open to feedback and collaboration.",
    "Virgo: Your attention to detail will be invaluable during this period. Focus on organization and practical solutions to achieve your goals.",
    "Libra: Balance and harmony will be important for you during this time. Focus on building strong relationships and finding common ground with others.",
    "Scorpio: Intensity and passion will drive you during this period. Embrace your inner strength and use it to achieve your goals, but remember to stay grounded.",
    "Sagittarius: Adventure and exploration will be calling to you during this time. Follow your curiosity and embrace new experiences, but be mindful of your limits.",
    "Capricorn: Hard work and discipline will be key for you during this period. Stay focused on your goals and don't be afraid to ask for help when you need it."
    ];

const inspirationalMessages=[
"You are capable of achieving great things, so don't be afraid to dream big and work hard to make your dreams a reality.",
"Every challenge you face is an opportunity for growth and learning. Embrace the difficulties and use them as stepping stones to success.",
"Believe in yourself and your abilities, and never give up on your goals. With perseverance and determination, anything is possible.",
"Your past does not define you. Every day is a new opportunity to create the life you want and become the person you aspire to be.",
"You have a unique set of talents and strengths that make you special. Embrace your individuality and use your gifts to make a positive impact on the world.",
"Success is not just about reaching your destination, but also about enjoying the journey along the way. Stay present and appreciate each moment of the ride.",
"Your attitude and mindset have a powerful impact on your life. Choose to focus on the positive and cultivate a mindset of gratitude and abundance.",
"Don't be afraid to take risks and step outside of your comfort zone. That's where growth and transformation happen.",
"You are never too old or too young to pursue your passions and create a fulfilling life. Follow your heart and trust the journey.",
"Remember that failure is not the end, but simply a temporary setback. Use your failures as a learning opportunity and keep moving forward towards your goals."
];

const jokeMessages=[
"Why did the tomato turn red? Because it saw the salad dressing!",
"I told my wife she was drawing her eyebrows too high. She looked surprised.",
"What do you call a can opener that doesn't work? A can't opener!",
"Why did the scarecrow win an award? Because he was outstanding in his field.",
"What do you get when you cross a snowman and a shark? Frostbite!",
"Why did the bicycle fall over? Because it was two-tired.",
"I tried to make a belt out of watches, but it was a waist of time.",
"What do you call a fake noodle? An impasta!",
"I told my wife she was drawing her eyebrows too high. She looked surprised.",
"Why did the chicken cross the playground? To get to the other slide."
];

const astrologicalMessageGenerator=new MessageGenerator(astrologicalMessages);
const inspirationalMessageGenerator=new MessageGenerator(inspirationalMessages);
const jokeMessageGenerator=new MessageGenerator(jokeMessages);

export const messageGeneratorHandler={
    "Astrology" : astrologicalMessageGenerator,
    "Inspirational" : inspirationalMessageGenerator,
    "Joke" : jokeMessageGenerator
}
