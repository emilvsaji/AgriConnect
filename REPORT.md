**MAIN PROJECT**

### BACHELOR OF COMPUTER APPLICATIONS

```
Of
```
```
Mahatma Gandhi University Kottayam
```
```
By
```
```
[STUDENT NAME] ([REGISTER NUMBER])
```
```
Department of Computer Applications
[Your College Name], Kottayam
```
**Submitted in partial fulfilment of the requirements for the award of degree of**


**[YOUR COLLEGE NAME]**

```
Place : [Your Place]
Date :
```
```
Internal Examiner
```
**Project Guide**

**[GUIDE NAME]**

```
Department of Computer Applications
```
```
External Examiner
```
```
Head of the Department
[HOD NAME]
```
## CERTIFICATE

This is to certify that the main project report entitled **"AgriConnect"** is submitted by

**[STUDENT NAME] ([REGISTER NUMBER])** in partial fulfilment of the requirements of

Bachelor degree in Computer Applications, M.G University, during the academic year

2025-2026.


## DECLARATION

I hereby declare that the main project work entitled "**AgriConnect**" submitted in partial
fulfilment of the requirement for the award of Bachelor degree in Computer Applications, is
a report of original work done by me during the period of study at [Your College Name]
under the supervision of **[GUIDE NAME]**.

#### [STUDENT NAME]

#### ([REGISTER NUMBER])


## ACKNOWLEDGEMENT

Sincerely,
**[STUDENT NAME]**

It gives me immense pleasure to express heartfelt thanks to all those who helped me in
the successful completion of this main project work. First of all, I would like to thank
almighty God who has been a constant support in every walk of my life and the source
of strength to complete this project work. I take this opportunity to express my gratitude
to all, whose contribution in this project work can never be forgotten. Words are
boundless to express my sincere thanks to **[PRINCIPAL NAME]**, Principal, [Your College Name]
for giving me an opportunity for this project. I express my
profound gratitude to **[HOD NAME]**, Head of the department of Computer
Applications, for her valuable guidance, timely suggestions and encouragement to
complete this project work. I express heartfelt gratitude to my internal guide **[GUIDE NAME]**,
for her valuable advice without which the completion of my
project would have been impossible. I wish to express my deep sense of gratitude to my
parents and friends for their kind cooperation and moral support. Once again I thank
one and all who had helped me directly or indirectly in the successful completion of the
project.


#### ABSTRACT

AgriConnect is a full-stack agriculture marketplace platform that supports three roles: User/Buyer, Farmer/Seller, and Admin. The system enables users to discover farm products, add items to cart, place orders with UPI payment support, track order status, and view booking history. Users can also browse and rent farming equipment from other farmers.

Farmers can list and manage their products, set prices, monitor incoming orders, update order/pickup status, and list tools for rental. Farmers benefit from a dedicated dashboard that helps them track sales and manage their inventory efficiently.

Admins can monitor platform activity, manage users and products, oversee all orders and transactions, and maintain platform governance. Admins have access to comprehensive statistics and can perform moderation actions across all entities.

The backend is implemented with Node.js + Express + MongoDB (Mongoose), while the frontend is built with React + Vite + TypeScript + Tailwind CSS. The platform includes UPI payment integration with QR code support, role-based access control, order lifecycle management, email notifications, and a Farmers Area with AI-assisted crop recommendations. Its modular architecture allows for easy scalability and integration with new features.

**Contact Information:**
- Phone: +91 80783-90442
- WhatsApp: wa.me/918078390442
- Email: support@agriconnect.com
- Location: Pala, Kottayam, Kerala, India


#### LIST OF TABLES

#### SL.NO. TABLE NAME PAGE

#### 1 TEST CASE TC1 - User Registration 45

#### 2 TEST CASE TC2 - User Login 46

#### 3 TEST CASE TC3 - Product Listing 47

#### 4 TEST CASE TC4 - Place Order 48


## LIST OF FIGURES

| SL. NO. | FIGURE NAME | PAGE NO. |
|---------|-------------|----------|
| 1 | BASIC DFD SYMBOLS | 18 |
| 2 | LEVEL 0 DFD | 19 |
| 3 | LEVEL 1 DFD USER | 20 |
| 4 | LEVEL 1 DFD FARMER | 21 |
| 5 | LEVEL 1 DFD ADMIN | 22 |
| 6 | LEVEL 2 DFD USER: REGISTER | 23 |
| 7 | LEVEL 2 DFD USER: LOGIN | 23 |
| 8 | LEVEL 2 DFD USER: BROWSE PRODUCTS | 24 |
| 9 | LEVEL 2 DFD USER: ADD TO CART | 24 |
| 10 | LEVEL 2 DFD USER: CHECKOUT | 25 |
| 11 | LEVEL 2 DFD USER: UPI PAYMENT | 25 |
| 12 | LEVEL 2 DFD USER: VIEW ORDERS | 26 |
| 13 | LEVEL 2 DFD FARMER: ADD PRODUCT | 27 |
| 14 | LEVEL 2 DFD FARMER: UPDATE ORDER STATUS | 27 |
| 15 | LEVEL 2 DFD ADMIN: MANAGE USERS | 28 |
| 16 | LEVEL 2 DFD ADMIN: VIEW STATISTICS | 28 |


**TABLE OF CONTENTS**

## Chapter No. Title Page No.

#### 1 STUDY PHASE 1

#### 1.1 INTRODUCTION 1

#### 1.2 OBJECTIVES 1

#### 1.3 TECHNOLOGIES, MATERIALS AND METHODS 2

#### 1.4 FEASIBILITY ANALYSIS 8

#### 1.5 SYSTEM ANALYSIS 11

#### 1.6 SYSTEM REQUIREMENTS AND SPECIFICATION 14

#### 2 DESIGN PHASE 16

#### 2.1 INTRODUCTION 16

#### 2.2 DATA FLOW DIAGRAM (DFD) 17

#### 2.3 DATABASE DESIGN 29

#### 2.4 SYSTEM DESIGN 31

#### 2.5 MODULE DESIGN 33

#### 3 DEVELOPMENT PHASE 35

#### 3.1 SOFTWARE SPECIFICATION 35

#### 3.2 CODING 36

#### 4 TESTING AND IMPLEMENTATION 44

#### 4.1 TESTING 44

#### 4.2 TEST CASES 45

#### 5 SCREEN LAYOUTS 49

#### 6 CONCLUSION 55

#### 6.1 FUTURE SCOPE 56

#### 7 REFERENCES 57


## 1. STUDY PHASE

**1.1 INTRODUCTION**

AgriConnect addresses real-world agricultural commerce needs by integrating product discovery, cart management, order processing, UPI payment handling, and stakeholder dashboards in one unified platform. The platform provides role-based capabilities:

**Users/Buyers:** Product browsing, cart management, checkout with UPI payment, order tracking, and tool rental browsing. They enjoy a user-friendly interface for seamless farm-to-table commerce.

**Farmers/Sellers:** Product listing and management, order monitoring, status updates, dashboard analytics, and tool listing for rental. Farmers can directly connect with customers without middlemen.

**Admins:** Platform governance, user management, product moderation, order oversight, and business statistics. Admins maintain platform integrity and resolve disputes.

**1.2 OBJECTIVES**

```
Build a direct farmer-to-customer marketplace for transparent farm commerce.
Provide multiple sale models: direct buy, enquiry-based, and live auction.
Implement reliable checkout and pickup-oriented booking workflows.
Enable seamless UPI-based online payments with QR code support.
Enable farmers to manage stock/listings and order lifecycle effectively.
Enable administrators to control and moderate the platform.
Provide digital agriculture support tools for modern farming decisions.
Use a scalable web stack and modular architecture for future extension.
```


**1.3 TECHNOLOGIES, MATERIALS AND METHODS**

#### DATABASE TOOL: MONGODB

MongoDB is used for document-based storage with collections for users, products, orders, and tools. It provides flexible schema design that allows for easy evolution of data structures as the platform grows.

