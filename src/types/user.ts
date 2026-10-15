interface User {
  id: number;
  name: string;
  email: string;
}

interface Admin extends User {
  role: 'admin';
  banUser(username: string): void;
}

const superAdmin: Admin = {
  id: 101,
  name: "Александр",
  email: "admin@example.com",
  role: 'admin',
  banUser: (username: string) => {
    console.log(`Пользователь ${username} заблокирован.`);
  }
};

superAdmin.banUser("spam_bot_99");