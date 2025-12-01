import express, { Request, Response } from 'express'
import { Pool } from 'pg';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

const app = express()
const port = 5000

// PostgreSQL connection pool - NeonDB
const pool = new Pool({
    connectionString: `${process.env.CONNECTION_STR}`,
})

const initDB = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(20) NOT NULL,
        email VARCHAR(50) UNIQUE NOT NULL,
        age INT,
        phone VARCHAR(15),
        address TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        
        `);

    await pool.query(`
            CREATE TABLE IF NOT EXISTS todos(
            id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(id) ON DELETE CASCADE,
            title VARCHAR(200) NOT NULL,
            description TEXT,
            completed BOOLEAN DEFAULT false,
            due_date DATE,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW()
            )
            `);
};

initDB();

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

// USERS CRUD OPERATIONS
//! Create a new user
app.post('/users', async (req: Request, res: Response) => {
    const { name, email } = (req.body);

    try {
        const result = await pool.query(`INSERT INTO users(name, email) VALUES($1, $2) RETURNING *`, [name, email]);
        res.send({
            status: true,
            message: 'User created successfully',
            data: result.rows[0]
        })

    } catch (err: any) {
        res.status(500).json({
            status: false,
            message: err.message
        })
    }
});

//! Get all users
app.get('/users', async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`SELECT * FROM users`);

        res.status(200).json({
            success: true,
            message: "users retrived successfully",
            data: result.rows,
        });

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message,
            details: err
        })
    };
});

//! Get single users
app.get('/users/:id', async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`SELECT * from users WHERE id = $1`, [req.params.id]);

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "User not found",
            });
        } else {
            res.status(200).json({
                success: true,
                message: "User received success",
                data: result.rows[0],
            })
        }

        // res.status(200).json({
        //     success: true,
        //     message: "User data getting success",

        // })

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message,
            details: err
        })

    }
})
//! Update single users
app.put('/users/:id', async (req: Request, res: Response) => {
    const {name, email} = req.body;
    try {
        const result = await pool.query(`UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`, [name, email, req.params.id]);

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "User not found",
            });
        } else {
            res.status(200).json({
                success: true,
                message: "User updated success",
                data: result.rows[0],
            })
        }

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message,
            details: err
        })

    }
})

//! Delete single users
app.delete('/users/:id', async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`DELETE from users WHERE id = $1`, [req.params.id]);

        if (result.rowCount === 0) {
            res.status(404).json({
                success: false,
                message: "User not found",
            });
        } else {
            res.status(200).json({
                success: true,
                message: "User deleted success",
                data: null,
            })
        }

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message,
            details: err
        })

    }
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