#### PROGRAMMING TOOLS:

#### JAVASCRIPT (NODE.JS)

Node.js is a runtime environment that allows JavaScript to run on the server side. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient for building scalable network applications.

#### FEATURES OF NODE.JS

There are many features in Node.js, some of which are discussed below –

**· Asynchronous and Event Driven:**
All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a notification mechanism of Events helps the server to get a response from the previous API call.

**· Very Fast:**
Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution. This makes it ideal for building real-time applications.

**· Single Threaded but Highly Scalable:**
Node.js uses a single threaded model with event looping. Event mechanism helps the server to respond in a non-blocking way and makes the server highly scalable as opposed to traditional servers which create limited threads to handle requests.

**· No Buffering:**
Node.js applications never buffer any data. These applications simply output the data in chunks, making it efficient for streaming applications.

**· NPM (Node Package Manager):**
Node.js comes with NPM, which provides access to thousands of reusable packages. This makes it easy to add functionality to applications without writing code from scratch.


#### EXPRESS.JS

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is the de facto standard server framework for Node.js.

**Key Points:**

```
Minimal core with middleware-based architecture for extensibility.
Built-in routing system for handling HTTP requests.
Supports template engines for dynamic HTML generation.
Easy integration with databases like MongoDB through Mongoose.
Large ecosystem of middleware packages for authentication, validation, etc.
RESTful API development with clean route handling.
```

#### REACT

React is a popular JavaScript library for building interactive user interfaces, developed by Facebook. It focuses on component-based architecture and efficient rendering through a virtual DOM.

**Key Points:**

```
Uses reusable components for modular UI design.
Virtual DOM for efficient updates and rendering.
Unidirectional data flow for predictable state management.
JSX syntax combines JavaScript with HTML-like markup.
Large ecosystem with tools like React Router and Context API.
Supports server-side rendering for SEO optimization.
```


#### TYPESCRIPT

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds optional static typing and class-based object-oriented programming to the language.

**Key Points:**

```
Static type checking catches errors at compile time.
Enhanced IDE support with autocompletion and refactoring.
Supports modern JavaScript features with backward compatibility.
Interface and type definitions for better code documentation.
Gradual adoption possible in existing JavaScript projects.
Compiles to clean, readable JavaScript code.
```

#### VITE

Vite is a modern frontend build tool that provides fast development server and optimized production builds. It leverages native ES modules for instant server start and hot module replacement.

**Key Points:**

```
Instant server start without bundling during development.
Hot Module Replacement (HMR) for fast feedback loop.
Optimized production builds using Rollup.
Native TypeScript support out of the box.
Plugin system for extending functionality.
Framework agnostic but excellent React support.
```


#### TAILWIND CSS

Tailwind CSS is a utility-first CSS framework that enables developers to build modern, responsive interfaces quickly using pre-defined classes. It allows styling directly in HTML, minimizing custom CSS and promoting consistency across the UI.

**Key Points:**

```
Provides utility classes for layout, spacing, color, and typography.
Supports responsive design with mobile-first breakpoints.
Easily customizable for themes and branding through configuration.
Reduces CSS bloat and speeds up development.
Has a large community and plugin ecosystem for extended features.
JIT (Just-In-Time) mode for optimized production CSS.
```

#### MONGOOSE

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and translates between objects in code and their representation in MongoDB.

**Key Points:**

```
Schema-based solution for modeling application data.
Built-in type casting, validation, and query building.
Middleware (hooks) for pre/post operations.
Population for referencing documents across collections.
Plugin system for reusable functionality.
Connection management and pooling.
```


#### BCRYPTJS

bcryptjs is a JavaScript implementation of the bcrypt password hashing function. It provides secure password hashing for user authentication without native dependencies.

**Key Points:**

```
Secure password hashing with salt generation.
Configurable cost factor for future-proofing.
Pure JavaScript implementation for cross-platform compatibility.
Asynchronous and synchronous API options.
Protection against rainbow table attacks.
Industry-standard for password storage.
```

#### NODEMAILER

Nodemailer is a module for Node.js applications to send emails easily. It supports various transport methods including SMTP, and is used for sending order status notifications to customers.

**Key Points:**

```
Support for SMTP and other transport methods.
HTML and plain text email support.
Attachment handling for files and images.
Template support for dynamic content.
OAuth2 authentication for secure connections.
Easy integration with email services like Gmail.
```

#### QRCODE.REACT

qrcode.react is a React component for generating QR codes. In AgriConnect, it is used for generating UPI payment QR codes that users can scan with their mobile banking apps.

**Key Points:**

```
SVG and Canvas rendering options.
Customizable size, colors, and error correction level.
Support for embedding logos in QR codes.
Lightweight with no external dependencies.
TypeScript support for type safety.
```


**1.4 FEASIBILITY ANALYSIS**

A feasibility study for AgriConnect is an assessment of whether the platform can be practically developed and launched, considering the available skills, tools, technology, and resources. It examines if the project will deliver the expected benefits and justify the investment, while identifying any potential challenges during development. The study aims to fully understand the project scope and requirements, and determine if AgriConnect is viable and worth pursuing after evaluating all key factors.

#### UNDERSTANDING FEASIBILITY STUDIES

A feasibility study is simply an assessment of the practicality of developing and launching a platform or project. As the name implies, these studies ask: Is this project feasible? Do we have the team, tools, technology, and resources necessary for success? Will the platform deliver the return on investment (ROI) that we need and expect?

The goals of feasibility studies are as follows:

- To understand thoroughly all aspects of the platform, concept, and plan
- To become aware of any potential problems that could occur while implementing the project
- To determine if, after considering all significant factors, the platform is viable—that is, worth undertaking

#### IMPORTANCE OF FEASIBILITY STUDIES

The importance of feasibility studies lies in their ability to guide project development by clarifying operational requirements and identifying potential risks. They help determine where and how a project will function, estimate the resources and funding needed, and highlight any obstacles that may affect progress. Feasibility studies also support strategic planning and can provide evidence to stakeholders or investors that pursuing the project is a sound decision.


#### TECHNICAL FEASIBILITY

Technical feasibility concerns whether a project can meet its performance objectives. The architecture is technically feasible because:

```
Backend models are clearly separated (User, Product, Order, Tool).
APIs cover full marketplace lifecycle: auth, listing, checkout, status updates.
Frontend pages are modular and mapped to backend domain routes.
Admin control flows are separated from user flows.
UPI payment integration uses standard UPI Intent protocol compatible with all UPI apps.
Modern web technologies (React, Node.js, MongoDB) are well-documented and supported.
```

The primary aim of a technical feasibility study is to remove uncertainty. Since the present value of a proposed project depends on the probability of its success, it is important to quantify the risk before committing money to it.

For AgriConnect, technical risks are minimized by:
- Using proven technology stack with extensive community support
- Modular architecture allowing independent testing of components
- Standard REST API design for frontend-backend communication
- Document-based database allowing flexible schema evolution

#### ECONOMIC FEASIBILITY

Economic feasibility is a kind of cost-benefit analysis of the examined project, which assesses whether it is possible to implement it.

```
Entire stack is based on open-source tools, reducing licensing cost.
Vite + React development flow decreases development time.
MongoDB document model supports flexible schema evolution.
No mandatory proprietary infrastructure in current stage.
UPI payment integration is free (no transaction fees for basic implementation).
Cloud deployment options available for scalable hosting.
```

#### OPERATIONAL FEASIBILITY

Operational feasibility is the measure of how well a proposed system solves the problems and takes advantage of the opportunities identified during scope definition.

```
UI is role-friendly for users, farmers, and admins.
Product and booking lifecycle supports practical farm pickup workflows.
Tool rental flow increases value for users and farmers.
Admin dashboards improve moderation and operational control.
UPI payments provide familiar payment experience for Indian users.
Email notifications keep users informed about order status changes.
```


**1.5 SYSTEM ANALYSIS**

