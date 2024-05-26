app.post("/jwt", (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
      expiresIn: "30h",
    });
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send({ success: true });
  });

  app.post("/logOut", (req, res) => {
    const user = req.body;
    console.log("logged out", user);
    res.clearCookie("token", { maxAge: 0 }).send({ success: true });
  });

  const verifyToken = (req, res, next) => {
    const token = req?.cookies?.token;
    if (!token) {
      return res.status(401).send({ message: "unauthorized" });
    }
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "unauthorized " });
      }
      req.user = decoded;
      next();
    });
  };

  const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // const loggingUserEmail = { email: currentUser.email };
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        axiosPublic
          .post("/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data));
      } else {
        axiosPublic
          .post("/logOut", loggedUser, {
            withCredentials: true,
          })
          .then((res) => console.log(res.data));
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [user?.email]);