// api/hello.js

module.exports = (req, res) => {
  // You can write logic here, securely connect to databases, 
  // or fetch from third-party APIs without exposing your API keys!

  // Send a successful response back to the frontend
  res.status(200).json({
    success: true,
    message: "Assalamu alaikum from your Vercel backend!",
    data: {
      app_name: "Noor — Qur'an, Dua & Knowledge",
      status: "Live"
    }
  });
};