The system analysis phase involves a detailed study of the current system, leading to specifications of a new system. Analysis involves collecting data on available processes, decision points, and transactions handled by the present system.

#### EXISTING SYSTEM

Traditional farm selling channels are often fragmented, middleman-dependent, and weak in digital transparency. Buyers frequently lack direct access to local producers and real-time listing visibility. Existing systems typically suffer from:

```
Limited direct communication between farmer and customer.
Manual/phone-based booking and status tracking.
No unified view for inventory, orders, and transaction interactions.
Weak centralized moderation and analytics for platform operators.
Limited online payment options for rural commerce.
Multiple apps needed for different functions (discovery, payment, tracking).
```

#### LIMITATIONS OF EXISTING SYSTEM

```
No unified booking, checkout, and billing lifecycle—users must manage each step separately.
Limited farmer visibility of real-time orders and product status.
Weak centralized governance for handling disputes and processing issues.
Inconsistent billing and payment tracking, making it hard for users to monitor expenses.
Lack of automated notifications and role-based access, reducing operational transparency.
Middlemen taking significant margins, reducing farmer income.
```


#### PROPOSED SYSTEM (AGRICONNECT)

The proposed system integrates all essential agricultural commerce operations into a single, role-aware platform. Key features include:

**Authentication:** Ensures secure access for users, farmers, and admins, protecting sensitive data and workflows.

**Product Discovery:** Allows users to easily find available farm products based on category, location, and preferences.

**Cart & Checkout:** Streamlines the ordering process, enabling users to add items to cart and checkout efficiently.

**UPI Payment:** Supports seamless online transactions with QR code scanning and mobile app redirection.

**Order Management:** Manages the complete order lifecycle from placement to pickup completion.

**Farmer Dashboard:** Provides farmers with insights into their products, orders, and sales performance.

**Admin Governance:** Enables platform-wide management, moderation, and analytics.

**Tool Rental:** Facilitates equipment sharing among farmers for better resource utilization.

#### ADVANTAGES

```
Unified lifecycle from product discovery to order completion.
Role-based access and control for all stakeholders.
Direct farmer-to-customer connection without middlemen.
UPI payment integration for seamless transactions.
Real-time order status updates with email notifications.
Structured data and API extensibility for future features.
Tool rental marketplace for equipment sharing.
AI-assisted farmer support for crop recommendations.
```

#### CHALLENGES

```
Managing concurrent orders and inventory updates.
Ensuring pricing accuracy across different product types.
Maintaining data consistency across multiple role actions.
Handling notifications and email dispatch without delays.
Scaling the platform to support increasing users and transactions.
```


**1.6 SYSTEM REQUIREMENT SPECIFICATION**

#### SYSTEM MODULES

The system is organized into main modules, each designed to address the needs of different stakeholders:

**1. User Module**
- Register/login/profile management
- Browse products by category and location
- Add to cart and manage cart items
- Checkout with customer details
- UPI payment with QR code support
- View order history and status
- Browse and rent farming tools

**2. Farmer Module**
- Register/login as farmer
- Create/edit/delete product listings
- View farmer dashboard with statistics
- Monitor incoming orders
- Update order status (Confirmed → Ready for Pickup → Completed)
- List tools for rental marketplace
- Receive email notifications for new orders

**3. Admin Module**
- View platform statistics (users, products, orders, revenue)
- Manage users (view, delete)
- Manage products (view, delete)
- Manage orders (view, update status)
- Manage tools (view, delete)
- Platform governance and moderation

**4. Tool Rental Module**
- Browse available farming tools
- Filter by category and availability
- View tool details and owner information
- Post new tool listings

**5. Payment Module**
- UPI Intent URL generation
- QR code generation for desktop users
- Mobile app redirection for UPI payments
- Payment confirmation workflow

**6. Farmer Support Module (AI)**
- Crop recommendation assistance
- Disease identification guidance
- Planting and weather insights
- Market trend information


## 2. DESIGN PHASE

**2.1 INTRODUCTION**

The design phase focuses on the detailed implementation of the system recommended in the feasibility study. Emphasis is on translating performance specifications into design specifications. The design phase is a transition from a user-oriented document to a document oriented to the programmers or database administrator.

In the design phase of AgriConnect, the solutions to the identified problems in the feasibility analysis are extracted. A new system with all necessary modules required to manage the entire agricultural marketplace operations is designed. It also involves the creative design of the database.

**2.2 DATA FLOW DIAGRAM (DFD)**

A data flow diagram is the best and easiest tool to represent the flow of the data in the project. It is otherwise known as bubble chart. It has the purpose of clarifying system requirements and identifying major transformations that will become programs in the system design.

A DFD consists of a series of bubbles joined by lines. The bubbles represent processes and the lines represent data flow in the system.

**In the normal convention a DFD has four major symbols:**

1. **A Square** defines source or destination of data (External Entity).

2. **An Arrow** shows data flow direction.

3. **An Oval/Circle** represents a process that transforms incoming data into outgoing data flows.

4. **An Open Rectangle** shows a data store.


#### BASIC DFD SYMBOLS

```
┌─────────┐
│         │     External Entity (Source/Destination)
│  User   │     - Represents actors outside the system
│         │     - Can be a person, organization, or system
└─────────┘

    ─────────────────>     Data Flow
                           - Shows direction of data movement
                           - Labeled with data name

       ┌─────┐
      (       )            Process
       │ 1.0 │             - Transforms input to output
      (       )            - Numbered for identification
       └─────┘

    ┌──────────────┐
    │              │       Data Store
    │  D1  Users   │       - Repository for data
    │              │       - Numbered with 'D' prefix
    └──────────────┘
```


#### LEVEL 0 DFD (CONTEXT DIAGRAM)

```
                                    ┌─────────────┐
         Registration/Login ──────>│             │
         Browse Products ─────────>│             │
         Place Order ─────────────>│             │
┌──────┐ Make Payment ────────────>│             │────────> Product List
│      │ View Orders ─────────────>│             │────────> Order Confirmation
│ User │                           │             │────────> Payment Status
│      │<──────────────────────────│             │────────> Order History
└──────┘                           │             │
                                   │             │
                                   │ AgriConnect │
         Login ───────────────────>│  Platform   │
         Add/Edit Products ───────>│             │────────> Dashboard Data
┌────────┐ View Orders ───────────>│             │────────> Order List
│        │ Update Order Status ───>│             │────────> Status Confirmation
│ Farmer │ List Tools ────────────>│             │
│        │<────────────────────────│             │
└────────┘                         │             │
                                   │             │
                                   │             │
         Admin Login ─────────────>│             │────────> Platform Statistics
┌───────┐ Manage Users ───────────>│             │────────> User List
│       │ Manage Products ────────>│             │────────> Product List
│ Admin │ Manage Orders ──────────>│             │────────> Order List
│       │ View Statistics ────────>│             │────────> Analytics Data
└───────┘<─────────────────────────│             │
                                   └─────────────┘
                                          │
                                          │
                              ┌───────────┴───────────┐
                              │                       │
                         ┌────┴────┐            ┌─────┴─────┐
                         │   D1    │            │    D2     │
                         │  Users  │            │ Products  │
                         └─────────┘            └───────────┘
                              │                       │
                         ┌────┴────┐            ┌─────┴─────┐
                         │   D3    │            │    D4     │
                         │ Orders  │            │   Tools   │
                         └─────────┘            └───────────┘
```


#### LEVEL 1 DFD - USER

