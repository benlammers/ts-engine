# TS Engine

**Table of Contents**

-  [Purpose](#purpose)
-  [Description](#description)
-  [Tech Stack](#tech-stack)
-  [Possible Improvements](#possible-improvements)

## Purpose

The purpose of this repository was to have fun building a simple game engine on the browser and to try out creation of a monorepo containing an NPM package and a Svelte application.

## Description

During my studies I took a game development course where we looked at a simple game engine developed using Java and Java AWT. I was intrigued by this and being a web developer decided to translate the Java engine for the web. I used Typescript and browser APIs and this is the result. TS Engine is a very simple engine supporting only text and rectangular shapes. It is by no means robust or complete but has been enjoyable to create.

This repository contains the NPM package TS Engine containing the simple game engine as well as a Svelte app that showcases a game made using the engine.

## Tech Stack

-  [TypeScript](https://www.typescriptlang.org/docs/)
-  [HTML Canvas](https://www.w3schools.com/html/html5_canvas.asp)
-  [Svelte](https://svelte.dev/docs)

## Possible Improvements

Given that this is a game engine there is an infinite amount of features that could be added. One that is quite obvious is if there is room to scroll on the Y axis then the controls of Snake shift the screen while you play. I am also sure there are performance issues to be resolved as well as the capability to have a consistent framerate. The most relavent features that could be added in my perspective at this time would be the ability to render more than just rectangles to the game, circular shapes or sprites would be a great addition.
