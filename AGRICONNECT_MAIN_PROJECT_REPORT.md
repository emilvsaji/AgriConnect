## MAIN PROJECT

Submitted in partial fulfilment of the requirements for the award of degree of

#### BACHELOR OF COMPUTER APPLICATIONS

```
Of
Mahatma Gandhi University
Kottayam
By
[Project Team]
```

```
Department of Computer Applications
[Your College Name]
```

## AGRICONNECT

## Department of Computer Applications

### CERTIFICATE

This is to certify that the main project report entitled **"AgriConnect - Smart Agri Marketplace and Farmer Services Platform"** is submitted in partial fulfilment of the requirements of Bachelor degree in Computer Applications.

### DECLARATION

I hereby declare that the main project work entitled **"AgriConnect"** is a report of original work done during the period of study under the supervision of project guides.

### ACKNOWLEDGEMENT

The team expresses sincere gratitude to the institution, department faculty, project guide, and all contributors who supported the successful completion of this project.

---

## TABLE OF CONTENTS

1. STUDY PHASE  
   1.1 INTRODUCTION  
   1.2 OBJECTIVES  
   1.3 TECHNOLOGIES MATERIALS AND METHODS  
   1.4 FEASIBILITY ANALYSIS  
   1.5 SYSTEM ANALYSIS  
   1.6 SYSTEM REQUIREMENT SPECIFICATION  
2. DESIGN PHASE  
   2.1 INTRODUCTION TO DATA FLOW DIAGRAM  
   2.2 DATA FLOW DIAGRAM (LEVEL 0 TO LEVEL 2)  
   2.3 DATABASE DESIGN  
   2.4 SYSTEM DESIGN  
   2.5 PRISMA DFD (LEVEL 0 TO LEVEL 2)  
3. DEVELOPMENT PHASE  
   3.1 SYSTEM ENVIRONMENT  
   3.2 CODING  
4. TESTING AND IMPLEMENTATION  
   4.1 TESTING  
   4.2 TEST CASES  
5. SCREEN LAYOUTS  
   5.1 FORM DESIGN  
6. CONCLUSION AND FUTURE SCOPE  
   6.1 CONCLUSION  
   6.2 FUTURE SCOPE  
7. BIBLIOGRAPHY  
   7.1 BOOKS OF REFERENCE  
   7.2 WEBLIOGRAPHY

---

## ABSTRACT

**AgriConnect** is a full-stack agriculture platform that connects **buyers, farmers, and administrators** in a unified digital ecosystem. The system enables users to browse farm products, place direct-buy orders, participate in live auctions, manage cart and checkout, and track booking/order status.

Farmers can list and manage products, monitor incoming bookings, update pickup status, and participate in equipment sharing through tool rentals. The platform also includes a dedicated **Farmers Area** with AI-assisted crop recommendations, disease insights, planting guidance, weather support, and market trend support.

Admins can monitor overall platform activity and manage users, products, orders, tools, and high-level business statistics. The backend is implemented with **Node.js + Express + MongoDB (Mongoose)** and the frontend is built with **React + Vite + TypeScript + Tailwind CSS**.

---

## LIST OF TABLES

1. `users` collection  
2. `products` collection  
3. `orders` collection  
4. `tools` collection  
5. `users.cart` embedded structure  
6. `products.bids` embedded structure

## LIST OF FIGURES

| Sl. No. | Figure Name | Page No. |
|---|---|---|
| 1 | Level 0 DFD | TBD |
| 2 | Level 1 DFD: Admin | TBD |
| 3 | Level 1 DFD: Farmer/Seller | TBD |
| 4 | Level 1 DFD: Buyer/User | TBD |
| 5 | Level 2 DFD: Admin-Login and Authorization | TBD |
| 6 | Level 2 DFD: Admin-Manage Users/Products/Orders/Tools | TBD |
| 7 | Level 2 DFD: User-Register and Login | TBD |
| 8 | Level 2 DFD: User-Browse Product and Place Bid | TBD |
| 9 | Level 2 DFD: User-Cart, Checkout, and My Orders | TBD |
| 10 | Level 2 DFD: Farmer-List Product and Update Booking Status | TBD |
| 11 | Level 2 DFD: Farmer-List and Manage Tool Rentals | TBD |
| 12 | PRISMA Level 0 | TBD |
| 13 | PRISMA Level 1 | TBD |
| 14 | PRISMA Level 2 | TBD |

---

## 1. STUDY PHASE

