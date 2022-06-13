import {
    doOperationsOnData, allocateIdsToData
} from "./utils/utils";

const data = [{
    value: "ALL",
    fullName: "All",
    fullNameInOtherLanguages: {
        hi: ""
    }
}, {
    value: "NIETZSCHE",
    fullName: "Friedrich Nietzsche",
    fullNameInOtherLanguages: {
        hi: "फ्रेडरिक नीत्शे"
    }
}, {
    value: "MARIE_KONDO",
    fullName: "Marie Kondo",
    fullNameInOtherLanguages: {
        hi: "मैरी कोंडो"
    }
}, {
    value: "SCHOPENHAUER",
    fullName: "Arthur Schopenhauer",
    fullNameInOtherLanguages: {
        hi: "आर्थर शोपेनहावर"
    }
}, {
    value: "CAMUS",
    fullName: "Albert Camus",
    fullNameInOtherLanguages: {
        hi: "एलबर्ट कामू"
    }
}, {
    value: "DOSTOEVSKY",
    fullName: "Fyodor Dostoevsky",
    fullNameInOtherLanguages: {
        hi: "फ्योदोर दोस्तोवस्की"
    }
}, {
    value: "PESSOA",
    fullName: "Fernando Pessoa",
    fullNameInOtherLanguages: {
        hi: "फर्नांडो पेसोआ"
    }
}, {
    value: "KAFKA",
    fullName: "Franz Kafka",
    fullNameInOtherLanguages: {
        hi: "फ्रांज काफ्का"
    }
}, {
    value: "HERACLITUS",
    fullName: "Heraclitus",
    fullNameInOtherLanguages: {
        hi: "हेराक्लीटस"
    }
}, {
    value: "SARTRE",
    fullName: "Jean-Paul Sartre",
    fullNameInOtherLanguages: {
        hi: "जीन-पॉल सार्त्र"
    }
}, {
    value: "MAO",
    fullName: "Mao Zedong",
    fullNameInOtherLanguages: {
        hi: "माओ से-तुंग"
    }
}, {
    value: "SADE",
    fullName: "Marquis De Sade",
    fullNameInOtherLanguages: {
        hi: "मार्क्विस डे सादे"
    }
}, {
    value: "FREUD",
    fullName: "Sigmund Freud",
    fullNameInOtherLanguages: {
        hi: "सिगमंड फ्रॉयड"
    }
}, {
    value: "VOLTAIRE",
    fullName: "Voltaire",
    fullNameInOtherLanguages: {
        hi: "वॉल्टेयर"
    }
}, {
    value: "CIORAN",
    fullName: "Emile M. Cioran",
    fullNameInOtherLanguages: {
        hi: "एमिल एम. सियोरान"
    }
}, {
    value: "DIOGENES",
    fullName: "Diogenes",
    fullNameInOtherLanguages: {
        hi: "डायोजनीज"
    }
}, {
    value: "KISSINGER",
    fullName: "Henry A. Kissinger",
    fullNameInOtherLanguages: {
        hi: "हेनरी ए किसिंजर"
    }
}, {
    value: "CLAUSEWITZ",
    fullName: "Carl Von Clausewitz",
    fullNameInOtherLanguages: {
        hi: "कार्ल वॉन क्लॉज़विट्ज़"
    }
}, {
    value: "BUKOWSKI",
    fullName: "Charles Bukowski",
    fullNameInOtherLanguages: {
        hi: "चार्ल्स बुकोवस्की"
    }
}, {
    value: "OSCAR_WILDE",
    fullName: "Oscar Wilde",
    fullNameInOtherLanguages: {
        hi: "ऑस्कर वाइल्ड"
    }
}, {
    value: "ROCHEFOUCAULD",
    fullName: "Francois De La Rochefoucauld",
    fullNameInOtherLanguages: {
        hi: "फ्रेंकोइस डे ला रोशेफौकॉल्ड"
    }
}, {
    value: "MARSHALL_MCLUHAN",
    fullName: "Marshall McLuhan",
    fullNameInOtherLanguages: {
        hi: "मार्शल मैक्लुहान"
    }
}, {
    value: "PASCAL",
    fullName: "Blaise Pascal",
    fullNameInOtherLanguages: {
        hi: "ब्लेस पास्कल"
    }
}, {
    value: "SIMONE_WEIL",
    fullName: "Simone Weil",
    fullNameInOtherLanguages: {
        hi: "सिमोन वेइल"
    }
}, {
    value: "HITLER",
    fullName: "Adolf Hitler",
    fullNameInOtherLanguages: {
        hi: "एडॉल्फ हिटलर"
    }
}, {
    value: "KANT",
    fullName: "Immanuel Kant",
    fullNameInOtherLanguages: {
        hi: "इम्मैनुएल कांत"
    }
}, {
    value: "OSHO",
    fullName: "Osho",
    fullNameInOtherLanguages: {
        hi: "ओशो"
    }
}, {
    value: "VIRGINIA_WOOLF",
    fullName: "Virginia Woolf",
    fullNameInOtherLanguages: {
        hi: "वर्जीनिया वूल्फ"
    }
}, {
    value: "BEAUVOIR",
    fullName: "Simone De Beauvoir",
    fullNameInOtherLanguages: {
        hi: "सिमोन डी ब्यूवोइर"
    }
}, {
    value: "CARL_JUNG",
    fullName: "Carl Gustav Jung",
    fullNameInOtherLanguages: {
        hi: "कार्ल गुस्टाफ युंग"
    }
}, {
    value: "SALVADOR_DALI",
    fullName: "Salvador Dali",
    fullNameInOtherLanguages: {
        hi: "साल्वाडोर डाली"
    }
}, {
    value: "VINCENT_VAN_GOGH",
    fullName: "Vincent Van Gogh",
    fullNameInOtherLanguages: {
        hi: "विंसेंट वान गाग"
    }
}, {
    value: "ALAN_WATTS",
    fullName: "Alan Watts",
    fullNameInOtherLanguages: {
        hi: "एलन वाट्स"
    }
}, {
    value: "HIPPOCRATES",
    fullName: "Hippocrates",
    fullNameInOtherLanguages: {
        hi: "हिप्पोक्रेट्स"
    }
}, {
    value: "KRISHNAMURTI",
    fullName: "Jiddu Krishnamurti",
    fullNameInOtherLanguages: {
        hi: "जिद्दू कृष्णमूर्ति"
    }
}, {
    value: "PETERSON",
    fullName: "Jordan Peterson",
    fullNameInOtherLanguages: {
        hi: "जॉर्डन पीटरसन"
    }
}, {
    value: "VICTOR_FRANKL",
    fullName: "Victor Frankl",
    fullNameInOtherLanguages: {
        hi: "विक्टर फ्रैंकल"
    }
}, {
    value: "AURELIUS",
    fullName: "Marcus Aurelius",
    fullNameInOtherLanguages: {
        hi: "मार्कस ऑरेलियस"
    }
}, {
    value: "ROBERT_GREENE",
    fullName: "Robert Greene",
    fullNameInOtherLanguages: {
        hi: "रॉबर्ट ग्रीन"
    }
}, {
    value: "NAVAL_RAVIKANT",
    fullName: "Naval Ravikant",
    fullNameInOtherLanguages: {
        hi: "नवल रविकांत"
    }
}, {
    value: "LIGOTTI",
    fullName: "Thomas Liggoti",
    fullNameInOtherLanguages: {
        hi: "थॉमस लिगोटी"
    }
}, {
    value: "SENECA",
    fullName: "Seneca",
    fullNameInOtherLanguages: {
        hi: "सेनेका"
    }
}, {
    value: "ZIZEK",
    fullName: "Slavoj Žižek",
    fullNameInOtherLanguages: {
        hi: "स्लावोज ज़िज़ेक"
    }
}, {
    value: "BECKETT",
    fullName: "Samuel Beckett",
    fullNameInOtherLanguages: {
        hi: "सैमुअल बेकेट"
    }
}, {
    value: "DARWISH",
    fullName: "Mahmoud Darwish",
    fullNameInOtherLanguages: {
        hi: "महमूद दरविश"
    }
}, {
    value: "HUXLEY",
    fullName: "Aldous Huxley",
    fullNameInOtherLanguages: {
        hi: "ऐलडस हक्सले"
    }
}, {
    value: "ORWELL",
    fullName: "George Orwell",
    fullNameInOtherLanguages: {
        hi: "जॉर्ज ऑरवेल"
    }
}, {
    value: "RUMI",
    fullName: "Rumi",
    fullNameInOtherLanguages: {
        hi: "रूमि"
    }
}, {
    value: "LAO_TZU",
    fullName: "Lao Tzu",
    fullNameInOtherLanguages: {
        hi: "लाओ त्सू"
    }
}, {
    value: "RUSSELL",
    fullName: "Bertrand Russell",
    fullNameInOtherLanguages: {
        hi: "बर्ट्रेंड रसेल"
    }
}, {
    value: "NASSIM_TALEB",
    fullName: "Nassim Nicholas Taleb",
    fullNameInOtherLanguages: {
        hi: "नसीम निकोलस तालेब"
    }
}, {
    value: "HARARI",
    fullName: "Yuval Noah Harari",
    fullNameInOtherLanguages: {
        hi: "युवल नोहा हरारी"
    }
}, {
    value: "ADYASHANTI",
    fullName: "Adyashanti",
    fullNameInOtherLanguages: {
        hi: "अद्यशांती"
    }
}, {
    value: "C_S_LEWIS",
    fullName: "C.S. Lewis",
    fullNameInOtherLanguages: {
        hi: "सी.एस. लुईस"
    }
}, {
    value: "CONFUCIUS",
    fullName: "Confucius",
    fullNameInOtherLanguages: {
        hi: "कन्फ्यूशियस"
    }
}, {
    value: "EZRA_POUND",
    fullName: "Ezra Pound",
    fullNameInOtherLanguages: {
        hi: "एज्रा पाउंड"
    }
}, {
    value: "GIBRAN",
    fullName: "Khalil Gibran",
    fullNameInOtherLanguages: {
        hi: "खलील जिब्रान"
    }
}, {
    value: "HERMANN_HESSE",
    fullName: "Hermann Hesse",
    fullNameInOtherLanguages: {
        hi: "हरमन हेस्से"
    }
}, {
    value: "KIERKEGAARD",
    fullName: "Søren Kierkegaard",
    fullNameInOtherLanguages: {
        hi: "सॉरन किअर्केगार्ड"
    }
}, {
    value: "MACHIAVELLI",
    fullName: "Niccolò Machiavelli",
    fullNameInOtherLanguages: {
        hi: "निकोलो मैकियावेली"
    }
}, {
    value: "RIDLEY",
    fullName: "Matt Ridley",
    fullNameInOtherLanguages: {
        hi: "मैट रिडले"
    }
}, {
    value: "SUN_TZU",
    fullName: "Sun Tzu",
    fullNameInOtherLanguages: {
        hi: "सन त्ज़ु"
    }
}, {
    value: "SYLVIA_PLATH",
    fullName: "Sylvia Plath",
    fullNameInOtherLanguages: {
        hi: "सिल्विया प्लाथ"
    }
}, {
    value: "ZHUANGZI",
    fullName: "Zhuangzi",
    fullNameInOtherLanguages: {
        hi: "ज़ुआंग-ज़ी"
    }
}, {
    value: "DOUGLASS",
    fullName: "Frederick Douglass",
    fullNameInOtherLanguages: {
        hi: "फ्रेडरिक डगलस"
    }
}, {
    value: "KAMAL_RAVIKANT",
    fullName: "Kamal Ravikant",
    fullNameInOtherLanguages: {
        hi: "कमल रविकांत"
    }
}, {
    value: "HEIDEGGER",
    fullName: "Martin Heidegger",
    fullNameInOtherLanguages: {
        hi: "मार्टिन हाइडेगर"
    }
}, {
    value: "ANTHONY_DE_MELLO",
    fullName: "Anthony De Mello",
    fullNameInOtherLanguages: {
        hi: "एंथोनी डी मेलो"
    }
}, {
    value: "MICHAEL_SINGER",
    fullName: "Michael Singer",
    fullNameInOtherLanguages: {
        hi: "माइकल सिंगर"
    }
}, {
    value: "ROVELLI",
    fullName: "Carlo Rovelli",
    fullNameInOtherLanguages: {
        hi: "कार्लो रोवेली"
    }
}, {
    value: "JED_MCKENNA",
    fullName: "Jed McKenna",
    fullNameInOtherLanguages: {
        hi: "जेड मैककेना"
    }
}, {
    value: "PLATO",
    fullName: "Plato",
    fullNameInOtherLanguages: {
        hi: "प्लेटो"
    }
}, {
    value: "SOCRATES",
    fullName: "Socrates",
    fullNameInOtherLanguages: {
        hi: "सुकरात"
    }
}, {
    value: "BRUCE_LEE",
    fullName: "Bruce Lee",
    fullNameInOtherLanguages: {
        hi: "ब्रूस ली"
    }
}, {
    value: "FEYMAN",
    fullName: "Richard Feyman",
    fullNameInOtherLanguages: {
        hi: "रिचर्ड फेमैन"
    }
}, {
    value: "KAPIL_GUPTA",
    fullName: "Kapil Gupta",
    fullNameInOtherLanguages: {
        hi: "कपिल गुप्ता"
    }
}, {
    value: "EMERSON",
    fullName: "Ralph Waldo Emerson",
    fullNameInOtherLanguages: {
        hi: "राल्फ वाल्डो इमर्सन"
    }
}, {
    value: "ELON_MUSK",
    fullName: "Elon Musk",
    fullNameInOtherLanguages: {
        hi: "एलन मस्क"
    }
}, {
    value: "ZAPFFE",
    fullName: "Peter Wessel Zapffe",
    fullNameInOtherLanguages: {
        hi: "पीटर वेसल जैपफे"
    }
}, {
    value: "HEGEL",
    fullName: "Georg Wilhelm Friedrich Hegel",
    fullNameInOtherLanguages: {
        hi: "जार्ज विलहेम फ्रेड्रिक हेगेल"
    }
}, {
    value: "DAVID_HUME",
    fullName: "David Hume",
    fullNameInOtherLanguages: {
        hi: "डेविड ह्यूम"
    }
}, {
    value: "BERKELEY",
    fullName: "George Berkeley",
    fullNameInOtherLanguages: {
        hi: "जॉर्ज बर्कले"
    }
}, {
    value: "DESCARTES",
    fullName: "René Descartes",
    fullNameInOtherLanguages: {
        hi: "रेने डेस्कर्टेस"
    }
}, {
    value: "JOHN_LOCKE",
    fullName: "John Locke",
    fullNameInOtherLanguages: {
        hi: "जॉन लॉक"
    }
}, {
    value: "LEIBNIZ",
    fullName: "Gottfried Wilhelm Leibniz",
    fullNameInOtherLanguages: {
        hi: "गाटफ्रीड विलहेल्म लाइबनिज"
    }
}, {
    value: "SPINOZA",
    fullName: "Baruch Spinoza",
    fullNameInOtherLanguages: {
        hi: "बारुच स्पिनोज़ा"
    }
}, {
    value: "BUDDHA",
    fullName: "Gautam Buddha",
    fullNameInOtherLanguages: {
        hi: "गौतम बुद्ध"
    }
}, {
    value: "EPICTETUS",
    fullName: "Epictetus",
    fullNameInOtherLanguages: {
        hi: "एपिक्टीटस"
    }
}, {
    value: "HUNTER_THOMPSON",
    fullName: "Hunter Thompson",
    fullNameInOtherLanguages: {
        hi: "हंटर थॉम्पसन"
    }
}, {
    value: "OVID",
    fullName: "Ovid",
    fullNameInOtherLanguages: {
        hi: "ओविड"
    }
}, {
    value: "VIRGIL",
    fullName: "Virgil",
    fullNameInOtherLanguages: {
        hi: "वर्जिल"
    }
}, {
    value: "BORGES",
    fullName: "Jorge Luis Borges",
    fullNameInOtherLanguages: {
        hi: "जॉर्ज लुइस बोर्गेस"
    }
}, {
    value: "SHAKESPEARE",
    fullName: "William Shakespeare",
    fullNameInOtherLanguages: {
        hi: "विलियम शेक्सपीयर"
    }
}, {
    value: "EDGAR_ALLAN_POE",
    fullName: "Edgar Allan Poe",
    fullNameInOtherLanguages: {
        hi: "एडगर एलन पो"
    }
}, {
    value: "TAGORE",
    fullName: "Rabindranath Tagore",
    fullNameInOtherLanguages: {
        hi: "रबीन्द्रनाथ टैगोर"
    }
}, {
    value: "JACK_KEROUAC",
    fullName: "Jack Kerouac",
    fullNameInOtherLanguages: {
        hi: "जैक केरौअक"
    }
}, {
    value: "FITZGERALD",
    fullName: "F. Scott Fitzgerald",
    fullNameInOtherLanguages: {
        hi: "एफ. स्कॉट फिट्जरग्राल्ड"
    }
}, {
    value: "COCO_CHANEL",
    fullName: "Coco Chanel",
    fullNameInOtherLanguages: {
        hi: "कोको शनैल"
    }
}, {
    value: "ANAIS_NIN",
    fullName: "Anaïs Nin",
    fullNameInOtherLanguages: {
        hi: "अनाइस निन"
    }
}, {
    value: "MAX_STIRNER",
    fullName: "Max Stirner",
    fullNameInOtherLanguages: {
        hi: "मैक्स स्टिरनर"
    }
}, {
    value: "PERICLES",
    fullName: "Pericles",
    fullNameInOtherLanguages: {
        hi: "पेरिक्लेस"
    }
}, {
    value: "DEMOCRITUS",
    fullName: "Democritus",
    fullNameInOtherLanguages: {
        hi: "डेमोक्रिटस"
    }
}, {
    value: "ANTON_CHEKHOV",
    fullName: "Anton Chekhov",
    fullNameInOtherLanguages: {
        hi: "एंटोन चेखोव"
    }
}, {
    value: "CHUCK_PALAHNIUK",
    fullName: "Chuck Palahniuk",
    fullNameInOtherLanguages: {
        hi: "चक पालाह्न्युक"
    }
}, {
    value: "STALIN",
    fullName: "Joseph Stalin",
    fullNameInOtherLanguages: {
        hi: "जोसेफ़ स्टालिन"
    }
}, {
    value: "PLUTARCH",
    fullName: "Plutarch",
    fullNameInOtherLanguages: {
        hi: "प्लूटार्क"
    }
}, {
    value: "EPICURUS",
    fullName: "Epicurus",
    fullNameInOtherLanguages: {
        hi: "एपिकुरुस"
    }
}, {
    value: "WODEHOUSE",
    fullName: "P.G. Wodehouse",
    fullNameInOtherLanguages: {
        hi: "पी.जी. वुडहाउस"
    }
}, {
    value: "HEMINGWAY",
    fullName: "Ernest Hemingway",
    fullNameInOtherLanguages: {
        hi: "अर्नेस्ट हेमिंग्वे"
    }
}, {
    value: "LACAN",
    fullName: "Jacques Lacan",
    fullNameInOtherLanguages: {
        hi: "ॹाक लाकाँ"
    }
}, {
    value: "HARUKI_MURAKAMI",
    fullName: "Haruki Murakami",
    fullNameInOtherLanguages: {
        hi: "हारुकी मुराकामी"
    }
}, {
    value: "LOVECRAFT",
    fullName: "H. P. Lovecraft",
    fullNameInOtherLanguages: {
        hi: "एच.पी. लवक्राफ्ट"
    }
}, {
    value: "CICERO",
    fullName: "Cicero",
    fullNameInOtherLanguages: {
        hi: "सिसरो"
    }
}, {
    value: "EMILY_DICKINSON",
    fullName: "Emily Dickinson",
    fullNameInOtherLanguages: {
        hi: "एमिली डिकिंसन"
    }
}, {
    value: "HOMER",
    fullName: "Homer",
    fullNameInOtherLanguages: {
        hi: "होमर"
    }
}, {
    value: "ROLLO_MAY",
    fullName: "Rollo May",
    fullNameInOtherLanguages: {
        hi: "रोलो मे"
    }
}, {
    value: "JAMES_BALDWIN",
    fullName: "James Baldwin",
    fullNameInOtherLanguages: {
        hi: "जेम्स बाल्डविन"
    }
}, {
    value: "JOE_ROGAN",
    fullName: "Joe Rogan",
    fullNameInOtherLanguages: {
        hi: "जो रोगन"
    }
}, {
    value: "MARX",
    fullName: "Karl Marx",
    fullNameInOtherLanguages: {
        hi: "कार्ल मार्क्स"
    }
}, {
    value: "PYTHAGORAS",
    fullName: "Pythagoras",
    fullNameInOtherLanguages: {
        hi: "पाइथागोरस"
    }
}, {
    value: "CHOMSKY",
    fullName: "Noam Chomsky",
    fullNameInOtherLanguages: {
        hi: "नोम चोम्स्की"
    }
}, {
    value: "WILLIAM_JAMES",
    fullName: "William James",
    fullNameInOtherLanguages: {
        hi: "विलियम जेम्स"
    }
}, {
    value: "SOLZHENITSYN",
    fullName: "Aleksandr Solzhenitsyn",
    fullNameInOtherLanguages: {
        hi: "अलेक्सान्द्र सोल्शेनीत्सिन"
    }
}, {
    value: "SNOWDEN",
    fullName: "Edward Snowden",
    fullNameInOtherLanguages: {
        hi: "एड्वर्ड स्नोडेन"
    }
}, {
    value: "TYSON",
    fullName: "Mike Tyson",
    fullNameInOtherLanguages: {
        hi: "माइक टायसन"
    }
}, {
    value: "LENIN",
    fullName: "Vladimir Lenin",
    fullNameInOtherLanguages: {
        hi: "व्लादीमिर लेनिन"
    }
}, {
    value: "PICASSO",
    fullName: "Pablo Picasso",
    fullNameInOtherLanguages: {
        hi: "पाब्लो पिकासो"
    }
}, {
    value: "AESCHYLUS",
    fullName: "Aeschylus",
    fullNameInOtherLanguages: {
        hi: "एस्चिलस"
    }
}];

allocateIdsToData(data);

doOperationsOnData(data);

export default data
