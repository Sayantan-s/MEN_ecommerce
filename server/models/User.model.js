import { db } from "../helpers/init_postgres";

class User {
    constructor(fullname, username, email, password, img, id) {
        this.fullname = fullname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.img = img || null;
        this._id = id || null;
    }

    async save(){
        console.log(this);
    }

    static async exists(options){

        const keys = Object.keys(options);
        const values = Object.values(options);

        const query = `
            SELECT * FROM users 
            WHERE ${keys.map((key,id) => {
                return `${key} = $${id + 1}`
            })}
        `
        const { rows } = await db.query(query,values);

        return !!rows.length;
    }
}

export default User;