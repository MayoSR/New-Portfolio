import React from "react";

export default function MoviePicker() {
  return (
    <div className="h-full w-full bg-white text-left overflow-y-scroll p-4">
      <h1 className="text-5xl font-bold pb-2 border-b-2 inline-block border-black mb-4">
        Movie Picker Mobile App
      </h1>
      <p className="text-lg">
        Have you ever tried to find a movie you wanted to watch with friends?
        Did you end up spending at least an hour trying to find what to watch?
        Well this app aims to solve that problem! The app allows users to create
        friend groups where they can add movies they like into a playlist. Users
        within the group can then mark movies as watched if they have already
        seen it, and when the time comes to pick a movie to watch as a group,
        the ones that no one has viewed can be chosen. This also allows you to
        keep track of what movies your friends are watching and watch them
        yourself if you would like. Besides that, the app offers its own details
        about a movie as well, allowing users to get a brief idea of the movie
        they might want to watch.
      </p>
      <div className="p-8">
        <div className="flex">
          <div>
            <img src="/apps/movie/1.png" alt="ShowcaseServer" />
            <br />
            <img src="/apps/movie/2.png" alt="ShowcaseServer" />
            <br />
            <img src="/apps/movie/3.png" alt="ShowcaseServer" />
            <br />
            <img src="/apps/movie/4.png" alt="ShowcaseServer" />
          </div>
          <div>
            <img src="/apps/movie/banner.png" alt="ShowcaseServer" />
          </div>
        </div>
      </div>
    </div>
  );
}