```
┌──────┐
│      │
│ User │
│      │
└──┬───┘
   │
   │ Registration Data
   ▼
┌──────────────────┐                    ┌─────────────┐
│   1.1 Register   │───────────────────>│  D1 Users   │
│      User        │<───────────────────│             │
└──────────────────┘                    └─────────────┘
   │
   │ Login Credentials
   ▼
┌──────────────────┐                    ┌─────────────┐
│   1.2 Login      │───────────────────>│  D1 Users   │
│      User        │<───────────────────│             │
└──────────────────┘                    └─────────────┘
   │
   │ Search Query
   ▼
┌──────────────────┐                    ┌─────────────┐
│  1.3 Browse      │<───────────────────│ D2 Products │
│    Products      │                    │             │
└──────────────────┘                    └─────────────┘
   │
   │ Product Selection
   ▼
┌──────────────────┐                    ┌─────────────┐
│  1.4 Manage      │───────────────────>│  D1 Users   │
│     Cart         │<───────────────────│   (Cart)    │
└──────────────────┘                    └─────────────┘
   │
   │ Customer Details
   ▼
┌──────────────────┐                    ┌─────────────┐
│  1.5 Checkout    │───────────────────>│  D3 Orders  │
│    & Order       │                    │             │
└──────────────────┘                    └─────────────┘
   │
   │ Payment Request
   ▼
┌──────────────────┐
│  1.6 Process     │────────> UPI Payment Gateway
│   UPI Payment    │<──────── Payment Confirmation
└──────────────────┘
   │
   │ Order Query
   ▼
┌──────────────────┐                    ┌─────────────┐
│  1.7 View        │<───────────────────│  D3 Orders  │
│    My Orders     │                    │             │
└──────────────────┘
```


#### LEVEL 1 DFD - FARMER

```
┌────────┐
│        │
│ Farmer │
│        │
└───┬────┘
    │
    │ Login Credentials
    ▼
┌──────────────────┐                    ┌─────────────┐
│   2.1 Farmer     │───────────────────>│  D1 Users   │
│      Login       │<───────────────────│             │
└──────────────────┘                    └─────────────┘
    │
    │ Product Data
    ▼
┌──────────────────┐                    ┌─────────────┐
│  2.2 Manage      │───────────────────>│ D2 Products │
│    Products      │<───────────────────│             │
└──────────────────┘                    └─────────────┘
    │
    │ Dashboard Request
    ▼
┌──────────────────┐                    ┌─────────────┐
│  2.3 View        │<───────────────────│ D2 Products │
│   Dashboard      │<───────────────────│ D3 Orders   │
└──────────────────┘                    └─────────────┘
    │
    │ Order Query
    ▼
┌──────────────────┐                    ┌─────────────┐
│  2.4 View        │<───────────────────│  D3 Orders  │
│    Orders        │                    │             │
└──────────────────┘                    └─────────────┘
    │
    │ Status Update
    ▼
┌──────────────────┐                    ┌─────────────┐
│  2.5 Update      │───────────────────>│  D3 Orders  │
│  Order Status    │────────> Email Notification
└──────────────────┘                    └─────────────┘
    │
    │ Tool Data
    ▼
┌──────────────────┐                    ┌─────────────┐
│  2.6 List        │───────────────────>│  D4 Tools   │
│    Tools         │                    │             │
└──────────────────┘                    └─────────────┘
```


#### LEVEL 1 DFD - ADMIN

```
┌───────┐
│       │
│ Admin │
│       │
└───┬───┘
    │
    │ Admin Credentials
    ▼
┌──────────────────┐                    ┌─────────────┐
│   3.1 Admin      │───────────────────>│  D1 Users   │
│     Login        │<───────────────────│             │
└──────────────────┘                    └─────────────┘
    │
    │ Stats Request
    ▼
┌──────────────────┐                    ┌─────────────┐
│  3.2 View        │<───────────────────│  D1 Users   │
│   Statistics     │<───────────────────│ D2 Products │
└──────────────────┘<───────────────────│  D3 Orders  │
                                        │  D4 Tools   │
    │                                   └─────────────┘
    │ Management Request
    ▼
┌──────────────────┐                    ┌─────────────┐
│  3.3 Manage      │───────────────────>│  D1 Users   │
│     Users        │<───────────────────│             │
└──────────────────┘                    └─────────────┘
    │
    │ Product Management
    ▼
┌──────────────────┐                    ┌─────────────┐
│  3.4 Manage      │───────────────────>│ D2 Products │
│    Products      │<───────────────────│             │
└──────────────────┘                    └─────────────┘
    │
    │ Order Management
    ▼
┌──────────────────┐                    ┌─────────────┐
│  3.5 Manage      │───────────────────>│  D3 Orders  │
│     Orders       │<───────────────────│             │
└──────────────────┘                    └─────────────┘
    │
    │ Tool Management
    ▼
┌──────────────────┐                    ┌─────────────┐
│  3.6 Manage      │───────────────────>│  D4 Tools   │
│     Tools        │<───────────────────│             │
└──────────────────┘                    └─────────────┘
```


#### LEVEL 2 DFD USER: REGISTER

```
┌──────┐    Registration Form    ┌─────────────────┐    Check Email    ┌─────────────┐
│      │ ────────────────────>   │  1.1.1 Validate │ ────────────────> │  D1 Users   │
│ User │                         │   Input Data    │ <──────────────── │             │
│      │ <────────────────────   │                 │                   └─────────────┘
└──────┘   Validation Result     └────────┬────────┘
                                          │
                                          │ Valid Data
                                          ▼
                                 ┌─────────────────┐    Hash Password  ┌─────────────┐
                                 │  1.1.2 Create   │ ────────────────> │  D1 Users   │
                                 │   User Account  │                   │             │
                                 └────────┬────────┘                   └─────────────┘
                                          │
                                          │ Account Created
                                          ▼
                                 ┌─────────────────┐
                                 │  1.1.3 Return   │ ────────────────> User
                                 │   User Profile  │
                                 └─────────────────┘
```


#### LEVEL 2 DFD USER: LOGIN

```
┌──────┐    Email & Password     ┌─────────────────┐    Find User      ┌─────────────┐
│      │ ────────────────────>   │  1.2.1 Validate │ ────────────────> │  D1 Users   │
│ User │                         │   Credentials   │ <──────────────── │             │
│      │ <────────────────────   │                 │                   └─────────────┘
└──────┘   Auth Result           └────────┬────────┘
                                          │
                                          │ User Found
                                          ▼
                                 ┌─────────────────┐
                                 │  1.2.2 Verify   │
                                 │    Password     │
                                 └────────┬────────┘
                                          │
                                          │ Password Match
                                          ▼
                                 ┌─────────────────┐
                                 │  1.2.3 Return   │ ────────────────> User
                                 │   User Session  │
                                 └─────────────────┘
```


#### LEVEL 2 DFD USER: BROWSE PRODUCTS

```
┌──────┐    Search/Filter Query  ┌─────────────────┐                   ┌─────────────┐
│      │ ────────────────────>   │  1.3.1 Process  │ ────────────────> │ D2 Products │
│ User │                         │     Query       │ <──────────────── │             │
│      │ <────────────────────   │                 │   Product List    └─────────────┘
└──────┘   Product Results       └────────┬────────┘
                                          │
                                          │ Product ID
                                          ▼
                                 ┌─────────────────┐                   ┌─────────────┐
                                 │  1.3.2 Get      │ ────────────────> │ D2 Products │
                                 │ Product Details │ <──────────────── │             │
                                 └─────────────────┘                   └─────────────┘
```


#### LEVEL 2 DFD USER: ADD TO CART

```
┌──────┐    Product + Quantity   ┌─────────────────┐    Get User Cart  ┌─────────────┐
│      │ ────────────────────>   │  1.4.1 Validate │ ────────────────> │  D1 Users   │
│ User │                         │     Product     │ <──────────────── │   (Cart)    │
│      │ <────────────────────   │                 │                   └─────────────┘
└──────┘   Cart Updated          └────────┬────────┘
                                          │
                                          │ Valid Product
                                          ▼
                                 ┌─────────────────┐    Update Cart    ┌─────────────┐
                                 │  1.4.2 Update   │ ────────────────> │  D1 Users   │
                                 │   User Cart     │                   │   (Cart)    │
                                 └─────────────────┘                   └─────────────┘
```


