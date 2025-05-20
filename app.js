import express from "express";
import connection from "./conn.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.get('/', (req, res) => {
    res.json("Welcome to express server");
});

app.post('/add', (req, res) => {
    const { id, name }= req.body;
    const sql = "INSERT INTO nodejs(id, name) VALUES(?, ?)";
    connection.query(sql, [id, name], (err) => {
        if (err) throw err
        res.json({message: "User added successfully"});
    })
});

// "delete/1"
app.delete("/delete/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const sql = "DELETE FROM nodejs WHERE id = ?";
    connection.query(sql, id, (err) => {
        if (err) throw err
        res.json("User Deleted");
    })
})

app.put("/update/:id", (req, res) => {
    const currentId = parseInt(req.params.id);
    const { id ,name} = req.body
    const sql = "UPDATE nodejs SET id = ? , name = ?   WHERE id = ?";
    connection.query(sql, [id, name, currentId],(err) => {
        if (err) throw err
        res.json("User Updated");
    })
})

app.get('/user/list', (req, res) => {
    const sql = "SELECT * FROM nodejs";
    connection.query(sql, (err, data) => {
        if (err) throw err;
        res.json({message: "Userlist", data});
    })
})
app.listen(3000, () => console.log('http://localhost:3000'));