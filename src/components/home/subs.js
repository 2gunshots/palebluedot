const subs = [
    { time: 14.0, out: 15.98, text: "From this distant vantage point," },
    {
        time: 16.0,
        out: 20.5,
        text: "the Earth might not seem of any particular interest.",
    },

    { time: 22.0, out: 26.11, text: "But for us, it's different." },
    // { time: 24.0, out: 26.08, text: "" },
    { time: 26.13, out: 28.98, text: "Consider again that dot." },
    { time: 29.0, out: 30.2, text: "That's here." },
    { time: 30.2, out: 31.9, text: "That's home." },
    { time: 31.9, out: 33.98, text: "That's us." },
    { time: 34.0, out: 37.14, text: "On it, everyone you love," },
    // { time: 35.90, out: 37.14, text: "everyone you love," },
    { time: 37.16, out: 39.1, text: "everyone you know," },
    { time: 39.12, out: 40.99, text: "everyone you ever heard of," },
    {
        time: 41.01,
        out: 45.16,
        text: "every human being who ever was, lived out their lives.",
    },
    {
        time: 52.23,
        out: 56.04,
        text: "The aggregate of our joy and suffering,",
    },
    { time: 56.06, out: 58.06, text: "thousands of confident religions," },
    { time: 58.06, out: 59.0, text: "ideologies," },
    { time: 59.01, out: 60.4, text: "and economic doctrines," },
    { time: 60.42, out: 62.38, text: "every hunter and forager," },
    { time: 62.4, out: 64.05, text: "every hero and coward," },
    {
        time: 64.06,
        out: 67.22,
        text: "every creator and destroyer of civilization,",
    },
    { time: 67.23, out: 69.16, text: "every king and peasant," },
    { time: 69.18, out: 71.16, text: "every young couple in love," },
    { time: 71.18, out: 73.11, text: "every mother and father," },
    { time: 73.13, out: 74.98, text: "hopeful child," },
    { time: 75.0, out: 77.08, text: "inventor and explorer," },
    { time: 77.1, out: 78.99, text: "every teacher of morals," },
    { time: 79.01, out: 80.19, text: "every corrupt politician," },
    { time: 80.21, out: 82.17, text: "every superstar," },
    { time: 82.19, out: 84.98, text: "every supreme leader," },
    {
        time: 85.0,
        out: 90.0,
        text: "every saint and sinner in the history of our species lived there.",
    },
    {
        time: 90.02,
        out: 95.15,
        text: "On the moat of dust suspended in a sunbeam.",
    },
    // { time: 93.13, out: 94.12, text: "" },
    { isBreak: true },
    { isBreak: true },
    {
        time: 102.2,
        out: 111.03,
        text: "The Earth is a very small stage in a vast cosmic arena.",
    },
    // { time: 107.05, out: 109.18, text: "" },
    {
        time: 111.05,
        out: 117.16,
        text: "Think of the rivers of blood spilled by all those generals and emperors",
    },
    // { time: 115.23, out: 116.17, text: "" },
    {
        time: 117.18,
        out: 125.39,
        text: "so that, in glory and triumph, they could become the momentary masters of a fraction of a dot.",
    },
    // { time: 122.11, out: 125.09, text: "of a fraction of a dot." },
    {
        time: 130.11,
        out: 135.11,
        text: "Think of the endless cruelties visited by the inhabitants of one corner of this pixel",
    },
    {
        time: 135.11,
        out: 139.17,
        text: "on the scarcely distinguishable inhabitants of some other corner,",
    },
    {
        time: 139.19,
        out: 142.089,
        text: "how frequent their misunderstandings,",
    },
    {
        time: 142.11,
        out: 144.21,
        text: "how eager they are to kill one another,",
    },
    { time: 144.22, out: 147.07, text: "how fervent their hatreds." },
    { isBreak: true },
    { isBreak: true },
    { time: 147.1, out: 149.04, text: "Our posturings," },
    { time: 149.06, out: 151.16, text: "our imagined self-importance," },
    {
        time: 151.19,
        out: 155.22,
        text: "the delusion that we have some privileged position in the Universe, are",
    },
    {
        time: 155.22,
        out: 159.13,
        text: "challenged by this point of pale light.",
    },
    {
        time: 170.07,
        out: 177.19,
        text: "Our planet is a lonely speck in the great enveloping cosmic dark.",
    },
    // { time: 174.1, out: 176.15, text: "" },
    {
        time: 177.22,
        out: 182.15,
        text: "In our obscurity, in all this vastness,",
    },
    // { time: 180.11, out: 182.01, text: "" },
    {
        time: 182.16,
        out: 185.98,
        text: "there is no hint that help will come from elsewhere",
    },
    { time: 186.0, out: 188.18, text: "to save us from ourselves." },
    { isBreak: true },
    { isBreak: true },
    {
        time: 190.14,
        out: 195.04,
        text: "The Earth is the only world known so far to harbor life.",
    },
    {
        time: 195.06,
        out: 199.05,
        text: "There is nowhere else, at least in the near future,",
    },
    // { time: 197.07, out: 199.03, text: "" },
    { time: 199.06, out: 201.2, text: "to which our species could migrate." },
    { time: 213.09, out: 216.0, text: "Visit, yes." },
    // { time: 214.19, out: 215.05, text: "yes." },
    { time: 216.07, out: 218.34, text: "Settle, not yet." },
    // { time: 217.15, out: 218.14, text: "Not yet." },
    { time: 218.36, out: 220.07, text: "Like it or not," },
    { time: 220.09, out: 221.18, text: "for the moment" },
    { time: 221.2, out: 224.0, text: "the Earth is where we make our stand." },
    { isBreak: true },
    { isBreak: true },
    {
        time: 234.15,
        out: 240.1,
        text: "It has been said that astronomy is a humbling and character building experience.",
    },
    {
        time: 240.11,
        out: 244.98,
        text: "There is perhaps no better demonstration of the folly of human conceits",
    },
    {
        time: 245.0,
        out: 249.0,
        text: "than this distant image of our tiny world.",
    },
    {
        time: 252.16,
        out: 256.2,
        text: "To me, it underscores our responsibility",
    },
    {
        time: 256.22,
        out: 259.06,
        text: "to deal more kindly with one another,",
    },
    {
        time: 259.06,
        out: 264.09,
        text: "and to preserve and cherish the pale blue dot,",
    },
    { time: 264.1, out: 268.13, text: "the only home we've ever known." },
];
export default subs;