#### LEVEL 2 DFD USER: CHECKOUT

```
┌──────┐    Customer Details     ┌─────────────────┐                   ┌─────────────┐
│      │ ────────────────────>   │  1.5.1 Validate │ ────────────────> │  D1 Users   │
│ User │                         │  Customer Info  │ <──────────────── │   (Cart)    │
│      │                         │                 │                   └─────────────┘
└──────┘                         └────────┬────────┘
                                          │
                                          │ Valid Data
                                          ▼
                                 ┌─────────────────┐    Create Order   ┌─────────────┐
                                 │  1.5.2 Create   │ ────────────────> │  D3 Orders  │
                                 │     Order       │                   │             │
                                 └────────┬────────┘                   └─────────────┘
                                          │
                                          │ Order Created
                                          ▼
                                 ┌─────────────────┐    Clear Cart     ┌─────────────┐
                                 │  1.5.3 Clear    │ ────────────────> │  D1 Users   │
                                 │   User Cart     │                   │   (Cart)    │
                                 └────────┬────────┘                   └─────────────┘
                                          │
                                          ▼
                                      Order Confirmation ────────────> User
```


#### LEVEL 2 DFD USER: UPI PAYMENT

```
┌──────┐    Order Amount         ┌─────────────────┐
│      │ ────────────────────>   │  1.6.1 Generate │
│ User │                         │    UPI URL      │
│      │ <────────────────────   │                 │
└──────┘   UPI URL + QR Code     └────────┬────────┘
                                          │
                                          │ Mobile Device
                                          ▼
                                 ┌─────────────────┐
                                 │  1.6.2 Redirect │ ────────────────> UPI App
                                 │   to UPI App    │                   (GPay/PhonePe)
                                 └─────────────────┘
                                          │
                                          │ Desktop Device
                                          ▼
                                 ┌─────────────────┐
                                 │  1.6.3 Display  │ ────────────────> User (Scan QR)
                                 │    QR Code      │
                                 └────────┬────────┘
                                          │
                                          │ Payment Complete
                                          ▼
                                 ┌─────────────────┐
                                 │  1.6.4 Confirm  │ ────────────────> Order Success Page
                                 │    Payment      │
                                 └─────────────────┘
```


#### LEVEL 2 DFD USER: VIEW ORDERS

```
┌──────┐    User Identifier      ┌─────────────────┐    Query Orders   ┌─────────────┐
│      │ ────────────────────>   │  1.7.1 Fetch    │ ────────────────> │  D3 Orders  │
│ User │                         │   User Orders   │ <──────────────── │             │
│      │ <────────────────────   │                 │   Order List      └─────────────┘
└──────┘   Order History         └─────────────────┘
```


#### LEVEL 2 DFD FARMER: ADD PRODUCT

```
┌────────┐   Product Details     ┌─────────────────┐
│        │ ────────────────────> │  2.2.1 Validate │
│ Farmer │                       │   Product Data  │
│        │ <──────────────────── │                 │
└────────┘   Validation Result   └────────┬────────┘
                                          │
                                          │ Valid Data
                                          ▼
                                 ┌─────────────────┐    Save Product   ┌─────────────┐
                                 │  2.2.2 Create   │ ────────────────> │ D2 Products │
                                 │    Product      │                   │             │
                                 └────────┬────────┘                   └─────────────┘
                                          │
                                          │ Product Created
                                          ▼
                                 ┌─────────────────┐
                                 │  2.2.3 Return   │ ────────────────> Farmer
                                 │  Product Info   │
                                 └─────────────────┘
```


#### LEVEL 2 DFD FARMER: UPDATE ORDER STATUS

```
┌────────┐   Order ID + Status   ┌─────────────────┐    Find Order     ┌─────────────┐
│        │ ────────────────────> │  2.5.1 Validate │ ────────────────> │  D3 Orders  │
│ Farmer │                       │    Order        │ <──────────────── │             │
│        │                       │                 │                   └─────────────┘
└────────┘                       └────────┬────────┘
                                          │
                                          │ Valid Status
                                          ▼
                                 ┌─────────────────┐    Update Status  ┌─────────────┐
                                 │  2.5.2 Update   │ ────────────────> │  D3 Orders  │
                                 │  Order Status   │                   │             │
                                 └────────┬────────┘                   └─────────────┘
                                          │
                                          │ Status Updated
                                          ▼
                                 ┌─────────────────┐
                                 │  2.5.3 Send     │ ────────────────> Email Service
                                 │  Notification   │                   (Nodemailer)
                                 └────────┬────────┘
                                          │
                                          ▼
                                      Success Message ────────────────> Farmer
```


#### LEVEL 2 DFD ADMIN: MANAGE USERS

```
┌───────┐    Admin Header        ┌─────────────────┐    Verify Admin   ┌─────────────┐
│       │ ────────────────────>  │  3.3.1 Validate │ ────────────────> │  D1 Users   │
│ Admin │                        │   Admin Role    │ <──────────────── │             │
│       │                        │                 │                   └─────────────┘
└───────┘                        └────────┬────────┘
                                          │
                                          │ Admin Verified
                                          ▼
                                 ┌─────────────────┐    Get All Users  ┌─────────────┐
                                 │  3.3.2 Fetch    │ ────────────────> │  D1 Users   │
                                 │   All Users     │ <──────────────── │             │
                                 └────────┬────────┘                   └─────────────┘
                                          │
                                          │ Delete Request
                                          ▼
                                 ┌─────────────────┐    Remove User    ┌─────────────┐
                                 │  3.3.3 Delete   │ ────────────────> │  D1 Users   │
                                 │     User        │                   │             │
                                 └────────┬────────┘                   └─────────────┘
                                          │
                                          ▼
                                      Result ────────────────────────> Admin
```


#### LEVEL 2 DFD ADMIN: VIEW STATISTICS

```
┌───────┐    Stats Request       ┌─────────────────┐
│       │ ────────────────────>  │  3.2.1 Verify   │
│ Admin │                        │   Admin Access  │
│       │                        │                 │
└───────┘                        └────────┬────────┘
                                          │
                                          │ Access Granted
                                          ▼
                                 ┌─────────────────┐    Count Users    ┌─────────────┐
                                 │  3.2.2 Count    │ ────────────────> │  D1 Users   │
                                 │   All Entities  │ ────────────────> │ D2 Products │
                                 │                 │ ────────────────> │  D3 Orders  │
                                 │                 │ ────────────────> │  D4 Tools   │
                                 └────────┬────────┘                   └─────────────┘
                                          │
                                          │
                                          ▼
                                 ┌─────────────────┐    Sum Revenue    ┌─────────────┐
                                 │  3.2.3 Calculate│ ────────────────> │  D3 Orders  │
                                 │   Total Revenue │ <──────────────── │             │
                                 └────────┬────────┘                   └─────────────┘
                                          │
                                          ▼
                                      Statistics ────────────────────> Admin
                                      {users, products, orders, tools, revenue}
```


**2.3 DATABASE DESIGN**

The database design uses MongoDB, a document-oriented NoSQL database, to store and manage all core entities in a flexible and scalable structure. Collections are created for users, products, orders, and tools, each tailored to specific operational needs.

#### USERS COLLECTION

| Field | Type | Description |
|-------|------|-------------|
| _id | ObjectId | Unique identifier |
| name | String | User's full name |
| email | String | Unique email address |
| password | String | Hashed password (bcrypt) |
| role | String | 'user' or 'admin' |
| cart | Array | Embedded cart items |
| createdAt | Date | Account creation timestamp |

#### PRODUCTS COLLECTION

| Field | Type | Description |
|-------|------|-------------|
| _id | ObjectId | Unique identifier |
| name | String | Product name |
| description | String | Product description |
| imageUrl | String | Product image URL |
| category | String | Product category |
| price | Number | Price for direct buy |
| location | String | Farmer's location |
| farmer | String | Farmer's name |
| buyType | String | 'direct_buy', 'enquiry', 'auction' |
| startingBid | Number | Starting bid for auctions |
| currentPrice | Number | Current auction price |
| bids | Array | Embedded bid history |
| createdAt | Date | Listing creation timestamp |

