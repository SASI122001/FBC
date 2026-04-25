import sermonImg from '../../assets/images/sermon_preaching.png';
import bibleImg from '../../assets/images/bible_study.png';
import worshipImg from '../../assets/images/church_worship.png';

export const currentSeries = {
    title: "The Book of Romans",
    description:
        "Exploring the foundational truths of the gospel, the depth of human sin, and the breathtaking reality of God's grace through faith in Jesus Christ.",
    latestMessage: {
        title: "Life in the Spirit",
        preacher: "Pastor John Doe",
        scripture: "Romans 8:1-17",
        description:
            "Join us as we journey through Paul's letter to the Romans, exploring the profound depths of the gospel, righteousness, and the grace of God.",
        image: sermonImg,
        seriesImage: bibleImg,
        listenUrl: "#",
    },
};

export const pastSeries = [
    {
        id: 1,
        book: "Ephesians",
        title: "Our Identity in Christ",
        count: "12 Messages",
        image: worshipImg,
        listenUrl: "#",
    },
    {
        id: 2,
        book: "Psalms",
        title: "Songs of the Heart",
        count: "8 Messages",
        image: bibleImg,
        listenUrl: "#",
    },
    {
        id: 3,
        book: "The Sermon on the Mount",
        title: "Kingdom Living",
        count: "15 Messages",
        image: sermonImg,
        listenUrl: "#",
    },
];

// Latest YouTube videos from https://www.youtube.com/@firstbaptistchurchofwinktx4828/videos
export const latestYouTubeVideos = [
    {
        id: 'd9gupPAdmRU',
        title: 'Asking in Christ\'s Name – John 14:13-14 (Part 2)',
    },
    {
        id: 'TWih5-2bhjI',
        title: 'Asking in Christ\'s Name – John 14:13-14',
    },
    {
        id: '56S5R4CZ7f4',
        title: 'The Understanding of Scripture – 2 Peter 3:14-18',
    },
    {
        id: 'aKKqbHinvOo',
        title: 'Faithful Church of God – Hebrews 10:23-25',
    },
    {
        id: 'zJFmo9Q421o',
        title: 'Look into the Empty Tomb – Romans 8:34',
    },
    {
        id: 'uKvIs0gWM6M',
        title: 'The Joy of Enduring the Cross – Hebrews 12:1-3 (Good Friday)',
    },
];
