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
   3.3 KEY FEATURES IMPLEMENTED
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

The platform features **UPI payment integration** with QR code support for seamless online payments through Google Pay, PhonePe, Paytm, and other UPI apps. Users can scan QR codes or use UPI intent links on mobile devices for instant payment.

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
| 15 | UPI Payment Flow | TBD |

---

## 1. STUDY PHASE

### 1.1 INTRODUCTION

AgriConnect addresses practical problems in local agriculture commerce by creating a single platform where customers can buy directly from farmers, farmers can manage listings and bookings, and administrators can supervise operations. The system provides:

- **Buyer/User services**: authentication, product discovery, cart, checkout with UPI payment, bidding, and order tracking.
- **Farmer/Seller services**: product listing/editing, dashboard monitoring, booking status updates, and tool listing.
- **Admin services**: platform-wide management for users, products, orders, tools, and business statistics.
- **Farmer assistance services**: AI-assisted recommendations, disease and market support in Farmers Area.
- **Payment services**: UPI payment integration with QR code generation and mobile app redirection.

### 1.2 OBJECTIVES

- Build a direct farmer-to-customer marketplace for transparent farm commerce.
- Provide multiple sale models: direct buy, enquiry-based, and live auction.
- Implement reliable checkout and pickup-oriented booking workflows.
- Enable seamless UPI-based online payments with QR code support.
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
- **Tailwind CSS 4** with React icon libraries for modern UI/UX.
- **qrcode.react** for UPI payment QR code generation.

#### 1.3.3 METHODS

- Component-based frontend design with reusable pages and contexts.
- REST API integration with role-aware frontend behavior.
- State and persistence using React context + localStorage for auth.
- Input validation on both frontend and backend.
- Role checks for admin operations through request header-based guard.
- UPI Intent protocol for mobile payment redirection.

### 1.4 FEASIBILITY ANALYSIS

#### 1.4.1 TECHNICAL FEASIBILITY

The architecture is technically feasible because:

- Backend models are clearly separated (`User`, `Product`, `Order`, `Tool`).
- APIs cover full marketplace lifecycle: auth, listing, checkout, status updates.
- Frontend pages are modular and mapped to backend domain routes.
- Admin control flows are separated from user flows.
- AI helper module is isolated under Farmers Area and can be evolved independently.
- UPI payment integration uses standard UPI Intent protocol compatible with all UPI apps.

#### 1.4.2 ECONOMIC FEASIBILITY

- Entire stack is based on open-source tools, reducing licensing cost.
- Vite + React development flow decreases development time.
- MongoDB document model supports flexible schema evolution.
- No mandatory proprietary infrastructure in current stage.
- UPI payment integration is free (no transaction fees for basic implementation).

#### 1.4.3 OPERATIONAL FEASIBILITY

- UI is role-friendly for users, farmers, and admins.
- Product and booking life cycle supports practical farm pickup workflows.
- Tool rental flow increases value for users and farmers.
- Admin dashboards improve moderation and operational control.
- UPI payments provide familiar payment experience for Indian users.

### 1.5 SYSTEM ANALYSIS

#### 1.5.1 EXISTING SYSTEM CONTEXT

Traditional farm selling channels are often fragmented, middleman-dependent, and weak in digital transparency. Buyers frequently lack direct access to local producers and real-time listing visibility.

#### 1.5.2 LIMITATIONS IN EXISTING APPROACHES

- Limited direct communication between farmer and customer.
- Manual/phone-based booking and status tracking.
- No unified view for inventory, orders, and auction interactions.
- Weak centralized moderation and analytics for platform operators.
- Limited online payment options for rural commerce.

#### 1.5.3 PROPOSED SYSTEM (AGRICONNECT)

AgriConnect unifies marketplace operations, farmer listings, bidding, booking, admin control, UPI payments, and farmer-assistive intelligence into a single web platform.

#### 1.5.4 ADVANTAGES

- End-to-end digital commerce workflow for agricultural products.
- Role-based operational views (User/Farmer/Admin).
- Direct-buy, enquiry, and auction capabilities in one product model.
- Order lifecycle with status transitions and optional email updates.
- UPI payment with QR code for desktop and mobile app redirection.
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
   - UPI payment with QR code scanning
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

6. **Payment Module**
   - UPI Intent URL generation
   - QR code generation for desktop users
   - Mobile app redirection for UPI payments
   - Payment confirmation workflow

---

## 2. DESIGN PHASE

### 2.1 INTRODUCTION TO DATA FLOW DIAGRAM

