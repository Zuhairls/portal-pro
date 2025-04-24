# PRO Portal Flagging System

This project was developed as part of the Summer Student Test for Touchstone Institute. The goal was to design and implement a prototype that improves the automatic flagging system used to review candidate applications for Practice Ready Ontario.

---

##  Overview

The system evaluates applicants based on criteria such as:

- NAC exam score
- MCCQE1 score
- Canadian experience
- Practice gaps

Based on this input, the system flags potential eligibility concerns using a customizable rule engine.

---

##  Key Features

- Input form for applicant data
- Automatic flagging logic with severity levels
- Manual override for each flag
- Severity-based filtering
- Flag export to `.json`
- Local storage persistence (mock database)

---

##  Technologies Used

**Backend:**
- Node.js
- Express
- TypeScript

**Frontend:**
- AngularJS 1.x
- PrimeNG

**Tools:**
- Postman (API testing)
- Live Server (local preview)
- Git
- VS Code

---

##  How to Run

### 1. Backend Setup

```bash
cd backend
npm install
npm run dev