### 1.1 INTRODUCTION

AgriConnect addresses practical problems in local agriculture commerce by creating a single platform where customers can buy directly from farmers, farmers can manage listings and bookings, and administrators can supervise operations. The system provides:

- **Buyer/User services**: authentication, product discovery, cart, checkout, bidding, and order tracking.
- **Farmer/Seller services**: product listing/editing, dashboard monitoring, booking status updates, and tool listing.
- **Admin services**: platform-wide management for users, products, orders, tools, and business statistics.
- **Farmer assistance services**: AI-assisted recommendations, disease and market support in Farmers Area.

### 1.2 OBJECTIVES

- Build a direct farmer-to-customer marketplace for transparent farm commerce.
- Provide multiple sale models: direct buy, enquiry-based, and live auction.
- Implement reliable checkout and pickup-oriented booking workflows.
- Enable farmers to manage stock/listings and booking lifecycle effectively.
- Enable administrators to control and moderate the platform.
- Provide digital agriculture support tools for modern farming decisions.
- Use a scalable web stack and modular architecture for future extension.

### 1.3 TECHNOLOGIES MATERIALS AND METHODS

#### 1.3.1 DATABASE TOOL: MONGODB

MongoDB is used for document-oriented storage of users, products, orders, tools, and embedded cart/bid data structures. Mongoose is used for schema-level validations and model operations.

#### 1.3.2 PROGRAMMING TOOLS

- **Node.js + Express 5** for backend APIs.
- **Mongoose** for database modeling and CRUD workflows.
- **bcryptjs** for password hashing.
- **Nodemailer** for order status email notifications.
- **React 19 + TypeScript + Vite** for frontend UI and routing.
- **Tailwind CSS** with React icon libraries for modern UI/UX.

#### 1.3.3 METHODS

- Component-based frontend design with reusable pages and contexts.
- REST API integration with role-aware frontend behavior.
- State and persistence using React context + localStorage for auth.
- Input validation on both frontend and backend.
- Role checks for admin operations through request header-based guard.

### 1.4 FEASIBILITY ANALYSIS

#### 1.4.1 TECHNICAL FEASIBILITY

The architecture is technically feasible because:

- Backend models are clearly separated (`User`, `Product`, `Order`, `Tool`).
- APIs cover full marketplace lifecycle: auth, listing, checkout, status updates.
- Frontend pages are modular and mapped to backend domain routes.
- Admin control flows are separated from user flows.
- AI helper module is isolated under Farmers Area and can be evolved independently.

#### 1.4.2 ECONOMIC FEASIBILITY

- Entire stack is based on open-source tools, reducing licensing cost.
- Vite + React development flow decreases development time.
- MongoDB document model supports flexible schema evolution.
- No mandatory proprietary infrastructure in current stage.

#### 1.4.3 OPERATIONAL FEASIBILITY

- UI is role-friendly for users, farmers, and admins.
- Product and booking life cycle supports practical farm pickup workflows.
- Tool rental flow increases value for users and farmers.
- Admin dashboards improve moderation and operational control.

### 1.5 SYSTEM ANALYSIS

#### 1.5.1 EXISTING SYSTEM CONTEXT

Traditional farm selling channels are often fragmented, middleman-dependent, and weak in digital transparency. Buyers frequently lack direct access to local producers and real-time listing visibility.

#### 1.5.2 LIMITATIONS IN EXISTING APPROACHES

- Limited direct communication between farmer and customer.
- Manual/phone-based booking and status tracking.
- No unified view for inventory, orders, and auction interactions.
- Weak centralized moderation and analytics for platform operators.

#### 1.5.3 PROPOSED SYSTEM (AGRICONNECT)

AgriConnect unifies marketplace operations, farmer listings, bidding, booking, admin control, and farmer-assistive intelligence into a single web platform.

#### 1.5.4 ADVANTAGES

- End-to-end digital commerce workflow for agricultural products.
- Role-based operational views (User/Farmer/Admin).
- Direct-buy, enquiry, and auction capabilities in one product model.
- Order lifecycle with status transitions and optional email updates.
- Additional equipment rental and AI guidance modules.

#### 1.5.5 CHALLENGES

- Maintaining consistency in auction timing and bid updates.
- Ensuring secure role-based controls with current lightweight auth approach.
- Handling scale when products, bids, and orders increase.
- Standardizing naming and environment conventions across modules.

### 1.6 SYSTEM REQUIREMENT SPECIFICATION

