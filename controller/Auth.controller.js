var jwt = require("jsonwebtoken");
const UserModel = require("../model/User.model");
const AuthRouter = require("express").Router();

// 1. Signup API
AuthRouter.post("/create", (req, res) => {
  const User = new UserModel(req.body);
  User.save()
    .then((response) => {
      if (response._id) {
        return res.status(200).json({
          success: true,
          message: "Account Creation Successful",
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "Something went wrong",
        });
      }
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error: error,
      });
    });
});
// 2. Sign in
AuthRouter.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      error: "Email Id is not valid",
    });
  }

  if (!password) {
    return res.status(400).json({
      success: false,
      error: "Password is not valid",
    });
  }

  UserModel.findOne({ email: email })
    .then((response) => {
      if (response && response._id) {
        if (response.password === password) {
          var token = jwt.sign(
            {
              uid: response._id,
              role: response.role,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
          );
          return res.status(200).json({
            success: true,
            message: "Sign in Successful",
            token: token,
          });
        } else {
          return res.status(400).json({
            success: true,
            message: "Email id or Password is wrong",
          });
        }
      } else {
        return res.status(400).json({
          success: false,
          message: "Account does not exist",
        });
      }
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error: error,
      });
    });
});
// 3. Forgot password
AuthRouter.post("/forgotPassword", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      error: "Email Id is not valid",
    });
  }

  UserModel.findOne({ email: email })
    .then((response) => {
      if (response && response._id) {
        return res.status(200).json({
          success: true,
          message: "Password recovery email sent to your inbox.",
          uid: response._id,
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Account does not exist",
        });
      }
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error: error,
      });
    });
});
// 4. Update User
AuthRouter.patch("/update/:uid", (req, res) => {
  const UserData = req.body;
  const { uid } = req.params;

  UserModel.findByIdAndUpdate(uid, UserData)
    .then((response) => {
      if (response && response._id) {
        return res.status(200).json({
          success: true,
          message: "User Updated Successfully",
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "User does not exist",
        });
      }
    })
    .catch((error) => {
      return res.status(400).json({
        success: false,
        error: error,
      });
    });
});

module.exports = AuthRouter;
