const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

const sendUserResponse = (res, statusCode, user, token) => {
  res.status(statusCode).json({
    success: true,
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      resume: user.resume,
    },
  });
};

// register
exports.register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Name, email and password are required");
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const token = createToken(user._id);
    sendUserResponse(res, 201, user, token);
  } catch (error) {
    next(error);
  }
};

// login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400);
      throw new Error("Email and password are required");
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      res.status(401);
      throw new Error("Invalid email or password");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401);
      throw new Error("Invalid email or password");
    }

    const token = createToken(user._id);
    sendUserResponse(res, 200, user, token);
  } catch (error) {
    next(error);
  }
};

// get current logged-in user
exports.getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        resume: user.resume,
      },
    });
  } catch (error) {
    next(error);
  }
};

// update current user profile
exports.updateMe = async (req, res, next) => {
  try {
    const { name, email, resume } = req.body;
    const updates = {};

    if (name) updates.name = name;
    if (email) updates.email = email;
    if (resume) updates.resume = resume;

    if (Object.keys(updates).length === 0) {
      res.status(400);
      throw new Error("No valid fields provided for update");
    }

    if (email) {
      const existingUser = await User.findOne({ email });
      if (existingUser && existingUser._id.toString() !== req.user.id.toString()) {
        res.status(400);
        throw new Error("Email already in use");
      }
    }

    const user = await User.findByIdAndUpdate(req.user.id, updates, {
      new: true,
      runValidators: true,
    });

    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        resume: user.resume,
      },
    });
  } catch (error) {
    next(error);
  }
};