#### SYSTEM MODULES

1. **User Module**
   - Sign up / sign in
   - Browse products and view details
   - Add/remove cart items and checkout
   - Place bids for auction products
   - Track personal orders and booking status

2. **Farmer Module**
   - Create/edit/delete product listings
   - Manage own orders and update status
   - View farmer dashboard statistics
   - List equipment for rental marketplace

3. **Tool Rental Module**
   - Browse available farming tools
   - Filter/sort by category and availability
   - Post new tool listings
   - View tool details and owner information

4. **Admin Module**
   - View platform overview statistics
   - Manage users (view/delete)
   - Manage products and tools (view/delete)
   - Monitor and update order status

5. **Farmer Support (AI) Module**
   - Crop recommendation support
   - Disease identification guidance
   - Planting guidance and weather insights
   - Market trend insights

---

## 2. DESIGN PHASE

### 2.1 INTRODUCTION TO DATA FLOW DIAGRAM

A DFD represents the movement of data among external entities, processes, and data stores. For AgriConnect, DFDs model the marketplace, farmer workflows, and administrative governance.

### 2.2 DATA FLOW DIAGRAM

#### 2.2.1 LEVEL 0 DFD (CONTEXT)

```text
[Buyer/User] ---- request ---->
[Farmer] -------- request ---->   ( AgriConnect Marketplace System )   <---- request ---- [Admin]

( AgriConnect Marketplace System ) ---- response ----> [Buyer/User]
( AgriConnect Marketplace System ) ---- response ----> [Farmer]
( AgriConnect Marketplace System ) ---- response ----> [Admin]

Data Stores:
  D1 Users
  D2 Products
  D3 Orders
  D4 Tools
  D5 Embedded Cart (inside Users)
  D6 Embedded Bids (inside Products)
```

**Working of Level 0 DFD:**  
At context level, AgriConnect is treated as one process receiving and responding to three actors: Buyer/User, Farmer, and Admin. All business workflows interact with the core stores (users, products, orders, and tools), with cart and bids handled as embedded structures.

#### 2.2.2 FIRST LEVEL DFD FOR ADMIN

```text
[Admin] --request--> (Admin Login/Auth 1.1) -----------------------> [Admin]
[Admin] --request--> (View Platform Stats 1.2) --------------------> [Admin]
[Admin] --request--> (Manage Users 1.3) ---------------------------> [Admin]
[Admin] --request--> (Manage Products 1.4) ------------------------> [Admin]
[Admin] --request--> (Manage Orders 1.5) --------------------------> [Admin]
[Admin] --request--> (Manage Tools 1.6) ---------------------------> [Admin]
```

**Working of First Level DFD for Admin:**  
Admin requests are validated through role checks and then routed to analytics and moderation processes. Each process accesses its respective store and returns an action status or dataset to the admin dashboard.

#### 2.2.3 FIRST LEVEL DFD FOR FARMER/SELLER

```text
[Farmer] --request--> (Farmer Login/Auth 2.1) ---------------------> [Farmer]
[Farmer] --request--> (Create/Update Product 2.2) -----------------> [Farmer]
[Farmer] --request--> (View Own Product Dashboard 2.3) ------------> [Farmer]
[Farmer] --request--> (View and Update Order Status 2.4) ----------> [Farmer]
[Farmer] --request--> (List Tool for Rent 2.5) --------------------> [Farmer]
```

**Working of Level 1 DFD for Farmer:**  
Farmer requests are handled through product operations, dashboard retrieval, booking status management, and tool listing. System responses are returned after updates in products/orders/tools stores.

#### 2.2.4 FIRST LEVEL DFD FOR BUYER/USER

```text
[User] --request--> (User Services 3.0) ---------------------------> [User]
              --> (Register 3.1)
              --> (Login 3.2)
              --> (Browse/Filter Products 3.3)
              --> (View Product Detail 3.4)
              --> (Place Bid 3.5)
              --> (Manage Cart 3.6)
              --> (Checkout/Place Order 3.7)
              --> (Track My Orders 3.8)
```

**Working of First Level DFD for Users:**  
User interactions are decomposed into authentication, product discovery, bidding, cart operations, checkout, and order tracking. Each subprocess performs validations and returns user-facing results.

#### 2.2.5 SECOND LEVEL DFD FOR ADMIN

##### 2.2.5.1 LEVEL 2 DFD: ADMIN-LOGIN AND AUTHORIZATION

