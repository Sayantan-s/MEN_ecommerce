import { db } from "../helpers/init_postgres";

class User {
    constructor(fullname, username, email, password, img, id) {
        this.fullname = fullname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.img = img;
        this._id = id;
    }

    async save(){
        let validData = [];
        for(let i in this){
            if(!this[i]){
                continue;
            }
            validData.push(this[i]);
        }
        const query = `
            INSERT INTO users
            (${new Array(validData.length).fill('FOO').map((_,i) => (
                `${Object.keys(this)[i]}`
            )).join(',')})
            VALUES
            (${validData.map((_,id) => (
                `$${id + 1}`
            ))})
            RETURNING *
        `
        const { rows } = await db.query(query, validData);

        console.log(rows[0]);
    }

    static async findOne(options){
        const keys = Object.keys(options);
        const values = Object.values(options);

        const query = `
            SELECT * FROM users 
            WHERE ${keys.map((key,id) => {
                return `${key} = $${id + 1}`
            })}
        `
        const { rows } = await db.query(query,values);

        if(rows[0] === undefined) return {};

        return rows[0];
    }

    static async exists(options){

        const rows = await User.findOne(options);

        return !!Object.keys(rows).length;
    }
}

export default User;