A DFD represents the movement of data among external entities, processes, and data stores. For AgriConnect, DFDs model the marketplace, farmer workflows, payment processing, and administrative governance.

### 2.2 DATA FLOW DIAGRAM

#### 2.2.1 LEVEL 0 DFD (CONTEXT)

```text
[Buyer/User] ---- request ---->
[Farmer] -------- request ---->   ( AgriConnect Marketplace System )   <---- request ---- [Admin]

( AgriConnect Marketplace System ) ---- response ----> [Buyer/User]
( AgriConnect Marketplace System ) ---- response ----> [Farmer]
( AgriConnect Marketplace System ) ---- response ----> [Admin]

External Systems:
  UPI Payment Gateway (GPay, PhonePe, Paytm)
  Email Notification Service (Nodemailer)

Data Stores:
  D1 Users
  D2 Products
  D3 Orders
  D4 Tools
  D5 Embedded Cart (inside Users)
  D6 Embedded Bids (inside Products)
```

**Working of Level 0 DFD:**
At context level, AgriConnect is treated as one process receiving and responding to three actors: Buyer/User, Farmer, and Admin. All business workflows interact with the core stores (users, products, orders, and tools), with cart and bids handled as embedded structures. External UPI apps handle payment processing.

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
              --> (Process UPI Payment 3.8)
              --> (Track My Orders 3.9)
```

**Working of First Level DFD for Users:**
User interactions are decomposed into authentication, product discovery, bidding, cart operations, checkout, UPI payment processing, and order tracking. Each subprocess performs validations and returns user-facing results.

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

##### 2.2.6.3 LEVEL 2 DFD: USER-CART, CHECKOUT, PAYMENT AND MY ORDERS

```text
[User] --request--> (Add/Remove/Clear cart 3.6.1) --------> D1 Users(D5 cart)
[User] --request--> (Submit checkout data 3.7.1)
                  --> (Validate customer + products 3.7.2)
                  --> (Create order 3.7.3) ---------------> D3 Orders
[User] --request--> (Generate UPI URL 3.8.1)
                  --> (Display QR code 3.8.2)
                  --> (Redirect to UPI app 3.8.3) --------> [UPI App]
[User] --request--> (Confirm payment 3.8.4)
[User] --request--> (Fetch personal orders 3.9.1) --------> D3 Orders
[User] <--response-- (Cart/order confirmation + history)
```

**Working:**
Cart operations are managed per user; checkout composes final order records with customer details and product list. For online payment, UPI URL is generated and displayed as QR code or redirected to mobile UPI apps. Users retrieve order history by identifier.

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
   Stores customer details (name, email, phone, paymentMethod), ordered items, total amount, status (`Confirmed|Ready for Pickup|Completed`), and associated farmer.

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
- **Payments**: UPI Intent protocol with QR code generation (qrcode.react).

#### 2.4.2 ROUTE GROUPS

- `/api/auth` - Authentication (signup, login)
- `/api/products` - Product CRUD and bidding
- `/api/animal-products` - Animal category products
- `/api/users/:userId/cart` - User cart operations
- `/api/orders` - Order creation and tracking
- `/api/dashboard` - Farmer dashboard data
- `/api/tools` - Tool rental CRUD
- `/api/admin` - Admin management endpoints

#### 2.4.3 FRONTEND ROUTES

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Landing page with hero, collections, auctions |
| `/products` | ProductsPage | Product listing with filters |
| `/product/:productId` | ProductDetail | Single product view |
| `/cart` | CartPage | Shopping cart |
| `/checkout` | CheckoutPage | Order form with UPI payment |
| `/order-success` | OrderSuccessPage | Order confirmation |
| `/profile` | MyOrders | User order history |
| `/login` | LoginPage | User login |
| `/signup` | SignupPage | User registration |
| `/upload-product` | SellYourProduct | Product listing form |
| `/dashboard` | DashboardPage | Farmer dashboard |
| `/admin` | AdminDashboard | Admin control panel |
| `/farmers-area` | FarmersArea | AI tools for farmers |
| `/rent-tools` | RentToolsPage | Tool rental marketplace |
| `/rent-tools/:toolId` | ToolDetailPage | Tool details |
| `/about` | About | About page |
| `/contact` | Contact | Contact page |

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
  <--> D5 Payment Transaction Logs
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
  (P6 Payment Validation)
  (P7 Monitoring and Audit Metrics)

Flow:
  [User]   -> (P1) -> (P2) -> (P3/P4/P6)
  [Farmer] -> (P1) -> (P2) -> (P3/P4)
  [Admin]  -> (P1) -> (P2) -> (P5)
  (P3),(P4),(P5),(P6) -> (P7) -> [Admin]

Store Mapping:
  (P1),(P2) <--> D1 Users
  (P3),(P4) <--> D2 Products, D3 Orders, D4 Cart/Bids
  (P5)      <--> D1,D2,D3,D4
  (P6)      <--> D3 Orders, D5 Payment Logs
  (P7)      <--> D1,D2,D3,D5
```

