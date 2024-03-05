# AngularRoutingTutorial

Tutorial project to understand the concepts of `Routing`, `Lazy Loading` and `withComponentInputBinding`.

## Dependencies

- **Angular:** version 17.2.2
- **Node:** version 20.11.1


## Development server

Run `npn install` to install "node_modules" and then run `npn run start` to automatically open a tab with your browser preset for a development server.

## Topics

In these pages I talk about the project implementation and the theory behind these concepts. 

- **Routing:** https://hackmd.io/@Minuke/B14AxHX6T
- **Lazy Loading:** https://hackmd.io/@Minuke/ByqZrsNpp
- **withComponentInputBinding:** https://hackmd.io/@Minuke/Hyj1WH7TT

## About the project

In this project we have created 2 route files, the main one (`app.routes.ts`) and a child file (`home.routes.ts`) that we have initialized with lazy loading. Through this set of routes we can see how routing works in Angular, the different types of `paths` that exist and how we can collect parameters from the routes with `withComponentInputBinding`.