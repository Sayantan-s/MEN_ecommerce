import { db } from '../helpers/init_postgres';

class User {
    constructor(fullname, username, email, password, img, id) {
        this.fullname = fullname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.img = img;
        this._id = id;
    }

    async save() {
        let validData = [];
        for (let i in this) {
            if (!this[i]) {
                continue;
            }
            validData.push(this[i]);
        }
        const query = `
            INSERT INTO users
            (${new Array(validData.length)
                .fill('FOO')
                .map((_, i) => `${Object.keys(this)[i]}`)
                .join(',')})
            VALUES
            (${validData.map((_, id) => `$${id + 1}`)})
            RETURNING *
        `;
        const { rows } = await db.query(query, validData);

        return rows[0];
    }

    static async findOne(options, constraints = '*') {
        const keys = Object.keys(options);
        const values = Object.values(options);

        const queryConstraints =
            (constraints !== '*' || constraints.split(' ').length !== 1) &&
            constraints.split(' ').join(',');

        const query = `
            SELECT ${queryConstraints} FROM users 
            WHERE ${keys.map((key, id) => {
                return `${key} = $${id + 1}`;
            })}
        `;
        const { rows } = await db.query(query, values);

        return rows[0];
    }

    static async exists(options) {
        const rows = await User.findOne(options);

        return !!rows;
    }
}

export default User;