**Working of PRISMA Level 1:**
Responsibilities are split into identity, authorization, data checks, lifecycle consistency, payment validation, moderation, and metrics. Each process maps to concrete AgriConnect stores.

#### 2.5.3 PRISMA LEVEL 2

```text
Detailed Controls:
  (P2.1 Credential Validation + Password Hash Verify)
       -> (P2.2 Role Guard Enforcement for Admin APIs)
       -> (P2.3 Input Validation for Product/Order/Tool Payloads)
       -> (P2.4 Auction Window + Bid Value Validation)
       -> (P2.5 Order Status Transition Control)
       -> (P2.6 UPI URL Generation and Validation)
       -> (P2.7 Notification/Email Dispatch Monitoring)

Data Interaction:
  (P2.1),(P2.2) -> D1 Users
  (P2.3)        -> D2 Products, D3 Orders, D4 Tools
  (P2.4)        -> D2 Products(D6 bids)
  (P2.5)        -> D3 Orders
  (P2.6)        -> D3 Orders, UPI Payment Gateway
  (P2.7)        -> Email logs / operational traces
```

**Working of PRISMA Level 2:**
Fine-grained controls are applied at critical points such as admin endpoint protection, payload validation, bid acceptance rules, order lifecycle transitions, and UPI payment URL generation.

---

## 3. DEVELOPMENT PHASE

### 3.1 SYSTEM ENVIRONMENT

- Node.js (v18+ LTS recommended)
- Express 5.2.1
- MongoDB + Mongoose 9.3.0
- bcryptjs 3.0.3
- Nodemailer 8.0.2
- React 19.2.4
- TypeScript 5.9.x
- Vite 7.3.1
- Tailwind CSS 4.2.1
- qrcode.react 4.2.0
- react-icons 5.6.0
- react-router-dom 7.13.1

### 3.2 CODING

Development follows modular coding:

- `backend/Server.js` for API routes and middleware.
- `backend/models/*` for domain schemas (User, Product, Order, Tool).
- `frontend/src/pages/*` for page-level workflows.
- `frontend/src/components/*` for reusable UI blocks.
- `frontend/src/context/*` for auth/cart state handling.

Additional coding focus:

- Input validation and status checks on server routes.
- Consistent UI design and responsive layouts in frontend.
- Separation of public, farmer, and admin use cases.
- UPI payment integration with QR code generation.

### 3.3 KEY FEATURES IMPLEMENTED

#### 3.3.1 UPI PAYMENT INTEGRATION

The checkout page supports UPI-based online payments:

```typescript
// UPI URL Generation
const generateUPIUrl = (amount: number, orderId: string) => {
  const params = new URLSearchParams({
    pa: MERCHANT_UPI_ID,      // Payee VPA
    pn: MERCHANT_NAME,        // Payee Name
    am: amount.toFixed(2),    // Amount
    cu: "INR",                // Currency
    tn: `Order ${orderId}`,   // Transaction Note
  });
  return `upi://pay?${params.toString()}`;
};
```

Features:
- QR code display for desktop users (scan with any UPI app)
- Direct UPI app redirection on mobile devices
- Support for GPay, PhonePe, Paytm, and all UPI apps
- Copy UPI ID option for manual payment
- Payment confirmation workflow

#### 3.3.2 MODERN UI/UX DESIGN

- Gradient backgrounds with animated decorative elements
- Glass-morphism effects with backdrop blur
- Hover animations and scale transforms
- Responsive grid layouts
- Form validation with visual feedback
- Loading states and success animations

#### 3.3.3 CONTACT INFORMATION

Platform contact details:
- **Phone**: +91 80783-90442
- **WhatsApp**: wa.me/918078390442
- **Email**: support@agriconnect.com
- **Location**: Pala, Kottayam, Kerala, India

---

## 4. TESTING AND IMPLEMENTATION

### 4.1 TESTING

- Authentication tests: signup/login success and failure paths.
- Product CRUD tests: create, edit, delete, and fetch operations.
- Auction tests: invalid bid, out-of-window bid, valid high bid.
- Cart tests: add/remove/clear and duplicate handling.
- Checkout tests: required field validation and order persistence.
- Payment tests: UPI URL generation, QR code rendering, mobile redirect.
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
7. UPI payment modal display and QR code generation.
8. Mobile UPI intent redirection.
9. My Orders retrieval by customer identifier.
10. Farmer order status update with confirmation email dispatch attempt.
11. Admin stats retrieval with valid admin header and rejection without it.
12. Tool listing creation and browsing flow.

---

## 5. SCREEN LAYOUTS

### 5.1 FORM DESIGN

#### User Screens

- **Home / Landing page**: Hero section, latest collections, live auctions, rent tools
- **Login and Signup pages**: Form with validation, gradient design
- **Product listing**: Grid view with filters and search
- **Product detail**: Image, description, price, add to cart/bid
- **Cart**: Item list with quantity controls
- **Checkout**: Customer form with UPI payment modal
- **Order success**: Confirmation with order details
- **My Orders**: Order history with status tracking

#### Payment Screens

- **UPI Payment Modal**:
  - Amount display
  - QR code for scanning
  - UPI app icons (GPay, PhonePe, Paytm)
  - "Pay with UPI App" button (mobile)
  - UPI ID with copy button
  - Payment confirmation button

#### Farmer Screens

- **Farmer Dashboard**: Products + bookings overview
- **Sell/Upload Product**: Form with category, price, images
- **Order status update**: Status dropdown with email notification

#### Admin Screens

- **Admin Dashboard**: Stats cards, user/product/order/tool tables
- **Management views**: CRUD operations for all entities

#### Farmer Assistance Screens

- **Farmers Area**: AI tools interface
- **Crop recommendation**: Form-based guidance
- **Disease analysis**: Image/description input
- **Market trends**: Price and demand insights

#### Info Screens

- **About Page**:
  - Hero with stats
  - How It Works timeline
  - Core Values cards
  - Testimonials section
  - Commitments gallery
  - CTA section

- **Contact Page**:
  - Contact method cards
  - Message form with success state
  - FAQ accordion
  - Business hours
  - Social media links
  - Google Maps embed
  - WhatsApp integration

---

## 6. CONCLUSION AND FUTURE SCOPE

### 6.1 CONCLUSION

AgriConnect successfully demonstrates an integrated agri-commerce platform combining product sales, auction support, booking/order management, UPI payments, tool rentals, and admin governance in one full-stack application. The project validates how modern web technologies can improve transparency and operational efficiency in farmer-to-customer commerce.

Key achievements:
- Complete marketplace workflow from browsing to payment
- UPI payment integration with QR codes and mobile app support
- Modern, responsive UI with consistent design language
- Role-based access control for users, farmers, and admins
- Email notifications for order status updates
- Tool rental marketplace for equipment sharing
- AI-assisted farmer support tools

### 6.2 FUTURE SCOPE

- Introduce robust token-based authentication/authorization (JWT).
- Integrate payment gateway with automatic verification (Razorpay).
- Add real-time notifications (WebSocket or push channels).
- Add role-specific analytics for farmers (sales, conversion, bidding trends).
- Improve auction engine with anti-sniping and auto-bid support.
- Add logistics tracking and pickup OTP verification.
- Build dedicated mobile app clients for field use (React Native).
- Multi-language support for regional accessibility.
- Implement delivery tracking with GPS integration.
- Add farmer verification and trust badges.

---

## 7. BIBLIOGRAPHY

### 7.1 BOOKS OF REFERENCE

1. Ian Sommerville, *Software Engineering*.
2. Silberschatz, Korth, Sudarshan, *Database System Concepts*.
3. Pressman & Maxim, *Software Engineering: A Practitioner's Approach*.

### 7.2 WEBLIOGRAPHY

1. https://expressjs.com/
2. https://mongoosejs.com/
3. https://www.mongodb.com/docs/
4. https://react.dev/
5. https://vitejs.dev/
6. https://tailwindcss.com/docs
7. https://nodemailer.com/about/
8. https://www.npmjs.com/package/bcryptjs
9. https://www.npmjs.com/package/qrcode.react
10. https://www.npci.org.in/what-we-do/upi/product-overview

---

## APPENDIX A: PROJECT STRUCTURE

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

## APPENDIX B: API ENDPOINTS

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

---

*Report Last Updated: March 2026*