#### ORDERS COLLECTION

| Field | Type | Description |
|-------|------|-------------|
| _id | ObjectId | Unique identifier |
| customerDetails | Object | Name, email, phone, preferences |
| products | Array | Ordered product list |
| totalAmount | Number | Total order value |
| farmer | String | Associated farmer name |
| status | String | 'Confirmed', 'Ready for Pickup', 'Completed' |
| createdAt | Date | Order placement timestamp |

#### TOOLS COLLECTION

| Field | Type | Description |
|-------|------|-------------|
| _id | ObjectId | Unique identifier |
| name | String | Tool name |
| description | String | Tool description |
| imageUrl | String | Tool image URL |
| category | String | Tool category |
| pricePerDay | Number | Rental price per day |
| location | String | Tool location |
| availability | Boolean | Availability status |
| listedBy | ObjectId | Reference to user |
| createdAt | Date | Listing creation timestamp |

**Key Points of MongoDB Database Design:**

```
Flexible schema allows easy addition of new fields and collections.
Collections are used instead of tables (as in relational databases).
Data is stored as JSON-like documents, supporting nested structures.
No need for strict foreign key constraints; relationships can be embedded or referenced.
High scalability and performance for large datasets and real-time operations.
Supports horizontal scaling and distributed data storage.
Ideal for applications requiring rapid development and evolving data models.
```


**2.4 SYSTEM DESIGN**

The system design is the most creative and challenging phase of system development life cycle. It is an approach for the creation of the proposed system, in which the logic and detailed structure of the proposed system is designed, which will help the system coding.

During this phase, the system's architecture, data flow, and user interactions are carefully mapped out to ensure clarity and efficiency. The design process involves breaking down the overall system into manageable modules, each with specific functions and responsibilities. Proper system design ensures seamless integration between components, supports scalability, and simplifies future maintenance.

#### SYSTEM ARCHITECTURE

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                            │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │           React + TypeScript + Vite + Tailwind           │  │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐     │  │
│  │  │  Pages  │  │Components│  │ Context │  │ Services│     │  │
│  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘     │  │
│  └──────────────────────────────────────────────────────────┘  │
└───────────────────────────────┬─────────────────────────────────┘
                                │ HTTP/REST API
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                         SERVER LAYER                            │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              Node.js + Express.js Server                  │  │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐     │  │
│  │  │  Auth   │  │ Products│  │  Orders │  │  Tools  │     │  │
│  │  │ Routes  │  │ Routes  │  │ Routes  │  │ Routes  │     │  │
│  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘     │  │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐                  │  │
│  │  │  Admin  │  │Dashboard│  │  User   │                  │  │
│  │  │ Routes  │  │ Routes  │  │  Cart   │                  │  │
│  │  └─────────┘  └─────────┘  └─────────┘                  │  │
│  └──────────────────────────────────────────────────────────┘  │
└───────────────────────────────┬─────────────────────────────────┘
                                │ Mongoose ODM
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                        DATABASE LAYER                           │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                    MongoDB Atlas                          │  │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐     │  │
│  │  │  Users  │  │Products │  │ Orders  │  │  Tools  │     │  │
│  │  └─────────┘  └─────────┘  └─────────┘  └─────────┘     │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                      EXTERNAL SERVICES                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │ UPI Payment │  │  Nodemailer │  │   Cloudinary│             │
│  │   Gateway   │  │   (Email)   │  │   (Images)  │             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
└─────────────────────────────────────────────────────────────────┘
```


**2.5 MODULE DESIGN**

Modular programming is a software design technique that emphasizes separating the functionality of a program into independent, interchangeable modules, such that each contains everything necessary to execute only one aspect of the desired functionality.

#### TOP DOWN APPROACH

Top down programming means starting at the top and working towards down. In this approach, we first consider the entire program and it is then subdivided into less complex, smaller and easily manageable forms until a stage is reached when further breakdown will serve no useful purpose. These tasks and sub-tasks form the basic functions in the program.

AgriConnect follows a top-down approach:

```
AgriConnect Platform
├── Authentication Module
│   ├── User Registration
│   ├── User Login
│   └── Session Management
├── Product Module
│   ├── Product Listing
│   ├── Product Search/Filter
│   ├── Product Details
│   └── Product CRUD (Farmer)
├── Cart Module
│   ├── Add to Cart
│   ├── Update Quantity
│   ├── Remove from Cart
│   └── Clear Cart
├── Order Module
│   ├── Checkout Process
│   ├── Order Creation
│   ├── Order Status Management
│   └── Order History
├── Payment Module
│   ├── UPI URL Generation
│   ├── QR Code Display
│   └── Payment Confirmation
├── Admin Module
│   ├── Dashboard Statistics
│   ├── User Management
│   ├── Product Management
│   ├── Order Management
│   └── Tool Management
├── Tool Rental Module
│   ├── Tool Listing
│   ├── Tool Details
│   └── Tool CRUD
└── Notification Module
    └── Email Notifications
```

**Advantages of Modular Design:**

```
Reusability of code across different parts of the application.
Easier maintenance and debugging of individual modules.
Parallel development by different team members.
Better testing through isolated unit tests.
Scalability through independent module updates.
```


## 3. DEVELOPMENT PHASE

### 3.1 SOFTWARE SPECIFICATION

#### SYSTEM ENVIRONMENT

```
1. Operating System : Windows 10 / Windows 11 / Linux / MacOS
2. Front End       : React 19, TypeScript, Tailwind CSS 4
3. Back End        : Node.js, Express.js 5
4. Database        : MongoDB (Atlas)
5. Build Tool      : Vite 7
6. Package Manager : npm
```

#### HARDWARE SPECIFICATION

```
1. Processor  : Intel Core i3 or higher
2. RAM        : 4 GB minimum (8 GB recommended)
3. Speed      : 2.0 GHz or above
4. Hard Disk  : 100 GB free space
5. Monitor    : 15" Color Display
6. Keyboard   : Standard 104 keys
7. Mouse      : Optical Mouse
8. Network    : Internet connection required
```

#### SOFTWARE DEPENDENCIES

**Backend (package.json):**
```
express: ^5.2.1
mongoose: ^9.3.0
bcryptjs: ^3.0.3
cors: ^2.8.5
dotenv: ^16.5.0
nodemailer: ^8.0.2
```

**Frontend (package.json):**
```
react: ^19.2.4
react-dom: ^19.2.4
react-router-dom: ^7.13.1
typescript: ~5.9.3
tailwindcss: ^4.2.1
vite: ^7.3.1
qrcode.react: ^4.2.0
react-icons: ^5.6.0
axios: ^1.13.6
```


### 3.2 CODING

Coding is a list of step-by-step instructions that get computers to do what you want them to do. This step is also called programming phase. The performance of software design starts by using program code with appropriate programming language and developing error-free executable programs in an efficient manner.

- The input to the coding phase is the design document.
- During the coding phase, every module identified and specified in the design document is independently coded and unit tested.
- A coding standard gives a regular form to the codes written by different engineers.
- It provides sound understanding of the code.
- It encourages good programming practice.

**Server.js (Backend Entry Point)**

```javascript
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

// --- Model Imports ---
const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const Tool = require('./models/Tool');

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Database Connection ---
const connectMongo = async () => {
  const primaryMongoUri = process.env.MONGO_URI?.trim();
  try {
    await mongoose.connect(primaryMongoUri, { serverSelectionTimeoutMS: 10000 });
    console.log('MongoDB connected successfully.');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

connectMongo();

// --- Authentication Routes ---
app.post('/api/auth/signup', async (req, res) => {
  let { name, email, password } = req.body;
  try {
    name = name?.trim();
    email = email?.trim().toLowerCase();
    password = password?.trim();

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error during sign up' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  let { email, password } = req.body;
  try {
    email = email?.trim().toLowerCase();
    password = password?.trim();

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    const isMatch = await user.matchPassword(password);
    if (isMatch) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      });
    } else {
      res.status(401).json({ message: 'Invalid password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error during login' });
  }
});

// --- Server Listener ---
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```


**User.js (User Model)**

```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  cart: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity: {
      type: Number,
      default: 1
    }
  }]
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare passwords
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
```


**CheckoutPage.tsx (UPI Payment Integration)**

```typescript
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { QRCodeSVG } from "qrcode.react";

