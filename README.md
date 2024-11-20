# Okoa Gari 🚗🔧  
**On-Demand Mechanic and Towing Services**

---

## Project Overview  
Okoa Gari is a web platform that allows users to easily order a mechanic or towing service to their location. The system includes dashboards for users and garages to facilitate seamless interaction, service requests, and feedback collection.

---

## Features  

### User Dashboard  
The User Dashboard allows users to place orders for mechanic or towing services with the following features:  
- **Login**: Secure user authentication.  
- **Mechanic or Towing Order Form**:  
  - Users can fill in car details such as model, type, transmission, and fuel type.  
  - **Payment Integration**: Users can make payments via M-Pesa for a smooth transaction experience.  
- **Feedback**: After service is completed, users can submit written feedback to the garage.

### Garage Dashboard  
The Garage Dashboard enables garages to manage incoming service requests and offer their services:  
- **View Service Requests**: Garages can view requests from users for mechanic or towing services.  
- **Add Services**: Garages can add or update the services they provide.

---

## Technologies Used  

### Frontend  
- **React**: For dynamic, responsive user interfaces.  
- **Tailwind CSS**: For sleek and modern styling.  
- **HTML & JavaScript**: Core web technologies used for structure and interactivity.

### Backend  
- **Python** & **Flask**: For handling backend processes like API endpoints, user authentication, and business logic.

---

## Project Structure  

### Frontend  
```plaintext
Okoa-Gari-Frontend/
├── public/           # Public assets (images, etc.)
├── src/
│   ├── components/   # Reusable React components (buttons, forms, etc.)
│   ├── pages/        # Main pages (e.g., Dashboard, OrderForm)
│   ├── assets/       # Images and media files
│   └── styles/       # Tailwind CSS configurations
├── package.json      # Frontend dependencies
└── README.md         # Frontend documentation
Backend
plaintext
Copy code
Okoa-Gari-Backend/
├── app/              # Main Flask application
│   ├── routes/       # API endpoints for handling user requests, orders, etc.
│   ├── models/       # Database models for user, service, and order management
│   ├── templates/    # HTML templates (if any)
│   ├── static/       # Static files like images, CSS for backend (if applicable)
│   └── utils/        # Utility functions for backend operations
├── requirements.txt  # Backend dependencies
└── README.md         # Backend documentation
Setup and Installation
Frontend Setup
To set up the frontend, follow these steps:

Clone the Frontend Repository

bash
Copy code
git clone https://github.com/your-username/okoa-gari-frontend.git
cd okoa-gari-frontend
Install Dependencies

bash
Copy code
npm install
Run the Development Server

bash
Copy code
npm start
Build for Production

bash
Copy code
npm run build
Backend Setup
To set up the backend, follow these steps:

Clone the Backend Repository

bash
Copy code
git clone https://github.com/your-username/okoa-gari-backend.git
cd okoa-gari-backend
Create a Virtual Environment

bash
Copy code
python3 -m venv env
source env/bin/activate  # For Linux/MacOS
env\Scripts\activate     # For Windows
Install Dependencies

bash
Copy code
pip install -r requirements.txt
Run the Flask Server

bash
Copy code
flask run
How It Works
User Flow
Users log into the system.
Users fill in car details (model, type, transmission, fuel type) and request either a mechanic or towing service.
Payment is processed securely via M-Pesa.
After the service is completed, users can leave feedback for the garage.
Garage Flow
Garages can view incoming service requests from users.
Garages can add or update their services.
Contributing
Contributions are welcome! Here’s how you can contribute to the project:

Fork the Repository:
Fork the repository you wish to contribute to (frontend or backend).

Create a New Branch:

bash
Copy code
git checkout -b feature-name
Make Changes:
Make the necessary changes or improvements.

Commit Changes:

bash
Copy code
git commit -m "Add feature-name"
Push Changes:

bash
Copy code
git push origin feature-name
Open a Pull Request:
Open a pull request to submit your changes.

License
This project is licensed under the MIT License.

vbnet
Copy code

This version is formatted for better readability in Visual Studio Code and ensures that headings and code blocks are properly aligned. Let me know if you'd like further tweaks! 😊