```text
[Admin] --request--> (Receive x-user-id 1.1.1)
                   --> (Validate user exists 1.1.2) ---------> D1 Users
                   --> (Check role=admin 1.1.3)
[Admin] <--response-- (Authorized / Forbidden)
```

**Working:**  
Admin endpoint access is guarded by middleware that validates user identity and role before allowing administrative actions.

##### 2.2.5.2 LEVEL 2 DFD: ADMIN-MANAGE USERS/PRODUCTS/ORDERS/TOOLS

```text
[Admin] --request--> (Fetch platform stats 1.2.1) --------> D1,D2,D3,D4
[Admin] --request--> (List/Delete users 1.3.1/1.3.2) -----> D1 Users
[Admin] --request--> (List/Delete products 1.4.1/1.4.2) --> D2 Products
[Admin] --request--> (List/Update orders 1.5.1/1.5.2) ----> D3 Orders
[Admin] --request--> (List/Delete tools 1.6.1/1.6.2) -----> D4 Tools
[Admin] <--response-- (Action status + updated records)
```

**Working:**  
Admin can review counts and execute moderation actions across all principal entities. Updates are persisted and reflected in dashboard responses.

#### 2.2.6 SECOND LEVEL DFD FOR BUYER/USER

##### 2.2.6.1 LEVEL 2 DFD: USER-REGISTER AND LOGIN

```text
[User] --request--> (Submit signup data 3.1.1)
                  --> (Validate uniqueness 3.1.2) ---------> D1 Users
                  --> (Hash password and create user 3.1.3)-> D1 Users
[User] <--response-- (Account created / error)

[User] --request--> (Submit credentials 3.2.1)
                  --> (Match user + password 3.2.2) -------> D1 Users
[User] <--response-- (Authenticated profile / error)
```

**Working:**  
Signup and login requests are validated server-side; password hashing and verification are done with bcrypt.

##### 2.2.6.2 LEVEL 2 DFD: USER-BROWSE PRODUCT AND PLACE BID

```text
[User] --request--> (Load products 3.3.1) ----------------> D2 Products
[User] --request--> (Load single product 3.4.1) ----------> D2 Products
[User] --request--> (Submit auction bid 3.5.1)
                  --> (Check auction window 3.5.2) -------> D2 Products
                  --> (Validate bid amount 3.5.3)
                  --> (Update current price + bid log 3.5.4)-> D2 Products(D6 bids)
[User] <--response-- (Product data / bid result)
```

**Working:**  
Users browse products and submit bids only for active auctions. System enforces timing and bid value constraints before updating auction state.

##### 2.2.6.3 LEVEL 2 DFD: USER-CART, CHECKOUT, AND MY ORDERS

```text
[User] --request--> (Add/Remove/Clear cart 3.6.1) --------> D1 Users(D5 cart)
[User] --request--> (Submit checkout data 3.7.1)
                  --> (Validate customer + products 3.7.2)
                  --> (Create order 3.7.3) ---------------> D3 Orders
[User] --request--> (Fetch personal orders 3.8.1) --------> D3 Orders
[User] <--response-- (Cart/order confirmation + history)
```

**Working:**  
Cart operations are managed per user; checkout composes final order records with customer details and product list; users retrieve order history by identifier.

#### 2.2.7 SECOND LEVEL DFD FOR FARMER/SELLER

##### 2.2.7.1 LEVEL 2 DFD: FARMER-LIST PRODUCT AND UPDATE BOOKING STATUS

```text
[Farmer] --request--> (Create/Edit/Delete product 2.2.1) --> D2 Products
[Farmer] --request--> (Load own dashboard data 2.3.1) ---> D2 Products, D3 Orders
[Farmer] --request--> (Update order status 2.4.1) -------> D3 Orders
                  --> (Send status email 2.4.2) ---------> Notification mail channel
[Farmer] <--response-- (Updated listings and order states)
```

**Working:**  
Farmer manages own listings and booking statuses. Status transitions are persisted, and email notifications are triggered when customer email is available.

##### 2.2.7.2 LEVEL 2 DFD: FARMER-LIST AND MANAGE TOOL RENTALS

```text
[Farmer] --request--> (Create tool listing 2.5.1) -------> D4 Tools
[Farmer] --request--> (View tool catalog 2.5.2) ---------> D4 Tools
[Farmer] <--response-- (Tool listing status + rental catalog)
```

**Working:**  
Farmer can publish tools for rent and users can discover tools through the rental module.

