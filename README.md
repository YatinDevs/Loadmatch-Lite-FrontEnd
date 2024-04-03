# LoadMatch - Lite-App

Initial React Application Setup with Zustand :

    Peer Dependencies :

        npm i
        npm i zustand (for state management)

React Router Setup with Header,Footer and Outlet :

    Dependencies :

        npm i react-router-dom (for React routing)
        npm i dayjs (for date store)
        npm i react-icons (for nav icons)

    Tailwind CSS with Vite setup :

        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p

### Feature : Building Image Hosting with Digital Ocean Spaces (AWS S3 alternative)

Front End

        - For the User to Upload the Image
        - Allow Drag and Drop
        - We can show a Preview

BackEnd

        - Handle Photos/ Files
        - Backend will call Spaces API to Save the images sent from the frontEnd

Problems :

        - Find out how to generate unique code that maps to the image the user uploaded.

Requirements :

AWS SDK for JavaScript S3 Client for Node.js, Browser and React Native.

        - npm install @aws-sdk/client-s3
