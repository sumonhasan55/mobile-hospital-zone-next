/* eslint-disable import/no-anonymous-default-export */
// pages/api/auth.js
export default (req, res) => {
    // Simulate authentication logic
    const isAuthenticated = true;
  
    if (isAuthenticated) {
      res.status(200).json({ message: 'User is authenticated' });
    } else {
      res.status(401).json({ message: 'User is not authenticated' });
    }
  };
  