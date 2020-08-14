const db=require('../db/config');

class User{
    constructor(user){
        this.id=user.id;
        this.username=user.username;
        this.email=user.email;
        this.password_digest=user.password_digest;
    }

    static findByUserName(username) {
        return db
          .oneOrNone('SELECT * FROM users WHERE username = $1', username)
          .then((user) => {
            if (user) return new this(user);
            else throw new Error('User not found');
          });
      }
      save() {
        return db
          .one(
            `INSERT INTO users
            (username, email, password_digest)
            VALUES ($/username/, $/email/, $/password_digest/)
            RETURNING *`,
            this
          )
          .then((savedUser) => Object.assign(this, savedUser));
      }
    }
    
    module.exports = User;