### 2.3 DATABASE DESIGN

AgriConnect uses MongoDB collections and embedded arrays:

1. **users**  
   Fields include name, email (unique), hashed password, role (`user|admin`), and embedded `cart` items.

2. **products**  
   Stores listing details, category, buy type (`direct_buy|enquiry|auction`), direct price, auction metadata, and embedded bids.

3. **orders**  
   Stores customer details, ordered items, total amount, status (`Confirmed|Ready for Pickup|Completed`), and associated farmer.

4. **tools**  
   Stores rental listing details, category, price/day, location, availability, and owner reference.

5. **embedded structures**  
   - `users.cart[]`: product references and quantity  
   - `products.bids[]`: bidder reference, amount, and timestamp

### 2.4 SYSTEM DESIGN

#### 2.4.1 ARCHITECTURE

- **Frontend**: React + TypeScript SPA with route-based pages.
- **Backend**: Express API server with domain endpoints.
- **Database**: MongoDB through Mongoose models.
- **Security**: Password hashing (bcrypt) + role checks for admin middleware.
- **Communication**: REST/JSON and optional email notifications via Nodemailer.

#### 2.4.2 ROUTE GROUPS

- `/api/auth`
- `/api/products`
- `/api/animal-products`
- `/api/users/:userId/cart`
- `/api/orders`
- `/api/dashboard`
- `/api/tools`
- `/api/admin`

### 2.5 PRISMA DFD (LEVEL 0 TO LEVEL 2)

> **Assumption used in this report:** PRISMA DFD is treated as a governance-focused DFD view emphasizing identity assurance, role safety, data integrity, and operational monitoring.

#### 2.5.1 PRISMA LEVEL 0

```text
[User] -----------------------> (AgriConnect PRISMA Governance Flow)
[Farmer] ---------------------> (AgriConnect PRISMA Governance Flow)
[Admin] ----------------------> (AgriConnect PRISMA Governance Flow)

(AgriConnect PRISMA Governance Flow) --> [User]   | trusted marketplace responses
(AgriConnect PRISMA Governance Flow) --> [Farmer] | controlled seller operations
(AgriConnect PRISMA Governance Flow) --> [Admin]  | auditable governance outputs

Governance Data Stores:
  <--> D1 Identity & Role Data (Users)
  <--> D2 Commerce Data (Products, Orders)
  <--> D3 Rental Data (Tools)
  <--> D4 Embedded State Logs (Cart, Bids)
```

**Working of PRISMA Level 0:**  
All actor requests enter one governance-aware process that validates identity and role, enforces operation constraints, and returns controlled outputs.

#### 2.5.2 PRISMA LEVEL 1

```text
Entities:
  [User], [Farmer], [Admin]

Processes:
  (P1 Identity Verification)
  (P2 Role Authorization)
  (P3 Commerce Integrity Checks)
  (P4 Auction/Order Consistency)
  (P5 Admin Moderation Control)
  (P6 Monitoring and Audit Metrics)

Flow:
  [User]   -> (P1) -> (P2) -> (P3/P4)
  [Farmer] -> (P1) -> (P2) -> (P3/P4)
  [Admin]  -> (P1) -> (P2) -> (P5)
  (P3),(P4),(P5) -> (P6) -> [Admin]

Store Mapping:
  (P1),(P2) <--> D1 Users
  (P3),(P4) <--> D2 Products, D3 Orders, D4 Cart/Bids
  (P5)      <--> D1,D2,D3,D4
  (P6)      <--> D1,D2,D3
```

**Working of PRISMA Level 1:**  
Responsibilities are split into identity, authorization, data checks, lifecycle consistency, moderation, and metrics. Each process maps to concrete AgriConnect stores.

#### 2.5.3 PRISMA LEVEL 2

```text
Detailed Controls:
  (P2.1 Credential Validation + Password Hash Verify)
       -> (P2.2 Role Guard Enforcement for Admin APIs)
       -> (P2.3 Input Validation for Product/Order/Tool Payloads)
       -> (P2.4 Auction Window + Bid Value Validation)
       -> (P2.5 Order Status Transition Control)
       -> (P2.6 Notification/Email Dispatch Monitoring)

Data Interaction:
  (P2.1),(P2.2) -> D1 Users
  (P2.3)        -> D2 Products, D3 Orders, D4 Tools
  (P2.4)        -> D2 Products(D6 bids)
  (P2.5)        -> D3 Orders
  (P2.6)        -> Email logs / operational traces
```

