import Database from '../DM/Database';

export default {
    login: (id, pw, major) => {
        Database.login(id, pw, major);
    },
};