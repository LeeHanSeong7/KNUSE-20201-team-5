import Database from '../DM/Database';

export default {
    login: (id, pw, major) => {
        return Database.login(id, pw, major);
    },
};