**Working of PRISMA Level 2:**  
Fine-grained controls are applied at critical points such as admin endpoint protection, payload validation, bid acceptance rules, and order lifecycle transitions.

---

## 3. DEVELOPMENT PHASE

### 3.1 SYSTEM ENVIRONMENT

- Node.js (recommended modern LTS)
- Express 5.2.1
- MongoDB + Mongoose 9.3.0
- bcryptjs 3.0.3
- Nodemailer 8.0.2
- React 19.2.4
- TypeScript 5.9.x
- Vite 7.3.1
- Tailwind CSS 4.2.1

### 3.2 CODING

Development follows modular coding:

- `backend/Server.js` for API routes and middleware.
- `backend/models/*` for domain schemas.
- `frontend/src/pages/*` for page-level workflows.
- `frontend/src/components/*` for reusable UI blocks.
- `frontend/src/context/*` for auth/cart state handling.

Additional coding focus:

- Input validation and status checks on server routes.
- Consistent UI design and responsive layouts in frontend.
- Separation of public, farmer, and admin use cases.

---

## 4. TESTING AND IMPLEMENTATION

### 4.1 TESTING

- Authentication tests: signup/login success and failure paths.
- Product CRUD tests: create, edit, delete, and fetch operations.
- Auction tests: invalid bid, out-of-window bid, valid high bid.
- Cart tests: add/remove/clear and duplicate handling.
- Checkout tests: required field validation and order persistence.
- Order status tests: valid transitions and invalid transition rejections.
- Admin authorization tests for protected routes.
- Tool listing tests for create/list/fetch/delete behavior.

### 4.2 TEST CASES

1. New user registration with unique and duplicate email.  
2. User login with correct and incorrect password.  
3. Product creation in `direct_buy`, `enquiry`, and `auction` modes.  
4. Auction bid acceptance only when amount and time conditions are valid.  
5. Cart add/remove/clear for a specific user.  
6. Checkout order creation with valid customer and product data.  
7. My Orders retrieval by customer identifier.  
8. Farmer order status update with confirmation email dispatch attempt.  
9. Admin stats retrieval with valid admin header and rejection without it.  
10. Tool listing creation and browsing flow.

---

## 5. SCREEN LAYOUTS

### 5.1 FORM DESIGN

#### User Screens

- Home / Landing page
- Login and Signup pages
- Product listing and Product detail
- Cart and Checkout
- Order success and My Orders
- Tool rentals and Tool detail

#### Farmer Screens

- Farmer Dashboard (products + bookings)
- Sell/Upload Product form
- Order status update controls
- Tool listing modal in rental module

#### Admin Screens

- Admin Dashboard overview
- Users management table
- Products moderation view
- Orders monitoring and status update
- Tools moderation view

#### Farmer Assistance Screens

- Farmers Area (crop recommendation)
- Disease analysis interface
- Market trend and weather sections
- Planting guidance workflow

---

## 6. CONCLUSION AND FUTURE SCOPE

### 6.1 CONCLUSION

AgriConnect successfully demonstrates an integrated agri-commerce platform combining product sales, auction support, booking/order management, tool rentals, and admin governance in one full-stack application. The project validates how modern web technologies can improve transparency and operational efficiency in farmer-to-customer commerce.

### 6.2 FUTURE SCOPE

- Introduce robust token-based authentication/authorization (JWT).
- Integrate real payment gateway and settlement ledger.
- Add real-time notifications (WebSocket or push channels).
- Add role-specific analytics for farmers (sales, conversion, bidding trends).
- Improve auction engine with anti-sniping and auto-bid support.
- Add logistics tracking and pickup OTP verification.
- Build dedicated mobile app clients for field use.

---

## 7. BIBLIOGRAPHY

### 7.1 BOOKS OF REFERENCE

1. Ian Sommerville, *Software Engineering*.  
2. Silberschatz, Korth, Sudarshan, *Database System Concepts*.  
3. Pressman & Maxim, *Software Engineering: A Practitioner’s Approach*.

### 7.2 WEBLIOGRAPHY

1. https://expressjs.com/  
2. https://mongoosejs.com/  
3. https://www.mongodb.com/docs/  
4. https://react.dev/  
5. https://vitejs.dev/  
6. https://tailwindcss.com/docs  
7. https://nodemailer.com/about/  
8. https://www.npmjs.com/package/bcryptjs