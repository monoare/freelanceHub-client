# FreelanceHub

## Project Overview

Welcome to FreelanceHub, a platform connecting freelancers and employers. This project allows users to post jobs, submit bids, and manage their freelancing activities.

## Features

- **Job Posting:**

  - Users can post new jobs with details such as job title, description, price range, deadline, and category.

- **Job Bidding:**

  - Freelancers can apply for jobs by submitting bids, including their proposed price and deadline.

- **User Authentication:**

  - Users can register, log in, and log out.
  - JWT tokens are used for authentication, providing a secure way to manage user sessions.

- **User Dashboard:**

  - Users have a personalized dashboard where they can view and manage their posted jobs, applied jobs, and bidding history.

- **Job Categories:**

  - Jobs are categorized into different types (e.g., Web Development, Digital Marketing, Graphics Design).
  - Users can filter jobs based on categories.

- **Job Details:**

  - Users can view detailed information about a specific job, including its description, price range, deadline, and the employer's contact details.

- **Booking System:**

  - Freelancers can book jobs, and employers can accept or reject the bids.
  - There is a status update for each booking (e.g., pending, in progress, completed).

- **Job Management:**

  - Employers can manage their posted jobs, update job details, and delete jobs they no longer need.

- **Bidding History:**

  - Freelancers can view their bidding history, including the status of each bid (e.g., accepted, rejected, completed).

- **Security Measures:**

  - Middleware (`gateman`) is implemented to ensure that certain routes are protected and accessible only with a valid JWT token.
  - Passwords and sensitive information are kept secure by using environmental variables.

- **MongoDB Integration:**

  - MongoDB is used as the database to store job and booking data.

- **API Endpoints:**

  - Various API endpoints are defined for job-related operations, user authentication, and booking management.

- **Client-Server Interaction:**

  - The frontend (client) communicates with the backend (server) to perform CRUD operations and retrieve relevant data.

- **Responsive Design:**

  - The frontend appears to be designed with responsiveness in mind, adapting to different screen sizes.

- **Error Handling:**

  - Basic error handling is implemented, such as checking for valid ObjectIds and handling unauthorized requests.

- **Environmental Variables:**

  - Sensitive information, such as database credentials, is stored in environmental variables.

- **Ping Command:**
  - A ping command is included to verify a successful connection to MongoDB.

**Project Conclusion:** FreelanceHub aims to streamline the freelancing process by providing a platform that connects employers with skilled freelancers. Through intuitive job posting, bidding, and management features, users can efficiently navigate the freelancing landscape. The integration of user authentication ensures a secure experience, and the use of MongoDB as the database allows for robust data storage and retrieval.

**Client-side live link:**

### https://freelancehub-45daa.web.app/
