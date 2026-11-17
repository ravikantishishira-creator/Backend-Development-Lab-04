
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("./database");

const app = express();

app.use(express.json());

const JWT_SECRET = "my_secret_key";

// REGISTER API
app.post("/register", async (req, res) => {
    const { username, name, password } = req.body;

    if (!username || !name || !password) {
        return res.status(400).json({
            error: "All fields are required"
        });
    }

    db.get(
        "SELECT * FROM users WHERE username = ?",
        [username],
        async (err, user) => {

            if (err) {
                return res.status(500).json({
                    error: "Database error"
                });
            }

            if (user) {
                return res.status(400).json({
                    error: "User already exists"
                });
            }

            try {
                const hashedPassword = await bcrypt.hash(password, 10);

                db.run(
                    `INSERT INTO users (username, name, password)
                     VALUES (?, ?, ?)`,
                    [username, name, hashedPassword],
                    function (err) {

                        if (err) {
                            return res.status(500).json({
                                error: "Registration failed"
                            });
                        }

                        res.status(201).json({
                            message: "User registered successfully"
                        });
                    }
                );

            } catch (error) {
                res.status(500).json({
                    error: "Password hashing failed"
                });
            }
        }
    );
});


// LOGIN API
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            error: "Username and password are required"
        });
    }

    db.get(
        "SELECT * FROM users WHERE username = ?",
        [username],
        async (err, user) => {

            if (err) {
                return res.status(500).json({
                    error: "Database error"
                });
            }

            if (!user) {
                return res.status(400).json({
                    error: "Invalid user"
                });
            }

            try {
                const isPasswordCorrect = await bcrypt.compare(
                    password,
                    user.password
                );

                if (!isPasswordCorrect) {
                    return res.status(400).json({
                        error: "Invalid password"
                    });
                }

                const payload = {
                    username: username
                };

                const jwtToken = jwt.sign(payload, JWT_SECRET);

                res.status(200).json({
                    jwt_token: jwtToken
                });

            } catch (error) {
                res.status(500).json({
                    error: "Login failed"
                });
            }
        }
    );
});


// START SERVER
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