// Configure your merchant UPI ID here
const MERCHANT_UPI_ID = "agriconnect@upi";
const MERCHANT_NAME = "AgriConnect";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState<{
    orderId: string;
    amount: number;
  } | null>(null);

  // Generate UPI payment URL
  const generateUPIUrl = (amount: number, orderId: string) => {
    const params = new URLSearchParams({
      pa: MERCHANT_UPI_ID,
      pn: MERCHANT_NAME,
      am: amount.toFixed(2),
      cu: "INR",
      tn: `Order ${orderId}`,
    });
    return `upi://pay?${params.toString()}`;
  };

  // Check if device is mobile
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  // Handle UPI payment
  const handleUPIPayment = () => {
    if (!orderDetails) return;
    const upiUrl = generateUPIUrl(orderDetails.amount, orderDetails.orderId);

    if (isMobile()) {
      window.location.href = upiUrl;
    } else {
      alert("Please scan the QR code with your UPI app");
    }
  };

  // Handle payment completion
  const handlePaymentComplete = () => {
    setShowPaymentModal(false);
    clearCart();
    navigate("/order-success");
  };

  return (
    <div>
      {/* Checkout Form */}
      {/* ... form fields ... */}

      {/* UPI Payment Modal */}
      {showPaymentModal && orderDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <h2 className="text-2xl font-bold">Complete Payment</h2>
            <p className="text-4xl font-bold text-green-600">
              ₹{orderDetails.amount.toFixed(2)}
            </p>

            {/* QR Code */}
            <div className="flex justify-center">
              <QRCodeSVG
                value={generateUPIUrl(orderDetails.amount, orderDetails.orderId)}
                size={180}
                level="H"
              />
            </div>

            {/* Mobile Payment Button */}
            {isMobile() && (
              <button onClick={handleUPIPayment}>
                Pay with UPI App
              </button>
            )}

            {/* Confirmation Button */}
            <button onClick={handlePaymentComplete}>
              I've Completed the Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
```


**AuthenticationContext.tsx (Auth State Management)**

```typescript
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('agriconnect_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem('agriconnect_user');
      }
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('agriconnect_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('agriconnect_user');
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```


## 4. TESTING AND IMPLEMENTATION

### 4.1 TESTING

It is the process of evaluating a system or its components with the intent to find whether it satisfies the related requirements. In computer hardware and software development, testing is used at key checkpoints in the overall process to identify whether objectives are being met.

**BLACK BOX TESTING**

Black box testing is also called functional testing. It is a software testing method used to test the software without knowing the internal structure of code or program. This type of testing mainly focuses on the software requirements and specifications.

In AgriConnect, black box testing is used for:
- User Registration and Login
- Product Browsing and Search
- Cart Operations
- Checkout and Payment
- Order Tracking

**WHITE BOX TESTING**

White box testing, also known as structural or glass box testing, involves examining the internal logic and structure of an application's code. This method requires knowledge of the software's internal workings.

In AgriConnect, white box testing is applied to:
- Password hashing and verification
- Cart calculation logic
- Order status transitions
- Admin authorization middleware

**UNIT TESTING**

Unit is the smallest testable part of software. Unit testing validates that individual units of source code are working properly. In AgriConnect, unit tests cover:
- User model methods (password hashing, comparison)
- Product validation
- Order creation logic
- API endpoint responses

**SYSTEM TESTING**

System testing ensures the application works correctly across different environments. For AgriConnect:
- Testing on different browsers (Chrome, Firefox, Safari)
- Testing on different devices (Desktop, Mobile, Tablet)
- Testing with different network conditions

**USER ACCEPTANCE TESTING**

Acceptance testing ensures that the delivered product meets user expectations. End users test:
- Complete purchase workflow
- Farmer product listing workflow
- Admin management workflow


### 4.2 TEST CASES

**Test Case Id : TC1**
Tests Used : Black Box Testing / White Box Testing
Function : New User Registration

| Sl No | Step | Test Data | Expected Result | Actual Result | Status |
|-------|------|-----------|-----------------|---------------|--------|
| 1 | Enter correct registration details and submit | Name: John, Email: john@test.com, Password: password123 | Registered Successfully | Registered Successfully | Success |
| 2 | Enter registration details with existing email | Email: john@test.com | User already exists error | User already exists error | Success |
| 3 | Enter email without @ symbol | Email: johntest.com | Invalid email format | Invalid email format | Success |
| 4 | Leave required fields empty | Name: (empty) | Please provide all fields | Please provide all fields | Success |
| 5 | Enter password less than 6 characters | Password: 123 | Password too short | Password too short | Success |

**Test Case 1: User Registration**


**Test Case Id : TC2**
Tests Used : Black Box Testing / White Box Testing
Correct Data : Email: john@test.com, Password: password123
Function : Registered User Login

| Sl No | Step | Test Data | Expected Result | Actual Result | Status |
|-------|------|-----------|-----------------|---------------|--------|
| 1 | Enter email only then click login | Email: john@test.com | Please enter password | Please enter password | Success |
| 2 | Enter incorrect password | Email: john@test.com, Password: wrong | Invalid password | Invalid password | Success |
| 3 | Enter correct credentials | Email: john@test.com, Password: password123 | Login successful, redirect to home | Login successful, redirect to home | Success |
| 4 | Enter admin credentials | Email: admin@agriconnect.com, Password: admin123 | Login successful, redirect to admin | Login successful, redirect to admin | Success |
| 5 | Enter non-existent email | Email: notexist@test.com | User not found | User not found | Success |

**Test Case 2: User Login**


**Test Case Id : TC3**
Tests Used : Black Box Testing / White Box Testing
Function : Product Listing (Farmer)

| Sl No | Step | Test Data | Expected Result | Actual Result | Status |
|-------|------|-----------|-----------------|---------------|--------|
| 1 | Submit product with all required fields | Name, Description, Price, Category, Image URL | Product created successfully | Product created successfully | Success |
| 2 | Submit product without name | Name: (empty) | Name is required error | Name is required error | Success |
| 3 | Submit product with invalid category | Category: InvalidCategory | Invalid category error | Invalid category error | Success |
| 4 | Submit auction product without starting bid | BuyType: auction, StartingBid: (empty) | Starting bid required | Starting bid required | Success |
| 5 | Update existing product | Updated description | Product updated successfully | Product updated successfully | Success |

**Test Case 3: Product Listing**


**Test Case Id : TC4**
Tests Used : Black Box Testing / White Box Testing
Function : Place Order (Checkout)

| Sl No | Step | Test Data | Expected Result | Actual Result | Status |
|-------|------|-----------|-----------------|---------------|--------|
| 1 | Submit checkout with all details | Name, Email, Phone, Products | Order created successfully | Order created successfully | Success |
| 2 | Submit checkout without phone | Phone: (empty) | Phone is required | Phone is required | Success |
| 3 | Submit checkout with empty cart | Products: [] | Cart is empty error | Cart is empty error | Success |
| 4 | Select Pay Online option | PaymentMethod: online | Show UPI payment modal | Show UPI payment modal | Success |
| 5 | Confirm payment completion | Click "I've Completed Payment" | Redirect to success page | Redirect to success page | Success |

**Test Case 4: Place Order**


## 5. SCREEN LAYOUTS

#### HOME PAGE
The home page features a hero section with animated 3D elements, featured product collections, live auction section, tool rental preview, and quick navigation to all platform features.

#### LOGIN PAGE
Clean login form with email and password fields, validation feedback, remember me option, and links to registration and password recovery.

#### SIGNUP PAGE
Registration form with name, email, and password fields, real-time validation, and automatic redirect to login after successful registration.

#### PRODUCTS PAGE
Grid layout displaying all products with category filters, search functionality, price display, and quick add-to-cart buttons.

#### PRODUCT DETAIL PAGE
Detailed product view with large image, description, price, farmer information, location, and add-to-cart functionality with quantity selection.

#### CART PAGE
Shopping cart with product list, quantity controls, price calculations, remove item options, and proceed to checkout button.

#### CHECKOUT PAGE
Customer information form with name, email, phone, preferred pickup time, payment method selection (UPI/Cash), and order summary.

#### UPI PAYMENT MODAL
Payment modal displaying amount, QR code for scanning, UPI app redirect button for mobile, UPI ID with copy option, and payment confirmation button.

#### ORDER SUCCESS PAGE
Confirmation page showing order details, booking reference, estimated pickup information, and navigation to order history.

#### MY ORDERS PAGE
Order history list with booking reference, status badges, farmer contact information, pickup location, WhatsApp contact button, and map link.

#### FARMER DASHBOARD
Dashboard showing product count, order count, revenue statistics, recent orders list, and quick actions for product management.

#### SELL PRODUCT PAGE
Product listing form with fields for name, description, category, price, buy type, image URL, and location.

#### ADMIN DASHBOARD
Platform overview with statistics cards (users, products, orders, tools, revenue), and management tables for all entities.

#### ABOUT PAGE
Modern about page with hero section, statistics, mission statement, how it works timeline, core values, testimonials, and call-to-action.

#### CONTACT PAGE
Contact page with contact method cards, message form with validation, FAQ accordion, business hours, social media links, and Google Maps embed.


## 6. CONCLUSION

AgriConnect successfully implements a complete agricultural marketplace platform with role-based control, seamless product-to-order workflows, and integrated UPI payment support. The project demonstrates practical integration of modern frontend and backend technologies with domain-specific e-commerce logic.

**Key Achievements:**

```
Complete marketplace workflow from product discovery to order completion.
UPI payment integration with QR code support for seamless transactions.
Modern, responsive UI with consistent design language across all pages.
Role-based access control for users, farmers, and administrators.
Email notifications for order status updates.
Tool rental marketplace for equipment sharing.
AI-assisted farmer support tools in Farmers Area.
```

**ADVANTAGES OF AGRICONNECT**

```
Provides a unified platform for agricultural commerce, connecting farmers directly with customers.
Implements role-based access control, ensuring appropriate permissions for all users.
Offers seamless UPI payment integration, supporting India's digital payment ecosystem.
Features a modern, responsive design that works across all devices.
Enables farmers to manage products and track orders through dedicated dashboard.
```

**LIMITATIONS OF AGRICONNECT**

```
Payment verification is manual (user confirms completion) rather than automatic.
No real-time chat or messaging between farmers and customers.
Limited to pickup model; no delivery tracking integration yet.
Authentication uses session storage rather than JWT tokens.
```


### 6.1 FUTURE SCOPE

Future enhancements for the platform aim to further improve efficiency, scalability, and user experience. By leveraging advanced technologies and integrating new features, the system can adapt to evolving industry needs and support broader adoption.

**Planned Enhancements:**

```
Implement JWT-based authentication for improved security.
Integrate Razorpay payment gateway with automatic payment verification.
Add real-time notifications using WebSocket or push channels.
Implement delivery tracking with GPS integration.
Build dedicated mobile app clients using React Native.
Add multi-language support for regional accessibility.
Implement farmer verification and trust badges.
Add advanced analytics for farmers (sales trends, demand forecasting).
Integrate with weather APIs for real-time farming insights.
Add machine learning for crop price prediction.
Implement auction engine with anti-sniping and auto-bid support.
Add logistics partner integration for delivery services.
```


## 7. REFERENCES

**BOOKS OF REFERENCE**

1. Ian Sommerville, *Software Engineering*
2. Silberschatz, Korth, Sudarshan, *Database System Concepts*
3. Pressman & Maxim, *Software Engineering: A Practitioner's Approach*

**WEBLIOGRAPHY**

1. https://expressjs.com/ - Express.js Documentation
2. https://mongoosejs.com/ - Mongoose Documentation
3. https://www.mongodb.com/docs/ - MongoDB Documentation
4. https://react.dev/ - React Documentation
5. https://vitejs.dev/ - Vite Documentation
6. https://tailwindcss.com/docs - Tailwind CSS Documentation
7. https://nodejs.org/docs/ - Node.js Documentation
8. https://www.typescriptlang.org/docs/ - TypeScript Documentation
9. https://www.npmjs.com/package/bcryptjs - bcryptjs Package
10. https://nodemailer.com/about/ - Nodemailer Documentation
11. https://www.npmjs.com/package/qrcode.react - qrcode.react Package
12. https://www.npci.org.in/what-we-do/upi/product-overview - UPI Documentation


## APPENDIX A: API ENDPOINTS

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | User registration |
| POST | `/api/auth/login` | User authentication |
| GET | `/api/products` | List all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Create product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |
| POST | `/api/products/:id/bids` | Place auction bid |
| GET | `/api/users/:userId/cart` | Get user cart |
| POST | `/api/users/:userId/cart` | Add to cart |
| DELETE | `/api/users/:userId/cart/:productId` | Remove from cart |
| DELETE | `/api/users/:userId/cart` | Clear cart |
| POST | `/api/orders` | Create order |
| GET | `/api/orders/myorders/:customerIdentifier` | Get user orders |
| PUT | `/api/orders/:orderId/status` | Update order status |
| GET | `/api/dashboard/products/:farmerName` | Farmer products |
| GET | `/api/dashboard/orders/:farmerName` | Farmer orders |
| GET | `/api/tools` | List all tools |
| GET | `/api/tools/:id` | Get single tool |
| POST | `/api/tools` | Create tool listing |
| GET | `/api/admin/stats` | Admin statistics |
| GET | `/api/admin/users` | List all users |
| DELETE | `/api/admin/users/:id` | Delete user |
| GET | `/api/admin/products` | List all products |
| DELETE | `/api/admin/products/:id` | Delete product |
| GET | `/api/admin/orders` | List all orders |
| PUT | `/api/admin/orders/:id/status` | Update order status |
| GET | `/api/admin/tools` | List all tools |
| DELETE | `/api/admin/tools/:id` | Delete tool |


## APPENDIX B: PROJECT STRUCTURE

```
AgriConnect/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Order.js
│   │   └── Tool.js
│   ├── Server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── NavBar/
│   │   │   ├── Footer/
│   │   │   └── homepage/
│   │   ├── context/
│   │   │   ├── AuthenticationContext.tsx
│   │   │   └── CartContext.tsx
│   │   ├── pages/
│   │   │   ├── About.tsx
│   │   │   ├── AdminDashboard.tsx
│   │   │   ├── CartPage.tsx
│   │   │   ├── CheckoutPage.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── DashboardPage.tsx
│   │   │   ├── FarmersArea.tsx
│   │   │   ├── LoginPage.tsx
│   │   │   ├── MyOrders.tsx
│   │   │   ├── OrderSuccessPage.tsx
│   │   │   ├── ProductDetail.tsx
│   │   │   ├── ProductsPage.tsx
│   │   │   ├── RentToolsPage.tsx
│   │   │   ├── SellYourProduct.tsx
│   │   │   ├── SignUpPage.tsx
│   │   │   └── ToolDetailPage.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── vite.config.ts
│   └── tailwind.config.js
└── REPORT.md
```

---

*Report Last Updated: March 2026*

**Contact Information:**
- Phone: +91 80783-90442
- WhatsApp: wa.me/918078390442
- Email: support@agriconnect.com
- Location: Pala, Kottayam, Kerala, India
