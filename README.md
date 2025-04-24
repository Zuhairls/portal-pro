"# portal-pro" 
PRO Portal Flagging System
This project was developed as part of the Summer Student Test for Touchstone Institute. The goal was to design and implement a prototype that improves the automatic flagging system used to review candidate applications for Practice Ready Ontario.

Overview
The system evaluates applicants based on criteria such as NAC exam score, MCCQE1 score, Canadian experience, and recent practice history. Based on this input, the system flags potential eligibility concerns using a customizable rule engine.

The final version includes both frontend and backend components with a working API, real-time flagging logic, and a clean user interface for reviewers to interact with and override flags if necessary.

Technologies Used
Backend: Node.js, Express, TypeScript
Frontend: AngularJS 1.x, PrimeNG
Persistence: Mock local storage (via localStorage)
Tools: Postman, Live Server (for local frontend preview), Git, VS Code
How to Run
1. Backend Setup
cd backend
npm install
npm run dev
