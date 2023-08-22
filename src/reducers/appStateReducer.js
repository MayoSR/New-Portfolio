import Connect4 from "../apps/Connect4";
import Equitable from "../apps/Equitable";
import FoodOrdering from "../apps/FoodOrdering";
import JobFinder from "../apps/JobFinder";
import LinkedInH1B from "../apps/LinkedInH1B";
import LinkedInYOE from "../apps/LinkedInYOE";
import MoviePicker from "../apps/MoviePicker";
import Recipebook from "../apps/Recipebook";
import ShowcaseServer from "../apps/ShowcaseServer";
import Snake from "../apps/Snake";
import Wordle from "../apps/Wordle";
import Subletters from "../apps/Subletters";
import XMP from "../apps/XMP";
import EcoBytes from "../apps/EcoBytes";
import AirDrawing from "../apps/AirDrawing";
import NLPQuestionBank from "../apps/NLPQuestionBank";
import PLAnalysis from "../apps/PLAnalysis";
import HTMLWireframe from "../apps/HTMLWireframe";
import BookGenerator from "../apps/BookGenerator";
import Resume from "../apps/Resume";
import AboutMe from "../apps/AboutMe";
import AboutPortfolio from "../apps/AboutPortfolio";

const initialState = [

  {
    id: 100,
    isDir: 1,
    icon: "/icons/folder.png",
    name: "Top Projects",
    status: 0,
  },
  {
    id: 101,
    isDir: 1,
    icon: "/icons/folder.png",
    name: "UI and Other Web Projects",
    status: 0,
  },
  {
    id: 103,
    isDir: 1,
    icon: "/icons/folder.png",
    name: "Machine Learning and Data Analytics",
    status: 0,
  },
  {
    id: 200,
    isDir: 0,
    parentDir: 0,
    icon: "/icons/cv.png",
    name: "Resume",
    status: 0,
    app: <Resume />
  },
  {
    id: 201,
    isDir: 0,
    parentDir: 0,
    icon: "/icons/gamer.png",
    name: "About Me",
    status: 0,
    app: <AboutMe />
  },
  {
    id: 202,
    isDir: 0,
    parentDir: 0,
    icon: "/icons/microsoft.png",
    name: "About this Portfolio",
    status: 0,
    app: <AboutPortfolio />
  },
  {
    id: 2,
    isDir: 0,
    parentDir: 100,
    icon: "/icons/portfolio.png",
    name: "Showcase Server",
    status: 0,
    dateModified: "10/10/2021 10:30 PM",
    type: "Application",
    size: "4.5 MB",
    app: <ShowcaseServer />,
  },
  {
    id: 24,
    isDir: 0,
    parentDir: 100,
    icon: "/icons/ewaste.png",
    name: "EcoBytes",
    status: 0,
    dateModified: "9/10/2022 9:30 PM",
    type: "Application",
    size: "3.2 MB",
    app: <EcoBytes />,
  },
  {
    id: 6,
    isDir: 0,
    parentDir: 100,
    icon: "/icons/headset.png",
    name: "Equitable",
    status: 0,
    dateModified: "4/5/2021 1:30 PM",
    type: "Application",
    size: "2.2 MB",
    app: <Equitable />,
  },
  {
    id: 8,
    isDir: 0,
    parentDir: 101,
    icon: "/icons/snake.png",
    name: "Snake",
    status: 0,
    dateModified: "4/7/2022 7:30 PM",
    type: "Application",
    size: "2.2 MB",
    app: <Snake />,
  },
  {
    id: 7,
    isDir: 0,
    parentDir: 101,
    icon: "/icons/crossword.png",
    name: "Wordle",
    status: 0,
    dateModified: "10/10/2021 10:00 PM",
    type: "Application",
    size: "1.5 MB",
    app: <Wordle />,
  },
  {
    id: 16,
    isDir: 0,
    parentDir: 101,
    icon: "/icons/game.png",
    name: "Connect 4",
    status: 0,
    dateModified: "8/8/2020 12:00 PM",
    type: "Application",
    size: "1.5 MB",
    app: <Connect4 />,
  },
  {
    id: 18,
    isDir: 0,
    parentDir: 101,
    icon: "/icons/order-online.png",
    name: "Food Ordering",
    status: 0,
    dateModified: "18/7/2019 6:00 PM",
    type: "Application",
    size: "1.1 MB",
    app: <FoodOrdering />,
  },
  {
    id: 19,
    isDir: 0,
    parentDir: 101,
    icon: "/icons/job-search.png",
    name: "Job Finder",
    status: 0,
    dateModified: "5/7/2021 3:00 PM",
    type: "Application",
    size: "3 MB",
    app: <JobFinder />,
  },
  {
    id: 0,
    isDir: 0,
    parentDir: 100,
    icon: "/icons/passport.png",
    name: "LinkedIn H1B and UK Visa Checker",
    status: 0,
    dateModified: "6/6/2023 1:30 PM",
    type: "Application",
    size: "2 MB",
    app: <LinkedInH1B />,
  },
  {
    id: 3,
    isDir: 0,
    parentDir: 100,
    icon: "/icons/experience.png",
    name: "LinkedIn Years of Experience Checker",
    status: 0,
    dateModified: "6/8/2023 3:00 AM",
    type: "Application",
    size: "4 MB",
    app: <LinkedInYOE />,
  },
  {
    id: 22,
    isDir: 0,
    parentDir: 101,
    icon: "/icons/tv.png",
    name: "Movie Checker",
    status: 0,
    dateModified: "7/4/2021 1:30 AM",
    type: "Application",
    size: "3.8 MB",
    app: <MoviePicker />,
  },
  {
    id: 23,
    isDir: 0,
    parentDir: 101,
    icon: "/icons/recipe.png",
    name: "Recipe Book",
    status: 0,
    dateModified: "1/10/2021 7:30 AM",
    type: "Application",
    size: "1.8 MB",
    app: <Recipebook />,
  },
  {
    id: 4,
    isDir: 0,
    parentDir: 100,
    icon: "/icons/tweet.png",
    name: "Cornell Xenophobia Meter",
    status: 0,
    dateModified: "2/3/2021 4:30 PM",
    type: "Application",
    size: "1.4 MB",
    app: <XMP />,
  },
  {
    id: 30,
    isDir: 0,
    parentDir: 103,
    icon: "/icons/pencil.png",
    name: "Air Drawing",
    status: 0,
    dateModified: "5/3/2021 2:30 PM",
    type: "Application",
    size: "200 KB",
    app: <AirDrawing />,
  },
  {
    id: 27,
    isDir: 0,
    parentDir: 103,
    icon: "/icons/quiz.png",
    name: "Identical Question Bank Generator for NLP Tasks",
    status: 0,
    dateModified: "6/7/2021 5:30 PM",
    type: "Application",
    size: "4.2 MB",
    app: <NLPQuestionBank />,
  },
  {
    id: 29,
    isDir: 0,
    parentDir: 103,
    icon: "/icons/code.png",
    name: "Programming Language Recommender using Social Network Analysis",
    status: 0,
    dateModified: "4/4/2021 6:00 PM",
    type: "Application",
    size: "3.2 MB",
    app: <PLAnalysis />,
  },
  {
    id: 28,
    isDir: 0,
    parentDir: 103,
    icon: "/icons/wireframe.png",
    name: "HTML Wireframe to Website Converter",
    status: 0,
    dateModified: "4/7/2021 7:00 PM",
    type: "Application",
    size: "1.6 MB",
    app: <HTMLWireframe />,
  },
  {
    id: 26,
    isDir: 0,
    parentDir: 103,
    icon: "/icons/book-stack.png",
    name: "Bi-directional RNN LSTM Book Generator",
    status: 0,
    dateModified: "7/10/2020 11:30 PM",
    type: "Application",
    size: "1 MB",
    app: <BookGenerator />,
  },

];

function setAppStatusByID(state, action, status) {
  let id = action.reference;
  let coords = action.coords;
  let selectedApp = state.filter((app) => app.id === id)[0];
  let appStatus = {
    ...selectedApp,
    status: status,
    coords: coords,
  };

  let parsedAppList = state.filter((app) => app.id !== id);
  return [...parsedAppList, appStatus];
}

const appState = (state = initialState, action) => {
  switch (action.type) {
    case "START_APP":
      return setAppStatusByID(state, action, 1);
    case "STOP_APP":
      return setAppStatusByID(state, action, 0);
    default:
      return state;
  }
};

export default appState;
